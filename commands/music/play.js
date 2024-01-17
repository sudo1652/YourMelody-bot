const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('재생')
		.setDescription('음악을 재생합니다.')
		.addStringOption(option =>
			option.setName('음악')
				.setDescription('재생할 음악을 알려주세요!')
				.setRequired(true)),
	async execute(interaction = new CommandInteraction(), bot) {
		const music = interaction.options.getString('음악');
		const { member } = interaction;

		if (member.voice.channel) {
			await bot.distube.playVoiceChannel(member.voice.channel, music);
			await interaction.reply('음악을 재생합니다: ', music);
		} else {
			await interaction.reply('명령어 사용 전 음성 채널에 들어가 있어야 합니다.');
		}
	},
};

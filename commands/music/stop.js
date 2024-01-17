const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, VoiceChannel } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('정지')
		.setDescription('음악을 정지합니다.'),
	async execute(interaction = new CommandInteraction(), bot) {
		const { member } = interaction;

		if (member.voice.channel instanceof VoiceChannel) {
			await bot.distube.stop(member.voice.channel);
			await interaction.reply('음악을 정지합니다.');
		} else {
			await interaction.reply('명령어 사용 전 음성 채널에 들어가 있어야 합니다.');
		}
	},
};
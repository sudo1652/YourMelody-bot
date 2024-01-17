const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('사용자의 프로필 사진을 불러옵니다.')
		.addUserOption(option => option.setName('대상').setDescription('보여드릴 사용자의 프로필 사진을 어떤 이용자로 하시겠어요?')),
	async execute(interaction) {
		const user = interaction.options.getUser('대상을 선택하세요.');
		if (user) return interaction.reply(`${user.username}'님의 프로필 사진 프로필 사진은 다음과 같습니다: ${user.displayAvatarURL()}`);
		return interaction.reply(`${interaction.user.displayAvatarURL()}`);
	},
};

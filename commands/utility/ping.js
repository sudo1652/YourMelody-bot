const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('핑')
		.setDescription('현재 핑 상태를 보여줍니다.'),
	async execute(interaction = new CommandInteraction()) {
		await interaction.reply(`현재 당신의 핑은 ${interaction.client.ws.ping}ms 입니다.`);
	},
};

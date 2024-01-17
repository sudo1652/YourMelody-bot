const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('지우기')
		.setDescription('최대 99개의 메시지까지 지울 수 있습니다.')
		.addIntegerOption(option => option.setName('amount').setDescription('삭제할 메시지의 갯수를 숫자로 알려주세요.')),
	async execute(interaction) {
		const amount = interaction.options.getInteger('amount');

		if (amount < 1 || amount > 99) {
			return interaction.reply({ content: '1부터 99까지의 숫자 중 하나를 입력해야 합니다.', ephemeral: true });
		}
		await interaction.channel.bulkDelete(amount, true).catch(error => {
			console.error(error);
			interaction.reply({ content: '이 채널에서 메시지를 삭제하던 중 문제가 발생했습니다. 다시 시도해주세요.', ephemeral: true });
		});

		return interaction.reply({ content: `\`${amount}\`  개의 메시지 삭제를 완료했습니다.`, ephemeral: true });
	},
};
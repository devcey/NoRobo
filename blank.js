const { SlashCommandBuilder } = require('@discordjs/builders');

const Embed = new.Discord.MessageEmbed()
	.setColor('#859EE5')
	.setTitle('')
	.setFooter('NoRobo© 2020-2022')
	.setDescription('')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('')
		.setDescription(''),
	async execute(interaction) {
		await interaction.reply(Embed);
	},
};

const { SlashCommandBuilder } = require('@discordjs/builders');
const { version } = require("./version.json")

const infoEmbed = new Discord.MessageEmbed()
	.setColor('#859EE5')
	.setTitle("NoRobo Info")
	.setFooter('NoRobo© 2020-2022')
	.setDescription("Hello! I am NoRobo, a Discord bot. I am created by devcey#7839 as a hobby project and am coded with JavaScript. (for whoever is curious)\nCurrently I am running " + version + ".");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Gives information on NoRobo.'),
	async execute(interaction) {
		await interaction.reply(infoEmbed);
	},
};

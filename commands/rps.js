const { SlashCommandBuilder } = require('@discordjs/builders');

const Embed = new.Discord.MessageEmbed()
	.setColor('#859EE5')
	.setTitle('')
	.setFooter('NoRobo© 2020-2022')
	.setDescription('')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('Rock, Paper, Scissors')
		.setDescription('Play a round of Rock, Paper, Scissors with NoRobo!'),
	async execute(interaction) {
		await interaction.reply(Embed);
	},
};

const { SlashCommandBuilder } = require('@discordjs/builders');

const coin = ["Heads!", "Tails!"]

flippedCoin = Math.floor(Math.random() * coin.length);

const Embed = new.Discord.MessageEmbed()
	.setColor('#859EE5')
	.setTitle('NoRobo Coin Flip')
	.setFooter('NoRobo© 2020-2022')
	.setDescription(coin[flippedCoin])

module.exports = {
	data: new SlashCommandBuilder()
		.setName('flip')
		.setDescription('Flips a coin and gives you the result'),
	async execute(interaction) {
		await interaction.reply(Embed);
	},
};

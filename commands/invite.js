const { SlashCommandBuilder } = require('@discordjs/builders');

const inviteEmbed = new.Discord.MessageEmbed()
	.setColor('#859EE5')
	.setTitle('NoRobo Invite')
	.setFooter('NoRobo© 2020-2022')
	.setDescription('Invite to the NoRobo Newsletter server: https://discord.gg/jsgnxTnAGu')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('Gives an invite to the NoRobo newsletter server.'),
	async execute(interaction) {
		await interaction.reply(inviteEmbed);
	},
};

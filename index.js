//   0   0   00   000    00   000    00
//   00  0  0  0  0  0  0  0  0  0  0  0
//   0 0 0  0  0  000   0  0  000   0  0
//   0  00  0  0  0 0   0  0  0  0  0  0
//   0   0   00   0  0   00   000    00
//   Your not so public moderation bot

const fs = require("fs");
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
const { version } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.setMaxListeners(30)

client.once('ready', () => {
	console.log("Servers NoRobo is in =")
	client.guilds.cache.forEach((guild)=>{
		console.log(guild.name)
	})
	console.log(" ")
	console.log("Total Servers: " + client.guilds.cache.size)
	console.log(" ")
	console.log("NoRobo ReBorn: Powered up")
	client.user.setActivity("Codename: ReBorn", {type: "PLAYING"})
});

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

//
//  NOROBO WELCOME MESSAGE
//
const welcomingEmbed = new Discord.MessageEmbed()
	.setColor('#859EE5')
	.setTitle("Thank you for adding NoRobo!")
	.setFooter('NoRobo© 2020-2021')
	.setDescription("Hello! I am NoRobo. I would like to thank you for adding me to your server!\nI have officially removed support for my normal prefix since Alpha 10. Please use Slash Commands instead!\n\nCurrent version: " + version);

client.on('guildCreate', guild => {
guild.systemChannel.send(welcomingEmbed)
});

client.login(token);

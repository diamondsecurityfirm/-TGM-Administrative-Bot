const Discord = require('discord.js');
const client = new Discord.Client();
const newUsers = new Discord.Collection();
const swearWords = ["fuck", "flucking", "f/ck heads", "f/ck", "Niger", "f uck", "dick", "vagina", "pussy","nigger","asshole","bitch","bastard","queer","sex","slut","whore","jerk","jizz","cunt","crap","shit","shut up"];

client.on('ready', () => {
  client.user.setGame(`Preforming administrative tasks`);
  console.log(`Logged in as ${client.user.tag}!`);
});

// General commands
client.on('message', message => {
	
let soruce = message
let guild = message.guild
let channels = guild.channels
var prefix = '!';
var ruleschannel = channels.find("name", "rules")
var announcementchannel = channels.find("name", "announcements")
var oneplatoon = channels.find("name", "1st-company-announcements")


if ( swearWords.some(word => message.content.toLowerCase().includes(word)) ) {
 message.delete();
 message.reply("Swearing is against [TGM] discord rules.");
}
	
client.login(process.env.BOT_TOKEN);

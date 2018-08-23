const Discord = require('discord.js');
const client = new Discord.Client();
const newUsers = new Discord.Collection();
var prefix = '!';
const swearWords = ["fuck", "flucking", "f/ck heads", "f/ck", "Niger", "f uck", "dick", "vagina", "pussy","nigger","asshole","bitch","bastard","queer","sex","slut","whore","jerk","jizz","cunt","crap","shit","shut up"];

client.on('ready', () => {
  client.user.setGame(`Preforming administrative tasks`);
  console.log(`Logged in as ${client.user.tag}!`);
});

function isCommand(command, message){
	var command = command.toLowerCase();
	var content = message.content.toLowerCase();
	return content.startsWith(prefix + command);
}

// General commands
client.on('message', (message) => {
if (message.author.bot) return; // Dont answer yourself.
var args = message.content.split(/[ ]+/)
   
	
let soruce = message
let guild = message.guild
let channels = guild.channels
var ruleschannel = channels.find("name", "rules")

   if(isCommand('Test', message)){
    	message.reply('Test has passed, new command system is up and working ;) ');
    }
});
	
if ( swearWords.some(word => message.content.toLowerCase().includes(word)) ) {
 message.delete();
 message.reply("Swearing is against [TGM] discord rules.");
}
});
	
client.login(process.env.BOT_TOKEN);

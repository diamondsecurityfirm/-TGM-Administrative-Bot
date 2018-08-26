const Discord = require('discord.js');
const client = new Discord.Client();
const newUsers = new Discord.Collection();
var prefix = '!';
const swearWords = ["fuck", "flucking", "f/ck heads", "f/ck", "Niger", "f uck", "dick", "vagina", "pussy","nigger","asshole","bitch","bastard","queer","sex","slut","whore","jerk","jizz","cunt","crap","shit","shut up"];

client.on('ready', () => {
 client.user.setGame(`Type !Commands for a list of commands.`);
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

   if(isCommand('Commands', message)){
    	message.reply(':one: !Commands (Lists the commands) :two: !Invite (Posts a invite code for general use) ');
    } else if(isCommand('Invite', message)){
    	message.reply('Here is the invite code you have requested. https://discord.gg/nwa6k3G');
    } else if ( swearWords.some(word => message.content.toLowerCase().includes(word)) ) {
 message.delete();
 message.reply("Swearing is against [TGM] discord rules.");
} else     
    if(isCommand('Promote', message)){
    	var username = args[1];
    	if (username){
    		message.channel.send(`Checking ROBLOX for ${username}`)
    	} else {
    		message.channel.send("Please enter a username.")
    	}
    	return;
    } else if(isCommand('Ban', message)){
    let modRole = message.guild.roles.find("name", "HQ");
    if(message.member.roles.has(modRole.id)) { 
      let banMember = message.guild.member(message.mentions.users.first());
      message.guild.member(banMember).ban();
      message.channel.sendMessage("Member banned.");
    } else {
      return message.reply("Your permission levels prevent you from using this command!");
    }
});
	
client.login(process.env.BOT_TOKEN);

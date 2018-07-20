const Discord = require('discord.js');
const client = new Discord.Client();
const newUsers = new Discord.Collection();
const swearWords = ["fuck", "dick", "vagina", "pussy","nigger","asshole","bitch","bastard","queer","sex","slut","whore","jerk","jizz","cunt","crap","shit","shut up"];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
// General commands
client.on('message', message => {
	
let soruce = message
let guild = message.guild
let channels = guild.channels
var ruleschannel = channels.find("name", "rules")

  if (message.content === '!invite') {
    message.reply('Here is the invite link! https://discord.gg/SJQ5t4Z');
  } else if (message.content === ';rules')
	  ruleschannel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Server Rules",
    url: "http://google.com",
    description: "This channel contains important server rules.",
    fields: [{
        name: "No Swearing",
        value: "This discord is family friendly & does not allow swearing."
      },
      {
        name: "Roblox Nickname",
	  value: "Your nickname should be exactly as it appears on roblox."
      },
	  {
	   name: "Private issues and/or matters are private",
	  value: "If you have a personal issue with someone else, do not bring it to the server, keep it elsewhere"
	  },
	  {
	   name: "Proper grammar",
	  value: "You are required to use as much proper grammar as you can!"
	  },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© [TGM]"
    }
  }
});
});
// Protectee Commands, Anti-Swear
client.on('message', message => {

let soruce = message
let guild = message.guild
let channels = guild.channels
var ProtectChannel = channels.find("name", "protection")
var announcementchannel = channels.find("name", "announcements")
var roleschannel = channels.find("name", "role-request")

  if (message.content === ";requestprotection") {
	  message.delete();
    ProtectChannel.send("@everyone" + "Protectee" + (message.author) + " Is requesting protection at their server!");
  } else if( swearWords.some(word => message.content.toLowerCase().includes(word)) ) {
 message.delete();
 message.reply("Swearing is against this discords rules!");
}
});

client.login(process.env.BOT_TOKEN);

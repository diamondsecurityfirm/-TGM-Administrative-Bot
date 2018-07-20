const Discord = require('discord.js');
const client = new Discord.Client();
const newUsers = new Discord.Collection();
const swearWords = ["fuck", "Niger", "f uck", "dick", "vagina", "pussy","nigger","asshole","bitch","bastard","queer","sex","slut","whore","jerk","jizz","cunt","crap","shit","shut up"];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
// General commands
client.on('message', message => {
	
let soruce = message
let guild = message.guild
let channels = guild.channels
var ruleschannel = channels.find("name", "rules")
var announcementchannel = channels.find("name", "announcements")

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
}); else if (message.content === '$roles')
	  announcementchannel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "role-request",
    url: "http://google.com",
    description: "This channel is only for requesting roles, freely speaking will lead to a suspension/server ban!",
    fields: [{
        name: "Format",
        value: "Use the format below, do not speak within the channel except for role requests!"
      },
      {
        name: "Roblox Username",
	  value: "This is so we can change your nickname on the server."
      },
	  {
        name: "Roblox Profile Link",
	  value: "This is so we can perform a background check on you."
      },
	  {
        name: "Rank in group",
	  value: "This is used to put you as the correct rank, lying will lead to Blacklist from Diamond Security Firm!"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© DSF"
    }
  }
}); else if ( swearWords.some(word => message.content.toLowerCase().includes(word)) ) {
 message.delete();
 message.reply("Swearing is against [TGM] discord rules.");
}
});

client.login(process.env.BOT_TOKEN);

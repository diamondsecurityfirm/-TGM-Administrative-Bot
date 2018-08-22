const Discord = require('discord.js');
const client = new Discord.Client();
const newUsers = new Discord.Collection();
const swearWords = ["fuck", "flucking", "Niger", "f uck", "dick", "vagina", "pussy","nigger","asshole","bitch","bastard","queer","sex","slut","whore","jerk","jizz","cunt","crap","shit","shut up"];

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
var oneplatoon = channels.find("name", "1st-company-announcements")

  if (message.content === '!invite') {
    message.reply('Here is the invite link! https://discord.gg/SJQ5t4Z');
  }  else if (message.content === '!commands') {
    message.reply('Here is a list of my current commands! !invite [Creates a discord invite code], !commands [ Shows all the commands]');
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
}); else if (message.content === ';mandatorymasspatrol')
	  announcementchannel.send({embed: {
    color: 3447003,
    author: {
      name: message.author.username,
      icon_url: client.user.avatarURL
    },
    title: "Mandatory Mass Patrol",
    url: "https://www.roblox.com/games/1279997693/The-Northern-Frontier",
    description: "@everyone You may find information listed below.",
    fields: [{
        name: "Instructions",
        value: "Enter " + (message.author.username) + " server, STS in back of general store, Await further instructions in game."
      },
      {
        name: "If you cannot attend",
	  value: "If you are unable to attend please DM the host and explain why you cannot attend the mass patrol."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© [TGM]"
    }
  }
}); else if (message.content === ';1stcompanyloadout')
	  oneplatoon.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "1st company loadouts",
    url: "https://www.roblox.com/games/1279997693/The-Northern-Frontier",
    description: "The loadouts listed below must be followed exactly or you may be demoted or Dishonarable Discharged.",
    fields: [{
        name: "Low Rank Loadout.",
	value: "If you are below the rank of Staff Sergeant you are required to use the following loadout: Kentucky Rifle, Cutlass, Bandages, Flintlock balls, Faction Uniform, Faction Tricorne"
      },
      {
        name: "High Rank Loadout.",
	value: "If you are the rank of Staff Sergeant or above you are required to use the following loadout: Kentucky Rifle (Optional), Cutlass, Bandages, Flintlock balls, Faction Uniform, Faction Tricorne(Optional)"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© [TGM]"
    }
  }
});  else if ( swearWords.some(word => message.content.toLowerCase().includes(word)) ) {
 message.delete();
 message.reply("Swearing is against [TGM] discord rules.");
}
});

client.login(process.env.BOT_TOKEN);

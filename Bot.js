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
var oneplatoon = channels.find("name", "1st-platoon-chat")
var twoplatoon = channels.find("name", "2nd-platoon-chat")

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
}); else if (message.content === ';1stplatoonrules')
	  oneplatoon.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "1st Platoon Rules",
    url: "https://www.roblox.com/games/1279997693/The-Northern-Frontier",
    description: "The rules listed below must be followed exactly or you may be demoted or Dishonarable Discharged.",
    fields: [{
        name: "Rule One.",
        value: "If a General or above requests protection you must report to their server if you're online."
      },
      {
        name: "Rule Two.",
	value: "You are required to capture at least 1 island per week, Failure to do so will lead to discharge from 1st Platoon."
      },
      {
        name: "Rule Three.",
	value: "You are required to use the following loadout: Kentucky Rifle, Cutlass, Bandages, Flintlock balls, Faction Uniform, Faction Beret "
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© [TGM]"
    }
  }
}); else if (message.content === ';2ndplatoonrules')
	  twoplatoon.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "2nd Platoon Rules",
    url: "https://www.roblox.com/games/1279997693/The-Northern-Frontier",
    description: "The rules listed below must be followed exactly or you may be demoted or Dishonarable Discharged.",
    fields: [{
        name: "Rule One.",
        value: "You must report to the Corporal before reporting to the sergeant and then the Captain."
      },
      {
        name: "Rule Two.",
	value: "You are required to attend trainings and events."
      },
      {
        name: "Rule Three.",
	value: "You are required to use the following loadout: Kentucky Rifle, Cutlass, Bandages, Flintlock balls, Faction Uniform, Faction Tricorne "
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© [TGM]"
    }
  }
});
 else if ( swearWords.some(word => message.content.toLowerCase().includes(word)) ) {
 message.delete();
 message.reply("Swearing is against [TGM] discord rules.");
}
});

client.login(process.env.BOT_TOKEN);

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
var logchannel = channels.find("name", "admin-logs")

   if(isCommand('Commands', message)){
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Commands list",
    description: "All commands are shown below",
    fields: [{
        name: "!Commands",
        value: "Responds with a list of commands"
      },
      {
        name: "!Invite",
        value: "Displays a invite code for the server that can be sent to other people."
      },
      {
        name: "!kick @username [Reason]",
        value: "This allows anyone ranked Ensign+ to kick someone from the discord server. (Does not kick them from roblox group)"
      },
      {
        name: "!promote username",
        value: "This allows anyone ranked Ensign+ to promote someone by 1 rank. (Does not currently work but will reply back)"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© [TGM] The German Mercenaries"
    } 
   }
   })}   
  else if(isCommand('Invite', message)){
  message.reply('Here is the invite code you have requested. https://discord.gg/nwa6k3G');
    } else if ( swearWords.some(word => message.content.toLowerCase().includes(word)) ) {
 message.delete();
 message.reply("Swearing is against [TGM] discord rules.");
} else     
    if(isCommand('Promote', message)){
    	var username = args[1];
    	if (username){
    		message.channel.send(`Checking [TGM] The German Mercenaries for ${username}`)
    	} else {
    		message.channel.send("Please enter a username!")
    	}
    	return;
    } else if(isCommand('Kick', message)){
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permisson to kick this person!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");
    message.delete();

    const embed = new Discord.RichEmbed()
  .setTitle("Kicked User log")
  .setAuthor("[TGM] Administrative Bot", "https://cdn.discordapp.com/attachments/481549255652147210/484502178573058050/germanflag.jpg")
  .setColor(0x00AE86)
  .setDescription("This is a bot produced log for the !kick command.")
  .setFooter("A user has been kicked", "https://cdn.discordapp.com/attachments/481549255652147210/484502178573058050/germanflag.jpg")
  .setTimestamp()
  .setURL("https://www.roblox.com/My/Groups.aspx?gid=4177017")
  .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
  .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Kicked In", message.channel)
  .addField("Reason", kReason);

   if(!logchannel) return message.channel.send("Can't find admin-logs channel.");

   message.guild.member(kUser).kick(kReason);
   logchannel.send({embed});
	    
    return;
  }
	
});

client.login(process.env.BOT_TOKEN);

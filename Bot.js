const Discord = require("discord.js");
const client = new Discord.Client();
const newUsers = new Discord.Collection();
var prefix = ";";
const swearWords = ["fuck","bich","fck","e thot","thot", "flucking","tits", "f/ck heads", "f/ck","gay", "Niger", "f uck", "dick", "vagina", "pussy", "nigger", "asshole", "bitch", "bastard", "queer", "sex", "slut", "whore", "jerk", "jizz", "cunt", "crap","bitc","dic","coochi","coochie", "shit", "shut up"];

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

function isCommand(command, message) {
    var command = command.toLowerCase();
    var content = message.content.toLowerCase();
    return content.startsWith(prefix + command);
}

// General commands
client.on("message", (message) => {
    if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)

    let soruce = message
    let guild = message.guild
    let channels = guild.channels
    var ruleschannel = channels.find("name", "rules")
    var general = channels.find("name", "general-chat")
    var logchannel = channels.find("name", "admin-logs")

    if (isCommand("Commands", message)) {
        message.channel.send({
            embed: {
                color: 3447003,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: "TNF BlackMarket Information",
                description: "Information about the market can be found below",
                fields: [{
                        name: "Rules",
                        value: "To find out about the rules please visit #Rules"
                    },
                    {
                        name: "What is TNF BlackMarket?",
                        value: "The TNF Blackmarket is where people go to buy items and pounds with USD, Robux & Pounds, They can also contact a Market Manager to sell their items, If you have any more questions contact a Market Admin or higher"
                    },
                    {
                        name: "Is this a scam?",
                        value: "No, TNF Blackmarket is not a scam, We provide all our items at the cheapest prices possible, We have unlimited pounds & can get almost any item you need."
                    },
                    {
                        name: "How do I use the custom bot?",
                        value: "If you are wondering about the bot, Please use !commands in the bot-commands channel!"
                    }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "[TGM] The German Mercenaries"
                }
            }
        })
    } else if (isCommand("Invite", message)) {
        message.reply("Here is the invite code you have requested. https://discord.gg/nwa6k3G");
    } else if (isCommand("stop", message)) {
        message.delete();
        general.send("I am sorry to tell you all this but, as of 12:31 AM 9/21/2018 Dark_Dimensions has decided to quit TGM as of now your new commanding officer will be @Robin5D");
    } else if (swearWords.some(word => message.content.toLowerCase().includes(word))) {
        message.delete();
        message.reply("Swearing is against [TGM] discord rules.");
    } else
    if (isCommand("Promote", message)) {
        var username = args[1];
        if (username) {
            message.channel.send(`Checking [TGM] The German Mercenaries for ${username}`)
        } else {
            message.channel.send("Please enter a username!")
        }
        return;
    } else if (isCommand("Kick", message)) {
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!kUser) return message.channel.send("Can't find user!");
        let kReason = args.join(" ").slice(22);
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permisson to kick this person!");
        if (kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");
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

        if (!logchannel) return message.channel.send("Can't find admin-logs channel.");

        message.guild.member(kUser).kick(kReason);
        logchannel.send({
            embed
        })

        return;
    }


    if (isCommand("Purge", message)) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permisson to run this command!");
        if (!args[0]) return message.channel.send("You must enter a number of messages to delete!");
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send("Deleted ${args[0]} messages.").then(msg => {
                msg.delete(5000)

            })
        })
    }
})
client.login(process.env.BOT_TOKEN);

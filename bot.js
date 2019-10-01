const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    client.user.setActivity(`CHamburr with ${client.users.size} users, and Big Tla`);
});

client.on("guildCreate", guild => {
    console.log(`New guild joined: ${guild.name} (ID: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.user.setActivity(`CHamburr with ${client.users.size} users, and Big Tla`);
});

client.on("guildDelete", guild => {
    console.log(`I have been removed from: ${guild.name} (ID: ${guild.id})`);
    client.user.setActivity(`CHamburr with ${client.users.size} users, and Big Tla`);
});

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content === "<@510948220902572054>" || message.content === "<@!510948220902572054>") {
        message.channel.send("My prefix is `" + config.prefix + "`.")
    }
    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    console.log(`${message.member.user.tag} (ID:${message.member.user.id}): ${message.content}`)

    if(command === "help") {
        const helpMessage = "**__Commands:__**\n\n`Help`: This message.\n`Info`: Get some basic information about me.\n`Invite`: Get a link to invite me to your server.\n`Prefix`: Check my prefix.\n`Ping`: Pong! Check my latency.\n`Say`: Repeat what you said.\n`Purge <number>`: Bulk delete messages, maximum 100 at a time.\n\n**__Support Server:__**\nhttps://discord.gg/TAdr3va\n\n*This bot is made proudly by CHamburr#2591.*";
        message.channel.send(helpMessage);
    }
    else if(command === "ping") {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }
    else if(command === "say") {
        const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{});
        if(sayMessage !== "") {
            message.channel.send(sayMessage);
        }
    }
    else if(command === "prefix") {
        message.channel.send("My prefix is `" + config.prefix + "`.");
    }
    else if(command === "info") {
        message.channel.send("**__MiniTla__**\nI am an awesome bot made by CHamburr#2591 (ID: 446290930723717120).\nFor a list of things I can do, you can run the command `!t help`.\n\n**__Statistics__**\nGuilds: " + client.guilds.size + "\tChannels: " + client.channels.size + "\tUsers: " + client.users.size);
    }
    else if(command === "purge") {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("*Manage Messages* permission is required for this command.");
        }
        const deleteCount = parseInt(args[0], 10);
        if(!deleteCount || deleteCount < 2 || deleteCount > 100) {
            return message.reply("please provide a number between 2 and 100 for the number of messages to delete.");
        }
        const fetched = await message.channel.fetchMessages({limit: deleteCount});
        const m = await message.channel.send("Deleting...");
        message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
        m.edit(`I deleted ${deleteCount} messages for you.`);
    }
    else if(command === "invite") {
        message.channel.send("You can invite me to your server with this link: https://discordapp.com/oauth2/authorize?&client_id=510948220902572054&scope=bot&permissions=8");
    }
    else if(command === "setstatus") {
        if(message.member.user.id === config.owner || message.member.roles.has(config.adminrole)) {
            const statusMessage = args.join(" ");
            if(statusMessage === "") {
                client.user.setActivity(`CHamburr with ${client.users.size} users`);
                message.channel.send("Done so.");
            }
            else {
                client.user.setActivity(statusMessage);
                message.channel.send("Done so.");
            }
        }
        else {
            message.channel.send("You do not have permission to use this command.");
        }
    }
    else {
        message.channel.send("Command not found. Do `!t help` for a list of commands.");
    }
});

client.login(config.token);

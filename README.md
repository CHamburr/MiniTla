# MiniTla
MiniTla is a complete example of a simple Discord bot in JavaScript. It can help you to get started with creating a bot using the Discord.js library.

## Public Bot
You can add the bot to your server with [this link](https://discordapp.com/oauth2/authorize?&client_id=510948220902572054&scope=bot&permissions=8). The bot may not be always online, but can illustrate what the bot can do before you self-host it.

## Self-Hosting
> Before you start, you will need to get a bot account [here](https://discordapp.com/developers/applications/). Copy the bot token as you will need it later on.
>
> You also need to get Node.js [here](https://nodejs.org/en/).

The setup for this bot is pretty simple. 
### Setup For The First Time:
1. Create a role on your main server called `Bot Admin` (or anything you like).
1. Create a new folder for the bot, and open command prompt.
1. CD to the folder. For example: `cd C:/Users/username/Desktop`.
1. Run the following commands
```
npm -init -y
npm install discord.js
git clone https://github.com/tlanotyt/MiniTla
```
Note: If you do not already have Git installed, either download it, or clone it from GitHub directly.

The setup is almost done now now.

### Configuration
Open `config.json` and put in the variables.

`BOT_TOKEN`: The token of the bot. You can get it on the Discord Developer Portal.
`BOT_PREFIX`: The prefix for the bot.
`BOT_OWNER_ID`: Your user ID.
`BOT_ADMIN_ROLE_ID`: The ID of the bot admin role. Those with this role can use administrative commands.

The setup is complete.

### Starting The Bot
To start the bot, CD to the folder and run `node bot.js`. This is all you need to do in future to start the bot.

### Updating The Bot
To update the bot, CD to the folder and run `git clone https://github.com/tlanotyt/MiniTla`. You can end the current session of the bot using `^C` (Control + C) and start it again with the command `node bot.js`.

### Using DigitalOcean
You can self host on DigitalOcean for just $5 a month. If you use [this link](https://m.do.co/c/ea8f09d701f9), you will also get a bonus of $25 once you charge your account with $5.

## Support
You can get support for the bot on our [support server](https://discord.gg/QHCV474).

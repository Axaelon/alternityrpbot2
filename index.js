const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = "?";

Client.on("ready", () => {
    console.log("Bot 2 opérationnel");
});

Client.login(process.env.CLEF);
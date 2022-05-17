const dotenv = require('dotenv');
dotenv.config();

const { Client, Intents } = require('discord.js');
const { token } = process.env.DISCORD_TOKEN;

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('strawberry is running');
});

client.login(token);
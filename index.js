// Importações
const math = require('mathjs');
const { token } = require("./config.json")
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return; 

  const content = message.content.trim();
  const validEquationRegex = /^\s*(\d+(\.\d+)?(?:\%)?(?:\s*[\+\-\*\/]\s*\d+(\.\d+)?(?:\%)?)*\s*(?:[\+\-\*\/]\s*\(\s*\d+(\.\d+)?(?:\%)?\s*[\+\-\*\/]\s*\d+(\.\d+)?(?:\%)?\s*\)\s*)*\s*)$/;

  if (validEquationRegex.test(content)) {
    const result = math.evaluate(content);
    message.reply(`${result}`);
  }
});


client.login(token);

const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client({ disableMentions: 'none'});
const { prefix, token } = require('./config.json');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('ready');
});

client.on('ready', () => {
    client.user.setActivity('%help');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
   
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) {
        message.channel.send(`This command does not exist`);
    } else {
        try {
            client.commands.get(command).execute(message, args);
        } catch(err) {
            console.log(err);
            message.channel.send(`there was an error trying to execute that command!`);
        }
    }
});

client.login(token);
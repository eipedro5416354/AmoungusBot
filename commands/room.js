const Discord = require('discord.js');

module.exports = {
    name: 'room',
    description: 'send the room code to dm',
    execute(message, args)
    {
        if (!args[0]) {
            return message.channel.send(`type the code`);
        }

        let rolePlayer = message.guild.roles.cache.find(n => n.name === 'Player');
        if (!rolePlayer) {
            return message.channel.send(`you need create a role called Player`);
        }

        const codeRoom = new Discord.MessageEmbed()
            .setColor('#37e6cb')
            .setTitle(`Code: ${args[0]}`)
            .setAuthor(`Room owner: ${message.author.username}`, `${message.author.displayAvatarURL()}`)
            .setImage('')

        message.channel.send(rolePlayer.toString());
        message.channel.send(codeRoom)
    }
}
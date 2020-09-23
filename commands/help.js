const Discord = require('discord.js')
const { prefix } = require('../config.json');

module.exports = {
    name: 'help',
    description: 'show all commands and how to use each',
    execute(message, args)
    {
        const helpContent = new Discord.MessageEmbed()
            .setColor('#f2ed5c')
            .setTitle('Github', 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png')
            .setURL('https://github.com/LucasChlz/AmoungusBot')
            .setThumbnail('https://i.pinimg.com/originals/d7/51/7e/d7517e1351db1bec62d551822484b542.png')
            .addFields(
                { name: `${prefix}game`, value: 'creates two rooms needed to play and two roles'},
                { name: `${prefix}mute`, value: 'changes all players in the room and moves everyone with the ghost position to the cemetery'},
                { name: `${prefix}reunion`, value: 'demute all players and make all ghosts return to the room but mutated'},
                { name: `${prefix}ghost`, value: 'when you die you use this command to go to the cemetery'},
                { name: `${prefix}ping`, value: 'shows the bot ping'},
                { name: `${prefix}end`, value: 'you have two parameters ["roles, channels"] where it excludes the two channels or the two "Muted and Ghost" roles'}
            )
            .setFooter('Developed By Schelz#3323');

            message.channel.send(helpContent);

    }
}
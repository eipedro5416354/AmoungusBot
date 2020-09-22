const { channelLive, channelGhost } = require('../config.json'); 

module.exports = {
    name: 'end',
    description: 'delet all channel for amoung us and roles',
    execute(message, args)
    {
        if (!args[0]) {
            return message.channel.send('You need to pass some parameters');
        }

        const deleteChannels = () => {
            const getCemetery = message.guild.channels.cache.find(channel => channel.name === channelGhost);
            const getAmoung = message.guild.channels.cache.find(channel => channel.name === channelLive);

            if (!getCemetery && !getAmoung) {
                return message.channel.send('I have nothing to delete');
            } 

            if (!getCemetery) {
                return getAmoung.delete();
            } 
            
            if (!getAmoung) {
                return getCemetery.delete();
            }

            getCemetery.delete();
            getAmoung.delete();   
            return message.channel.send(`channels Amoung Us and Cemetery successfully delete`)
        }

        const deleteRoles = () => {
            const getGhost = message.guild.roles.cache.find(r => r.name === 'Ghost');
            const getMuted = message.guild.roles.cache.find(r => r.name === 'Muted');

            if (!getGhost && !getMuted) {
                return message.channel.send('I have nothing to delete');
            } 

            if (!getGhost) {
                return getMuted.delete();
            } 
            
            if (!getMuted) {
                return getGhost.delete();
            }

            getGhost.delete();
            getMuted.delete();
            return message.channel.send(`roles Muted and Ghost successfully delete`)
        }

        if (args[0] === 'channels') {
            deleteChannels().catch((err) => {
                return message.channel.send(`unexpected error please contact the developer`)
            })
        }

        if (args[0] === 'roles') {
            deleteRoles().catch((err) => {
                return message.channel.send(`unexpected error please contact the developer`)
            })
        }

    }
}
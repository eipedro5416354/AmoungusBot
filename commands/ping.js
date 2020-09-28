module.exports = {
    name: 'ping',
    description: 'show ping',
    execute(message, args)
    {
        const ping = message.createdTimestamp - Date.now() ;
        message.channel.send(`${ping}ms`);
    }
}
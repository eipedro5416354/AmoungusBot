module.exports = {
    name: 'ping',
    description: 'show ping',
    execute(message, args)
    {
        const ping = Date.now() - message.createdTimestamp;
        message.channel.send(`${ping}ms`);
    }
}
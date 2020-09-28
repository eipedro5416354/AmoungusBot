module.exports = {
    name: "clear",
    description: "clear all messages",
    async execute(message, args)
    {
        const user = message.member;
        if (!user.hasPermission('ADMINISTRATOR', true)){
            return message.channel.send(`you need to be a administrator`);  
        }

        if (!args[0]) {
            return message.channel.send(`enter the number of messages you want to delete, limit = 100`);
        }

        const numMessages = args[0];

        if (numMessages < 1 || numMessages > 100) {
            return message.channel.send(`enter the valid number: min: 1 and max: 100`);
        } else {
            const fetchMessages = await message.channel.messages.fetch({ limit: numMessages});
            message.channel.bulkDelete(fetchMessages);
        }
        
    }
}
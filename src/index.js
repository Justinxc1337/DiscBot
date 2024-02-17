const { Client, IntentsBitField } = require('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        ],
});

client.on('ready', async (c) => {
    console.log(`NEKOCHAN BITCHES ${c.user.tag}!`);

    await client.guilds.cache.get('313406319229009930').commands.create({
        name: 'info',
        description: 'Who Is The God',
    });
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'info') {
        await interaction.reply('Made By The Holy Trinity of Joller');
    }
});

client.on('messageCreate', (message) => {
    if (message.content.includes('simba' || 'Simba')) {
        message.channel.send({
            files: [{
                attachment: 'dwd.png',
                name: 'dwd.png'
            }]
        });
    }
});




/* client.on('messageCreate', (message) => {
    if (message.author.id === '247384014263025664') {
        message.channel.send('Avg Idleon Furry');
    }
});
client.on('messageCreate', (message) => {
    if (message.author.id === '218432815115534338') {
        message.reply('<3');
    }
}); */

client.login('MTIwODE3Nzc0NjcxNTYxMTIxNg.GFqTn-.lnKY2kd30D35DWo1knmzGbplNiBm35KXlOw8L4');




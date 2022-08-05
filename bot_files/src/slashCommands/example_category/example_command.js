const { SlashCommands } = require('../../structures/SlashCommands')

module.exports = class extends SlashCommands {
    constructor(client) {
        super(client, {
            name: 'ping',
            description: 'Ping me'
        })
    }

    run = async (interaction) => {
        let time = Date.now()
        await interaction.reply({ content: `Pinging...`, ephemeral: true })
        return await interaction.editReply({ content: `My ping is ${time - Date.now()} ms.` })
    }
}
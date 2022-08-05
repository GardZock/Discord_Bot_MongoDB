const { Event } = require('../../structures/Event')
const { InteractionType } = require('discord.js')

module.exports = class extends Event {
    constructor(client) {
        super(client, {
            name: 'interactionCreate'
        })
    }

    run = async (interaction) => {
        if (interaction.type === InteractionType.ApplicationCommand) {
            if (!interaction.guild) return;
            if (!interaction.isChatInputCommand()) return;
            const cmd = (this.client).slashCommands.find((c) => c.name === interaction.commandName)
            if (cmd) return cmd.run(interaction);
        }
    }
}
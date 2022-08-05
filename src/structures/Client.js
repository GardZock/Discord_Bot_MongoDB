const { readdirSync } = require( "fs");
const { join } = require("path");

const { Client } = require('discord.js');
const { connect } = require('mongoose')

class CustomClient extends Client {

    constructor(options) {
        super(options)

        this.slashCommands = [];
        this.loadSlashCommands()
        this.loadEvents()
    }

    async initializate() {
        this.guilds.cache.get(process.env.GUILD_ID).commands.set(this.slashCommands);
        await connect(`${process.env.MONGO_URL}`)
        return console.log('[DATABASE] Connected with success!')
    }


    loadEvents() {
        const categories = readdirSync('src/events')

        for (const category of categories) {
            const events = readdirSync(`src/events/${category}`)

            for (const event of events) {
                const eventClass = require(join(process.cwd(), `src/events/${category}/${event}`))
                const evt = new (eventClass)(this)

                this.on(evt.name, evt.run)
            }
        }
    }

    loadSlashCommands() {
        const categories = readdirSync('src/slashCommands')

        for (const category of categories) {
            const commands = readdirSync(`src/slashCommands/${category}`)

            for (const command of commands) {
                const commandClass = require(join(process.cwd(), `src/slashCommands/${category}/${command}`))
                const cmd = new (commandClass)(this)

                this.slashCommands.push(cmd)
            }
        }
    }
}

module.exports = { CustomClient }
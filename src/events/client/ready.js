const { Event } = require('../../structures/Event')

module.exports = class extends Event {
    constructor(client) {
        super(client, {
            name: 'ready'
        })
    }

    run = async () => {
        
        console.log(`[CLIENT] ${this.client.user?.username} logged with success in ${this.client.guilds.cache.size} servers.`);
        await this.client.initializate()
    }
}
# Event Example

```js
const { Event } = require('../../structures/Event')

module.exports = class extends Event {
    constructor(client) {
        super(client, {
            name: ''
        })
    }
    run = async () => {} //In "()" put the event parameters. Check the discord.js documentation to change it correctly.
}
```
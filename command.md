# Slash Command Example

```js
const { SlashCommands } = require('../../structures/SlashCommands')

module.exports = class extends SlashCommands {
    constructor(client) {
        super(client, {
            name: '',
            description: ''
        })
    }

    run = async (interaction) => {
    }
}
```

#### With Options
```js
const { SlashCommands } = require('../../structures/SlashCommands')
const { ChatInputCommandInteraction, ApplicationCommandOptionType } = require('discord.js')

module.exports = class extends SlashCommands {
    constructor(client) {
        super(client, {
            name: '',
            description: '',
            options: [
                {
                    name: '',
                    description: '',
                    type: '', //Type of Option
                    required: false //If is required. false or true
                }
            ]
        })
    }

    run = async (interaction) => {
    }
}
```
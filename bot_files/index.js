const { config } = require( 'dotenv')
const { CustomClient } = require( './src/structures/Client')
config({ path: '.env' })
const client = new CustomClient({
    intents: 515, //Your intents. Recomended Intents Calculator: https://discord-intents-calculator.vercel.app
})

client.login(`${process.env.TOKEN}`)
// express server to support chatbot
const express = require('express')
const bodyParser = require('body-parser')
const Pusher = require('pusher')
const cors = require('cors')
const shortId = require('shortid')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_APP_KEY,
    secret: process.env.PUSHER_APP_SECRET,
    cluster: 'eu',
    encrypted: true
})

// app.post('/message', async (req, res) => {
//     // simulate actual db save with id and createdAt added
//     console.log(req.body);
//     const chat = {
//         ...req.body,
//         id: shortId.generate(),
//         createdAt: new Date().toISOString()
//     }
//     //update pusher listeners
//     pusher.trigger('chat-bot', 'chat', chat)
//     res.send(chat)
// })

app.post('/message', async (req, res) => {
    // simulate actual db save with id and createdAt added
    const chat = {
        ...req.body,
        id: shortId.generate(),
        createdAt: new Date().toISOString()
    }
    //update pusher listeners
    pusher.trigger('LexiVote', 'chat', chat)

    const message = chat.message;
    const response = await dialogFlow.send(message);
    // trigger this update to our pushers listeners
    pusher.trigger('LexiVote', 'chat', {
        message: `${response.data.result.fulfillment.speech}`,
        type: 'bot',
        createdAt: new Date().toISOString(),
        id: shortId.generate()
    })
    res.send(chat)
})

app.listen(process.env.PORT || 5000, () => console.log('Server Listening at 5000'))
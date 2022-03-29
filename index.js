require('dotenv').config();
const database = require('./src/database/connection')
const server = require("./src/server")
const {PORT} = process.env

async function startServer() {
    try {
        await database.connect()
        server.listen(PORT, ()=>{
            console.log(`Server listening on http://localhost:${PORT}`)
        })
    } catch (error) {
        console.error(error)
    }

}

startServer()
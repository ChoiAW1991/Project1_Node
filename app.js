const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World! This is my DevOps Project Number 1!'))
app.listen(3000, () => console.log('Server ready'))

const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/multiply/:x/:y', (req, res) => {
    res.send(`${parseInt(req.params.x) * parseInt(req.params.y)}`)
})
app.get('/books', (req, res) => {
    const books = ['Congo', 'Atlas Shrugged', 'The Phoenix Project']
    if (req.query.index) res.send(books[req.query.index])
    else res.send(books)
})
app.listen(3000, () => { console.log('Server running on port 3000') })
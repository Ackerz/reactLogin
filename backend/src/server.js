const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes')
app.use(express.json());
app.use(cors())
app.use(routes)

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log('Server On')
})
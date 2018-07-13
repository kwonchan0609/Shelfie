const express = require('express');
const bodyparser = require('body-parser');
const app = express()
const massive = require('massive')
require('dotenv').config()

app.get('/api/product')


massive(process.env.CONNECTION_STRING)
.then(dbInstance=>{app.set('db', dbInstance)})
.catch(err=>console.log(err))


app.use(bodyparser.json())
const port = process.env.PORT || 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
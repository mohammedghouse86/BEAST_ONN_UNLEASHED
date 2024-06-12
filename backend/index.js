const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')
connectToMongo();

const app = express()
const port = 5000
app.use(cors())
app.use(express.json())
// ROUTES METHOD  
//app.use('/',  (req, res) => {
//  res.send("HOWDY PARTNER");})

app.use('/api/auth',require('./Routes/auth'))
//app.use('/api/notes',require('./Routes/notes'))
  // POST method route
  
  app.listen(port, () => {
    console.log(`BEAST_ONN_UNLEASHED backend listning at http://localhost:${port}`)
  })

  
  
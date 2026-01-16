const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()


app.use(cors())
app.use(express.json())



const urlBooks ='https://api-books-ac3j.onrender.com/books'


app.get("/books", async (req, res)=>{
    try {
        const response = await axios.get(urlBooks)
        res.json(response.data.results)

    } catch(error) {
        res.status(500).json({
            error:"error al obtener libros"
        })
    }
})




app.listen (3000, ()=>{
    console.log('express esta funcionando en el puerto http://localhost:3000')
})
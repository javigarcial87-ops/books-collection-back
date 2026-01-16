const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()


app.use(cors())
app.use(express.json())



const urlBooks ='https://api-books-ac3j.onrender.com/books'


app.get("/books", async (req, res)=>{
    console.log("peticion recibida en libros")
    try {
        const response = await axios.get(urlBooks)

        const books = response.data.map(book =>({

            titulo: book.titulo,
            imagen: book.imagen,
            autor: book.autor,
            fechaPublicacion: book.fechaPublicacion
        }))

        res.json(books)

    } catch(error) {
        console.log("Error al pedir libros")
        res.status(500).json({
            error:"error al obtener libros"
        })
    }
})

const urlUsers = 'https://api-books-ac3j.onrender.com/users'

app.get("/users", async (req, res)=>{
    console.log("peticion recibida en users")
    try {
        const response = await axios.get(urlUsers)

        const users = response.data.map(user=>({

            nombre: user.nombre,
            email: user.correo,
            libros: user.coleccion,
            lista: user.wishlist


        }))

        res.json(users)

    } catch(error) {
        console.log("Error al pedir users")
        res.status(500).json({
            error:"error al obtener users"
        })
    }
})


app.listen (4000, ()=>{
    console.log('express esta funcionando en el puerto http://localhost:4000')
})
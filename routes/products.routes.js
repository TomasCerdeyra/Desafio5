import express from "express"

const productRoute = express.Router()

const productos = []

productRoute.get('/', (req, res) =>{
    res.render('inicio', {productos})
})

productRoute.post('/productos', (req, res) =>{
    productos.push(req.body)
    console.log(req.body);
    res.redirect('/')
})

export{productRoute}
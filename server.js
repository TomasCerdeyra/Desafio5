import express from "express"
import { productRoute } from "./routes/products.routes.js";

const app = express();

app.use(express.urlencoded ({extended: true}))
app.use(express.json())

app.set("views", "./views");
app.set('view engine', 'ejs')

app.use('/', productRoute)

app.listen(8080, () =>{
    console.log("corriendo");
})
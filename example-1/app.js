const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

const products = require("./productList")

app.get("/", (req, res)=> {
    res.send("<h2>Welcome to our site!</h2>")
});

app.get("/products", (req, res)=> {
    res.json(products);
});
// /products/32323
// products/hfsdfdf
app.get("/products/:id", (req, res)=> {
    const {id} = req.params;
    const result = products.find(({_id}) => _id === id);
    if(result){
        res.json(result);
    }
    else {
        res.json(null)
    }
});

app.post("/products", express.json(), (req, res)=> {
    const obj = req.body;
    res.json(obj)
});

app.put("/products/:id", express.json(), (req, res)=> {
    const {id} = req.params;
    const {body} = req;
    const idx = products.findIndex(({_id}) => _id === id);
    if(idx  !== -1){
        console.log(products[idx])
        products[idx].name = body.name;
        res.json(products[idx]);
    }
    else {
        res.json(null)
    }
});

app.delete("/products/:id", (req, res)=> {
    const {id} = req.params;
    const idx = products.findIndex(({_id}) => _id === id);
    if(idx  !== -1){
        const oldProduct = products[idx];
        products.splice(idx, 1);
        res.json(oldProduct)
    }
})

app.listen(port);
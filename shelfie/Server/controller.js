module.exports={
    getInventory:(req,res)=>{
        req.app.get('db').getInventory().then(
            products => {
                res.status(200).send(products)
            }
        )
    },

    postProduct:(req, res)=>{
        let {productName, imageURL, price} = req.body;

        req.app.get('db').createProduct([productName, imageURL, price]).then(
            products => {
                res.status(200).send(products)
            }
        )
    }
}
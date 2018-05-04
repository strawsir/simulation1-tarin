module.exports={
    getInventory:(req,res)=>{
        const dbInstance = req.app.get('db')
        dbInstance.getInventory().then(
            products => {
                res.status(200).send(products)
            }
        ).catch(err => console.log(err))
    },

    postProduct:(req, res)=>{
        let {productName, imageURL, price} = req.body;

        req.app.get('db').createProduct([productName, imageURL, price])
        .then(products => res.status(200).send(products)
        ).catch(err => console.log(err))
    },

    deleteProduct:(req, res)=>{
            const dbInstance = req.app.get('db');
            const {params} = req;

            dbInstance.deleteProduct([params.id])
            .then( () => res.status(200).send())
            .catch(()=>res.status(500).send())
    }
}
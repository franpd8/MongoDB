const Product = require("../models/Product");

const ProductController ={
    async create(req,res){
        try {
            const product = await Product.create(req.body)
            res.status(201).send(product)
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al crear el producto' })
        }
    },async getAll(req, res) {
        try {
           const products = await Product.find()
           res.send(products)
        } catch (error) {
            console.error(error);
        }
    },async getById(req, res) {
        try {
            const product = await Product.findById(req.params._id)
            res.send(product)
        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    },async getProductsByName(req, res) {
        try {
          if (req.params.name.length>20){
            return res.status(400).send('Busqueda demasiado larga')
          }
        //   creamos expresion regular para que admita coincidencias incluso en minuscula o mayuscula
          const name = new RegExp(req.params.name, "i");
          const product = await Product.find({name:name});
          res.send(product);
        } catch (error) {
          console.log(error);
          res.status(500).send(error)
        }
      },async delete(req, res) {
        try {
            // en lugar de hacer .deleteOne usamos este metodo porque nos aporta más info al devolver el producto antes de borrarlo
            const product = await Product.findByIdAndDelete(req.params._id)
            res.send({ product, message: 'Product deleted' })
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'there was a problem trying to remove the publication' })
        }
    },async update(req, res) {
        try {
            // admite 3 parámetros: lo que quiero actualizar, la actualización que aplicamos, resultado final 
          const product = await Product.findByIdAndUpdate(req.params._id, req.body, { new: true })
          res.send({ message: "product successfully updated", product });
        } catch (error) {
          console.error(error);
        }
      },
    

    


}
module.exports = ProductController;
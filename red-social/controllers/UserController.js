const User = require("../models/User");

const UserController ={
    async create(req,res){
        try {
            const user = await User.create(req.body)
            res.status(201).send({message:"Usuario añadido con éxito",user})
        } catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al crear el usuario' })
        }
    },
async getAll(req, res) {
            try {
               const users = await User.find()
               res.send(users)
            } catch (error) {
                console.error(error);
                res.status(500).send({ message: 'Ha habido un problema al cargar los usuarios' })
            }
        },
    async getById(req, res) {
            try {
                const user = await User.findById(req.params._id)
                res.send(user)
            } catch (error) {
                console.error(error);
    res.status(500).send({ message: `Ha habido un problema al buscar el usuario con id = ${req.params._id}`})
            }
         },
    // async getByName(req, res) {
    //     try {
    //       if (req.params.name.length >20){
    //         return res.status(400).send('Busqueda demasiado larga')
    //       }
    //       const name = new RegExp(req.params.name, "i");
    //       const user = await User.find({name:name});
    //       res.send(user);
    //     } catch (error) {
    //       console.log(error);
    // res.status(500).send({ message: `Ha habido un problema al buscar el usuario`})
    //     }
    //   },
    async delete(req, res) {
            try {
                const user = await User.findByIdAndDelete(req.params._id)
                res.send({ user, message: 'Usuario eliminado' })
            } catch (error) {
                console.error(error)
                res.status(500).send({ message: 'Ha habido un problema al eliminar el usuario' })
            }
        },
    async update(req, res) {
        try {
          const user = await User.findByIdAndUpdate(req.params._id, req.body, { new: true })
          res.send({ message: "usuario actualizado con éxito", user });
        } catch (error) {
          console.error(error);
    res.status(500).send({message: "Ha habido un problema al actualizar el usuario"})
        }
      },
    }
module.exports = UserController;
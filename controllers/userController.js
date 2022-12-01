const User = require("../model/userModel");
const { db } = require("../model/userModel");

async function addUser(req,res){

    try{
        const userData = new User({
            username:req.body.username,
            email:req.body.email,
            rol:req.body.rol
        }) 
        const newUser = await userData.save();
        res.status(200).json(newUser);

    }catch(err){
        res.status(400).send("No se pudo agregar el usuario");

    }
}
async function getUsers(req, res){
    try{
        const allUsers = await User.find()
        res.status(200).send("User obtenido ");
    }catch(err){
        res.status(400).send("No se pudo traer los usuarios");
    }
}

async function deleteUser (req, res){
try {
    const id = req.params.id;
    await db.User.destroy({
        where:{
            id,
        },
    });
    res.status(200).send("User eliminado ");

}catch (err){
    res.status(400).send("no se pudo actualizar el user ");
}
}


module.exports = {
    addUser,
    getUsers,
    deleteUser,
  };
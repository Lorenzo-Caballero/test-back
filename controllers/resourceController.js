const Resource = require("../model/recursoModel");


async function getResource(req, res){
    try{
        const id = req.params.id;
        const aResource = await Resource.findById({
            where:{
                id,
            },
        });
        res.status(200).send("Recurso obtenido ");
    }catch(err){
        res.status(400).json({message : err.message})
    }
}


async function addResource(req, res){
    const resource = new Resource({
        message : req.body.message
    })  
    try{
        const newRes = await resource.save()
        res.status(200).send("Recurso agregado ");
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

async function getResources(req, res){
    try{
        const allResources = await Resource.find()
        res.status(200).send("Recurso obtenidos ");
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

async function updateResource(req, res){
    const id = req.params.id;
    try{
        await Resource.updateOne({
            where:{
                id,
            },
        });
        res.json({ message: 'Recurso actualizado'})
    }catch(err){
        res.json({message : err.message})
    }
}

async function deleteResource(req, res) {
    const id = req.params.resourceId;
    try{
        await Resource.destroy({
            where:{
                id,
            },
        });
        res.status(200).send("Recurso eliminado ");
    }catch(err){
        res.json({message : err.message})
    }
}



module.exports = {getResource, getResources, addResource, updateResource, deleteResource}
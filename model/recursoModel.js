const { Mongoose, default: mongoose } = require("mongoose");

const RecursoSchema = new Mongoose.Schema({
    idRecurso:{
        type:mongoose.Types.ObjectId
    },
    mensaje:{
        type:String
    }
})

const Recurso = mongoose.model('recurso',RecursoSchema);

module.exports=Recurso;
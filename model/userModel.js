const { Mongoose, default: mongoose } = require("mongoose");

const UserSchema =new Mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    rol:{
        type:String,
        default:"comun",
        require:true
        
    }
    
})

const User = mongoose.model('users', userSchema);

module.exports=User;
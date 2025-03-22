const UserSchema = require("../models/userM")

exports.addUser = async (req, res) => {
    console.log("route 1 is running");
    const {uID,uName,password,isAdmin}  = req.body
   // console.log("name "+req.body.uName);
    const user = UserSchema({
        uID,
        uName,
        password,
        isAdmin
    })
        console.log("user is"+user);
    try {
        //validations
        const {uID,uName,password,isAdmin}  = req.body
        if(!uID || !uName || !password || !isAdmin){
            return res.status(400).json({message: 'All fields are required!'})
        }
        try {
            let Exsists = await UserSchema.findOne({uName: req.body.uName},{ password: 0 });
            if(Exsists){
                return res.status(400).json({message: 'user already exsists!'})
            }
        } catch (error) {
            res.status(500).json({message: 'Server Error'})
        }
        
        await user.save()
        res.status(200).json({message: 'User Added',uName:req.body.uName})
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error1'})
    }

    
}
exports.logIn = async (req, res) =>{
    try {
        const {uName,password} = req.body;
        console.log("unm ="+ req.body.uName);
        let isLogedIn ={
            uName:'',
            isAdmin: false,
            isLoged: false
        }
        const filter ={uName: req.body.uName}
        const userRes = await UserSchema.findOne(filter)
        if(userRes[password] === req.body.password){
            isLogedIn.isLoged = true;
            isLogedIn.isAdmin = userRes[isAdmin];
        res.status(200).json(isLogedIn)
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error2'})
    }
}
exports.dlUser = async (req, res) =>{
    const {id} = req.params;
    console.log(id);
    UserSchema.deleteOne(id)
        .then(() =>{
            res.status(200).json({message: 'User Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
}
exports.updUser = async (req,res) =>{

    let upObj = req.body; 
    try{
    const updatedUser = await UserSchema.findOneAndUpdate(
        upObj.filter,              // Find user by username
        upObj.fields, // Fields to update
        { new: true }                   // Return the updated doc
      );
      return res.status(200).json(updatedUser)
    }
    catch (error){
        console.error(error);

    }
}
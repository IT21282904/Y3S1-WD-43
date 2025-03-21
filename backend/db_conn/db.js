const mongoose = require('mongoose');

const db = async () => {
    try{
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.DBURL);
        console.log('DB connected');

    }
    catch(error){
        console.log('DB Connection Error');
    }
}

module.exports = {db}

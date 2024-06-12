const mongoose = require('mongoose');
const { Schema } = mongoose;

const leftArmCurls = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' // this is to store the user --> ID --> JWT
    },
    reps: { 
        type: Number,
        require:true  
    },
    date: {
          type: Date,
          default: Date.now
    }
});

module.exports = mongoose.model('leftArmCurls', leftArmCurls);

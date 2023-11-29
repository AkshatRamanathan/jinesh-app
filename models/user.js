var mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
   
});
model.exports = mongoose.model('user',UserSchema);
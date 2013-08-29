/*
 db/schema.js contains database schema description for application models
 by default (when using jugglingdb as ORM) this file uses database connection
 described in config/database.json. But it's possible to use another database
 connections and multiple different schemas, docs available at

 http://railwayjs.com/orm.html

 Example of model definition:

 define('User', function () {
     property('email', String, { index: true });
     property('password', String);
     property('activated', Boolean, {default: false});
 });

 Example of schema configured without config/database.json (heroku redistogo addon):
 schema('redis', {url: process.env.REDISTOGO_URL}, function () {
     // model definitions here
 });

*/

module.exports = function (mongoose, compound) {
    // mongoose stuff
  
var bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

var UserSchema = new mongoose.Schema({
    firstname: {type:String, required:true, trim: true},
    lastname: {type:String, required:true, trim: true},
    username:{ type: String, required: true, index: { unique: true }, trim: true},
    password: { type: String, required: true, trim: true}    

});
    
    UserSchema.pre('save', function(next) {
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
        // generate a salt
        bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) {
            return next(err);
        }
        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) {
                return next(err);
            }
            // override the cleartext password with the hashed one
            console.log("Hashed password"+hash);
            user.password = hash;
            next();
        });
     
    });
});


UserSchema.methods.comparePassword = function(hashedPassword, callback) { 
    bcrypt.compare(this.password, hashedPassword, function(err, isMatch) {
        if (err) return callback(err);
        console.log("Does passwords match? "+isMatch);
        callback(null, isMatch);
    });
};

    var User = mongoose.model('User', UserSchema);
    User.modelName = 'User';     // expose model name for view helpers (resource-based helpers like formFor)
    compound.models.User = User; // register model in compound.models registry



};

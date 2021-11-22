const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect("mongodb://localhost:27017/gooseDb", {
    useNewUrlParser: true,
    
});


module.exports = () => {

    const User = mongoose.model('User', {
        name: {
            type: String
        },
        age: {
            type: Number,
            validate(value) {
                if(value<0) {
                    throw new Error('not a valid age.')
                }
            },
            trim: true,
            default: true
        }
        ,
        email: {
            type: String,
            required: true,
            validate(value) {
               if(validator.isEmail(value)) {
                 throw new Error('email must be valid')
               }
            },
            triem: true
        }
    })

    const me = new User({
        name: 'Don',
        age: 22,
        email: 'drmcc.nahid@gmail.com'
    })

    me.save().then(() => {
        console.log(me)
    }).catch(err => {
        console.log(err)
    })

}


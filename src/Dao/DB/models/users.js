import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const collection = 'users';

const StringAndRequired = {
    type: String,
    required: true
}

const userSchema = new mongoose.Schema({
    name: StringAndRequired,
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: StringAndRequired,
    location: StringAndRequired,
    phone_number: StringAndRequired,
    userType:{
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    }
})

userSchema.pre(
    'save',
    async (next) => {
        const user = this;
        const hash = await bcrypt.hash(this.password, 10);

        this.password = hash;
        next();
    }
)

userSchema.methods.isValidPassword = async (password) => {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
    
    return compare;
}

const userModel = mongoose.model(collection,userSchema);

export default userModel;
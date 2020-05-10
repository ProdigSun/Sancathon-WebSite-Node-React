var mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    phone: String,
    foodType: String,
    restaurantGenre: String,
    restaurantName: String,
    status: {
        type: String,
        default: 'initial'
    }
});

const UserTastesSchema = mongoose.Schema({
    name: String,
    phone: String,
    favoriteMusicGenre: String,
    favoriteMovieGenre: String,
    hobbies: String,
    usesStreaming: String,
    location: {
        type: pointSchema
    }
});

const pointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

export default { UserTastesSchema, OrderSchema };
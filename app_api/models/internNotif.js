const mongoose = require('mongoose');
const { Schema } = mongoose;
const name = 'internNotif';

const internNotifSchema = new Schema({
    title: {type: String, required: true},
    ownerId: { type: Schema.Types.ObjectId},
    content: { type: String, default: '' },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    followers: { type: [Schema.Types.ObjectId], default: [] }
});

module.exports = mongoose.model(name, internNotifSchema);
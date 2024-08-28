const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuthorSchema = new Schema({
  label: { type: String, required: true, unique: true },
  value: { type: String, required: true, unique: true },
  authorImage: {type: String,},
});

const virtual = AuthorSchema.virtual('id');
virtual.get(function () {
  return this._id;
});
AuthorSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.AuthorName = mongoose.model('AuthorName', AuthorSchema);

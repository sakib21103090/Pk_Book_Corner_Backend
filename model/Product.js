const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  bookName: { type: String},
  description: {type: String,},
  price: {type: Number,},
  discountPercentage: {type: Number,},
  rating: {type: Number,},
  stock: {type: Number,},
  authorName: {type: String,},
  category: { type: String,},
  images: {type: String,},
  isbn: {type: Number,},
  publication: {type: String,},
});

const virtualId  = productSchema.virtual('id');
virtualId.get(function(){
    return this._id;
})
productSchema.set('toJSON',{
    virtuals: true,
    versionKey: false,
    transform: function (doc,ret) { delete ret._id}
})


exports.Product = mongoose.model("Product", productSchema);

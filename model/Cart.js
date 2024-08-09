const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product'},
  user:{ type: Schema.Types.ObjectId, ref: 'User'},
  quantity:{type: Number,}
});

const virtualId  = cartSchema.virtual('id');
virtualId.get(function(){
    return this._id;
})
cartSchema.set('toJSON',{
    virtuals: true,
    versionKey: false,
    transform: function (doc,ret) { delete ret._id}
})


exports.Cart = mongoose.model("Cart", cartSchema);
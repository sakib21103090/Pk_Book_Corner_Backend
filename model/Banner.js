const mongoose = require("mongoose");
const { Schema } = mongoose;

const BannerSchema = new Schema({
  offerText: {type: String,},
  discount: {type: Number,},
  bannerImages: {type: String,},
  description: {type: String,},
},

);

const virtualId  = BannerSchema.virtual('id');
virtualId.get(function(){
    return this._id;
})
BannerSchema.set('toJSON',{
    virtuals: true,
    versionKey: false,
    transform: function (doc,ret) { delete ret._id}
})


exports.Banner = mongoose.model("Banner", BannerSchema);

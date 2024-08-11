const mongoose = require('mongoose');
const { Schema } = mongoose;


const orderSchema = new Schema(
  {
    items: { type: [Schema.Types.Mixed],  },
    TotalPrice: { type: Number },
    totalItems: { type: Number },
    Subtotal: { type: Number },
    deliveryCharge: { type: Number },
    user: { type: Schema.Types.ObjectId, ref: 'User',  },
    paymentMethod: { type: String,  },
    paymentStatus: { type: String, default: 'pending' },
    status: { type: String, default: 'pending' },
    selectedAddress: { type: Schema.Types.Mixed },
  },
  { timestamps: true }
);

const virtual = orderSchema.virtual('id');
virtual.get(function () {
  return this._id;
});
orderSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.Order = mongoose.model('Order', orderSchema);

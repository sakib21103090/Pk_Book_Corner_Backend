// const { Cart } = require('../model/Cart');

// exports.fetchCartByUser = async (req, res) => {
//   const { user } = req.query;
//   try {
//     const cartItems = await Cart.find({ user: user }).populate('user').populate('product');

//     res.status(200).json(cartItems);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// };

// exports.addToCart = async (req, res) => {
//   const cart = new Cart({...req.body});
//   try {
//     const doc = await cart.save();
//     res.status(201).json(doc);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// };
// exports.addToCart = async (req, res) => {
//   const {id} = req.user;
//   const cart = new Cart({...req.body,user:id});
//   try {
//     const doc = await cart.save();
//     const result = await doc.populate('product');
//     res.status(201).json(result);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// };

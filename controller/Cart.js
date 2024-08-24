const { Cart } = require('../model/Cart');

exports.fetchCartByUser = async (req, res) => {
  const { user } = req.query;
  try {
    const cartItems = await Cart.find({ user: user }).populate('user').populate('product');

    res.status(200).json(cartItems);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.addToCart = async (req, res) => {
  const cart = new Cart(req.body);
  try {
    const doc = await cart.save();
    const result = await doc.populate('product')
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deleteFromCart = async (req, res) => {
  const { id } = req.params;
  try {
    // Ensure you are finding the correct document and deleting it
    const doc = await Cart.findByIdAndDelete(id);

    if (!doc) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.status(200).json({ message: 'Item successfully removed', id });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete item' });
  }
}

exports.updateCart = async (req, res) => {
const { id } = req.params;
try {
  const cart = await Cart.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  const result = await cart.populate('product');

  res.status(200).json(result);
} catch (err) {
  res.status(400).json(err);
}
};

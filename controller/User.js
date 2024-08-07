const { User } = require('../model/User');

exports.fetchUserById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({id: user.id, addresses: user.addresses, email: user.email, role: user.role});
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.UpdateUserCheckOut = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
};
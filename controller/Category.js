const { Category } = require('../model/Category');

exports.fetchCategory = async (req, res) => {
  try {
    const category = await Category.find({}).exec();
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.createCategory = async (req, res) => {
  const category = new Category(req.body);
  try {
    const doc = await category.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};


exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    // Ensure you are finding the correct document and deleting it
    const doc = await Category.findByIdAndDelete(id);

    if (!doc) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.status(200).json({ message: 'Item successfully removed', id });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete item' });
  }
}

const { AuthorName } = require('../model/AuthorName');

exports.fetchAuthorName = async (req, res) => {
  try {
    const authorName = await AuthorName.find({}).exec();
    res.status(200).json(authorName);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.createAuthorName = async (req, res) => {
  const authorName = new AuthorName(req.body);
  try {
    const doc = await authorName.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};


exports.deleteAuthorByID = async (req, res) => {
  const { id } = req.params;
  try {
    // Ensure you are finding the correct document and deleting it
    const doc = await AuthorName.findByIdAndDelete(id);

    if (!doc) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.status(200).json({ message: 'Item successfully removed', id });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete item' });
  }
}

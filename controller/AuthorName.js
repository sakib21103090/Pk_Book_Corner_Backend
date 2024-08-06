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

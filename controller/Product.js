const {Product} = require('../model/Product');

exports.createProduct = async (req, res) => {
    const product = new Product(req.body);
    try {
        const doc = await product.save();
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.fetchAllProducts = async (req, res) => {
    // filter = {"AuthorName":["smartphone","laptops"]}
    // sort = {_sort:"price",_order="desc"}

    let query = Product.find({});

    if (req.query.authorName) {
      query = query.find({ authorName: req.query.authorName });
    }
    if (req.query.category) {
      query = query.find({ category : req.query.category });
    
    }
    if (req.query._sort && req.query._order) {
      query = query.sort({ [req.query._sort]: req.query._order });
    }

  
    try {
      const docs = await query.exec();
      res.status(200).json(docs);
    } catch (err) {
      res.status(400).json(err);
    }
  };

  exports.fetchProductsById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(400).json(err);
    }
  };
  
  exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
    const doc = await Cart.findByIdAndDelete(id);
    res.status(200).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
  };
  
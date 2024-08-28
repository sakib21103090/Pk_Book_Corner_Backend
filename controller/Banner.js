const { Banner } = require("../model/Banner");


exports.CreateBanner = async (req, res) => {
    const banner = new Banner(req.body);
    try {
        const doc = await banner.save();
        res.status(201).json(doc);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.fetchAllBanner = async (req, res) => {
    try {
      const banner = await Banner.find({}).exec();
      res.status(200).json(banner);
    } catch (err) {
      res.status(400).json(err);
    }
  };


  exports.deleteBannerByID = async (req, res) => {
    const { id } = req.params;
    try {
      // Ensure you are finding the correct document and deleting it
      const doc = await Banner.findByIdAndDelete(id);
  
      if (!doc) {
        return res.status(404).json({ error: 'Item not found' });
      }
  
      res.status(200).json({ message: 'Item successfully removed', id });
    } catch (err) {
      res.status(400).json({ error: 'Failed to delete item' });
    }
  }
  
const { User } = require("../model/User");

exports.CreateUser = async (req, res) => {
    const user = new User(req.body);
  
    try {
      const doc = await user.save();
      res.status(200).json(doc);
    } catch (err) {
      res.status(400).json(err);
    }
  };
  


  exports.LoginUser = async (req, res) => {
    try {
      const user = await User.findOne(
        { email: req.body.email },
        "id name email password displayName photo"
      ).exec();
      
      if (!user) {
        res.status(401).json({ message: "no such user email" });
      } else if (user.password === req.body.password) {
        res.status(200).json({ id: user.id, addresses: user.addresses, email: user.email, photo:user.photo });
      } else {
        res.status(400).json({ message: "invalid credential" });
      }
    } catch (err) {
      res.status(400).json(err);
    }
  };
  
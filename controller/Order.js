const { Order } = require("../model/Order");

const SSLCommerzPayment = require("sslcommerz-lts");
const { ObjectId } = require("mongodb");

//SSLCommerz
const store_id ="bytem6692cc19b7ca9";
const store_passwd = "bytem6692cc19b7ca9@ssl";
const is_live = false;


  exports.createOrder = async (req, res) => {
    const order = new Order(req.body);
    try {
      const doc = await order.save();
     
      res.status(201).json(doc);
    } catch (err) {
      res.status(400).json(err);
    }
  };
  

  exports.updateOrder = async (req, res) => {
    const { id } = req.params;
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(order);
    } catch (err) {
      res.status(400).json(err);
    }
  };

  exports.paymentOnline =async (req, res) => {
    try {
      const tran_id = new ObjectId().toString();
        const order = await Order.findById(req.body.id).populate(
            "user",
            "displayName email"
        );

        order.tranId=tran_id;
        await order.save();

         const data = {
            total_amount: order.TotalPrice,
            currency: "BDT",
            tran_id: tran_id, // use unique tran_id for each api call
            success_url: `http://localhost:8080/orders/payment-online/success/${tran_id}`,
            fail_url: "http://localhost:3030/fail",
            cancel_url: "http://localhost:3030/cancel",
            ipn_url: "http://localhost:3030/ipn",
            shipping_method: "Courier",
            product_name: "Computer.",
            product_category: "Electronic",
            product_profile: "general",
            cus_name: order.selectedAddress.name,
            cus_email: order.selectedAddress.email,
            cus_add1: order.selectedAddress.city,
            cus_add2: "Dhaka",
            cus_city: order.selectedAddress.city,
            cus_state: "Dhaka",
            cus_postcode: order.selectedAddress.postalCode,
            cus_country: order.selectedAddress.country,
            cus_phone: order.selectedAddress.phoneNumber || " ",
            cus_fax: "01711111111",
            ship_name: order.selectedAddress.name,
            ship_add1: order.selectedAddress.city,
            ship_add2: "Dhaka",
            ship_city: order.selectedAddress.city,
            ship_state: "Dhaka",
            ship_postcode:  order.selectedAddress.postalCode,
            ship_country:  order.selectedAddress.country,
        }; 
      
        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
        sslcz.init(data).then((apiResponse) => {
            // Redirect the user to payment gateway
            let GatewayPageURL = apiResponse.GatewayPageURL;
            res.send({ url: GatewayPageURL, });
            console.log("Redirecting to: ", GatewayPageURL);
        });  
    
    } catch (err) {
      res.status(400).json({message: "payment error"});
    }
  }

  exports.paymentSuccess = async (req, res) => {
    try {

      const order= await Order.findOne({tranId: req.params.tranId});
      order.paymentStatus="Payment Done";
      await order.save();
   
      res.redirect(`http://localhost:3000/orderDone/${order.id}`);
      
    } catch (err) {
      res.status(400).json(err);
    }
  };
  
  exports.fetchLoggedInUserOrders = async (req, res) => {
    const { user } = req.query;
    try {
      const orders = await Order.find({ user: user });
  
      res.status(200).json(orders);
    } catch (err) {
      res.status(400).json(err);
    }
  };
  

  exports.fetchAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({});
        res.status(200).json(orders);
    } catch (err) {
        res.status(400).json( err );
    }
};


exports.deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    // Ensure you are finding the correct document and deleting it
    const doc = await Order.findByIdAndDelete(id);

    if (!doc) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.status(200).json({ message: 'Item successfully removed', id });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete item' });
  }
}

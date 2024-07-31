const Razorpay = require('razorpay');

apiKey="abcd"
apiSecret="abcd"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;

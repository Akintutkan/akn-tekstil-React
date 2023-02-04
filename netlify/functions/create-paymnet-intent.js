require("dotenv").config();
const stripe= require("stripe")(process.env.STRIPE_SECRET_KEY)

exports.handler = async(event) =>{
    try{
        const {amount} =JSON.parse(event.body);
        const paymnetIntent = await stripe.paymentIntents.create({
            amount,currency: "usd",paymnet_method_types:["card"]
        });
return {
    statusCode: 200,body: JSON.parse.stringify({paymnetIntent})
}
    }catch(error){
        console.log({error});
        return{
            status:400,body:JSON.stringify({error})
        }
    }
}
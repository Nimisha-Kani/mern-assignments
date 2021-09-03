const { Review } = require('../models/review');
const { ServiceError } = require('../utils/service-error');
require('dotenv').config();

const addReview = async ({body})=>{
    try{
        console.log('body',body);
        let newReview = new Review({ ...body});
        let result= await  newReview.save();
        console.log('user added');
        return result;
    }catch{
        console.log('error',error);
        throw new ServiceError(400, 'Failed', error);
    }

}

const getAllReviews = async ({id})=>{
    console.log(id)
    return await Review.find({isbn:id});
}

const getAvgRating = async({id})=>{
    let reviews= await Review.find({isbn:id});
    console.log(reviews);
    let ratings=await reviews.map(review=>review.rating);
    console.log("ratings===",ratings);
    let  total = await ratings.reduce( (a,r) => a+r, 0); 
    console.log(total/ratings.length);
 
    return await total/ratings.length;

}


module.exports={
    addReview,    
    getAllReviews,
    getAvgRating
};
const { Review } = require('../models/review');
const { ServiceError } = require('../utils/service-error');
const {Book} = require('../models/book');
require('dotenv').config();

const addReview = async ({body,id})=>{
    try{
        console.log('body',body);
        let newReview = new Review({ ...body});
        let result= await  newReview.save();
        // let book=await Book.findOne({isbn:id});
        // console.log("book",book)
        // book.reviews.push(newReview);
        // console.log(book.reviews);
        // let newBook =await book.updateOne();
        // console.log('user added',newBook);
        return result;
    }catch{
        console.log('error',error);
        throw new ServiceError(400, 'Failed', error);
    }

}

const getAllReviews = async ({id})=>{
    console.log(id)
    
    let rev = await Review.find({isbn:id});
    if(rev)
        return rev;
    else{
        throw new ServiceError(404, "No reviews yet", {isbn:id});
    }
}

const getAvgRating = async({id})=>{
    let reviews= await Review.find({isbn:id});
    console.log(reviews);
    let ratings=await reviews.map(review=>review.rating);
    console.log("ratings===",ratings);
    let  total = await ratings.reduce( (a,r) => a+r, 0); 
    console.log("Average rating",total/ratings.length);
    let avg = total/ratings.length;
    let book=await Book.findOne({isbn:id});
    console.log(book)
    return avg;

}


module.exports={
    addReview,    
    getAllReviews,
    getAvgRating
};
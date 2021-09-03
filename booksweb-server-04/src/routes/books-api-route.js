const express=require('express');
const {BookService}=require('../services/book-service');
const {handleRequest}=require('../utils/express-utils');

const reviewService=require('../services/review-service');


const getRouter= ()=>{

   //const bookController=new BookController();
   const service=new BookService();


    let router=express.Router();
  //  console.log(router);
    router  
        .route("/")    
        .get(handleRequest(service.getAllBooks))
        .post(handleRequest(service.addBook));



  //--->  api/books/titles
  router.get('/titles', handleRequest(service.getAllTitles));

  //---> api/books/Authors
  router.get('/authors',handleRequest(service.getAllAuthors));
  

    //---->  api/books/5555
    router 
    .route('/:id')
    .get(handleRequest(service.getBookByIsbn))
    .put(handleRequest(service.updateBook))
    .delete(handleRequest(service.removeBook));

    router
    .route('/:id/reviews')
    .get(handleRequest(reviewService.getAllReviews))
    .post(handleRequest(reviewService.addReview))


    
    router
    .route('/:id/rating')
    .get(handleRequest(reviewService.getAvgRating))

 
  router.get('/by/:author',handleRequest(service.getBooksByAuthor));

  router.get('/search/term',handleRequest(service.search));
  
  
  return router;


};


module.exports=getRouter;


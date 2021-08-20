function createReview(review,rating){
    let review = new Object();
    review.description = review;
    review.rating= rating;
    return review;

    
}

function Book(title,author,price){
    this.title = title;
    this.author = author;
    this.price =price;
    this.reviews = [];
    this.addReview(review){
        this.reviews.push(review);
    }
    
}
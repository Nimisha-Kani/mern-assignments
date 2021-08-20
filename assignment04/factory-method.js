function createReview(comment, rating){
    let p =new Object();
    p.comment = comment;
    p.rating = rating;

    return p;
}

let reviews=[
    createReview('Excellent',4.9),
    createReview('Bad',2),
    
]

for(let review of reviews){

    for(let property in review){
        console.log(property, review[property])
    }
    console.log();
}

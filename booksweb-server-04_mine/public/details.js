async function addReview(){
    let reviewerName = document.getElementById("name").value;
    let reviewerRating = document.getElementById("reviewer-rating").value;
    let reviewerComment = document.getElementById("reviewer-comment").value;
    const data = {
        isbn:isbn,
        name:reviewerName,
        rating:reviewerRating,
        comment:reviewerComment
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(data)
    }
    let res = await fetch(`api/books/${isbn}/reviews`,options)
    console.log("ress",res)
    let newReview = await res.json();
    console.log('reviewss',newReview)
    console.log('reviewer Name',reviewerName);

}
let books= [ 
    
        new Book('The Accursed God','Vivek Dutta Mishra',399),
        new Book('The Count of Monte Cristo','Alexandre Dumas',450),
        //add few more books here
        new Book('Harry Potter','J.K. Rowling',375),
        new Book('Julius Cesar','William Shakespere',2000)
];


books[0].addReview(createReview('Great book on Mahabharata',4.4));
books[0].addReview(createReview('Just another book! Not that great', 4));

books[1].addReview(createReview('One of all time greatest classic',4.8));
books[1].addReview(createReview('Adventure, excitement and lengthy', 4.2));

books[2].addReview(createReview('Just another book! ',4.2));
books[2].addReview(createReview('written by J K Rowling',4.3));





function showBook(book){

    document.getElementById("bookTitle").innerHTML=book.title;
    document.getElementById("bookAuthor").innerHTML=book.author;
    document.getElementById("bookPrice").innerHTML=book.price;
    document.getElementById("avg").innerHTML ="Average Rating is " + book.getRating();
    for(let i in books){
        if(books[i]=== book){
            document.getElementById("book-no").innerHTML = (Number(i)+1)+"/"+books.length;
        }
    }
   

    let reviews = document.getElementById("reviews");
    reviews.innerHTML='';

    for(let review of book.reviews){
        reviews.innerHTML+=`
                            <tr>
                                <td>${review.description}</td>
                                <td>${review.rating}/5</td>
                            </tr>
                            `
    }
}

let index=0;

function next(){
    index++;;
    if(index>=books.length)
        index=books.length-1;
    showBook(books[index]);
}

function previous(){
    index--;
    if(index<=0)
        index=0;
    showBook(books[index]);
}




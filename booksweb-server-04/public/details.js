let bookTitle = document.getElementById('book-title')


const details=async(isbn)=>{
    // console.log(isbn)
    const url='http://localhost:5000/api/books/'+isbn;
    console.log(url);
    let response=await fetch(url); 
    // console.log(response);
    let book=await response.json();
    console.log("book",book,"bookkk");
    let val= book.title;
    console.log("inside book details",val);
    bookTitle.innerHTML = val;
}


const deleteBook= async(isbn)=>{
    
    const url='http://localhost:5000/api/books/'+isbn;


}
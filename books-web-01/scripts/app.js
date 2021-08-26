
const manager = new BookManager();
function displayBookList(parentElementId) {

    let bookList = document.getElementById(parentElementId); //get reference to the tbody
    bookList.innerHTML = ''; //empty the tbody


    for (let book of manager.getAllBooks()) {
        let tr = `
        <tr>
            <td><img  src='${book.cover}'/></td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <a class='primary' href='book-details.html?id=${book._id}'>Details</a>
                <a class='danger' href='#' onclick='deleteBook("${book._id}")'>Delete</a>
            </td>
        </tr>        
        `

        bookList.innerHTML+=tr;
    }

}

function deleteBook(bookId){
    //console.log('deleting book ', bookId);
    manager.removeBook(bookId);
    displayBookList('books');
}

function setHtml(id,content){
    document.getElementById(id).innerHTML=content;
}

function setValue(id,content){
    document.getElementById(id).value=content;
}
function showReviews(id){
    let reviewArray = manager.loadReviews(id);
    console.log("Inside show reviews Array",reviewArray);
    let rev = document.getElementById("reviews");
    rev.innerHTML = '';
    for(let review of reviewArray){
        rev.innerHTML+=`
                        ${review.name} rated ${review.rating}<br>
                        ${review.comment}<br><hr>
                        `;
    }
}

function showBookDetails(){
    console.log(window.location.search);
    let id = window.location.search.replace("?id=","");
    console.log('id',id);

    let book=manager.getBookById(id);
    console.log('book',book);

    setHtml('book-title',book.title);
    setHtml('book-author',book.author);
    setHtml('book-details',book.description);
    document.getElementById('cover-image').src=book.cover;

    showReviews(id);
       
}

function getValue(id){
    return document.getElementById(id).value;
}

function addBook(){
    let book={
        _id: getValue('id'),
        title:getValue('title'),
        author: getValue('author'),
        cover:getValue('cover'),
        description: getValue('description'),
    }
    console.log('book',book);
    manager.addBook(book);
    window.location.href="index.html";
    
}

function addReview(){
    let book_id = window.location.search.replace("?id=","");
    console.log('id',book_id);
    let review = {
        
        name: getValue('reviewer-name'),
        rating: getValue('reviewer-rating'),
        comment: getValue('reviewer-comment'),
        

    }
    manager.addReview(book_id,review);
}

function searchBook(){
    console.log("Inside Search Book");
    let tab = getValue('books');
    let type = getValue('search-type');
    let search = getValue('search');
    console.log('type.value',type);
    if(type==='Id'){
        console.log('search.value',search);
        let searchBybook = manager.getBookById(search);
        
        tab.innerHTML ='';
        if(searchBybook){
            let tr = `
        <tr>
            <td><img  src='${searchBybook.cover}'/></td>
            <td>${searchBybook.title}</td>
            <td>${searchBybook.author}</td>
            <td>
                <a class='primary' href='book-details.html?id=${searchBybook._id}'>Details</a>
                <a class='danger' href='#' onclick='deleteBook("${searchBybook._id}")'>Delete</a>
            </td>
        </tr>        
        `

        tab.innerHTML+=tr;
        }
    }
}
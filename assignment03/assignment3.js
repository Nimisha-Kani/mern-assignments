var books = [
    {
        title:'Harry Potter',
        author:'J.K. Rowling',
        price:375,
        rating: 4.8
    },
    {
        title:'Anna Karenina',
        author: 'Leo Tolstoy  ',
        price: 189,
        rating: 4.1
    },
    {
        title:'The Alchimist',
        author: 'Paulo Coelho',
        price: 175,
        rating: 3.9
    }
]
function printArray(books){
    console.log('Title       \tAuthor        \tPrice\tRating');
    for(let book of books){
        console.log(`${book.title}\t${book.author}\t${book.price}\t\t${book.rating}`)
}
}
function avgPrice(books){
    let result = 0;
    for(let book of books){
        
        result += book.price;
    }
    console.log("average price ",result/books.length);
}
function avgRating(books){
    let result = 0;
    for(let book of books){
        result+=book.rating;
    }
    console.log("Average Rating ",result/books.length);
}

function titlePrice(books){
    var newObjArr = [];
    for(let book of books){
        var newObj = new Object();
        newObj.title = book.title;
        // console.log("newObject.title ",newObj.title);
        newObj.price = book.price;
        newObjArr.push(newObj);
    }

    return newObjArr;
}
function partialTitile(book, element){
    let s='';
    for(let i of book.title){
        // console.log("print book.title[i]", i.toLowerCase());
        
        for(let j of element){
            if(i.toLowerCase() == j.toLowerCase()){

                s+=i.toLowerCase();
            }
            
        }
        
        if(s.toLowerCase()==element.toLowerCase()){
            // console.log("sss==",s,"inside equals");
            return true;
        }
        
    }
    return false;
}
function authorName(book,element){
    if(book.author==element){
        return true;
    }
    else{return false; }
}
function priceRange(book,lower,upper){
    if(book.price>=lower && book.price<=upper){
        return true;
    }
    else{return false;}
}

function ratingRange(book,lower,upper){
    if(book.rating>=lower && book.rating<=upper){
        return true;
    }
    else{return false;}
}

function find(books, matching, element,upper){
    let results=[];
    for(let book of books){
        if(matching(book,element,upper))
            results.push(book.title);
    }
    return results;
}


printArray(books);
avgPrice(books);
avgRating(books);


let bookByauthor = find(books, authorName, 'Paulo Coelho');
console.log("Book name  ", bookByauthor);

let bookBytitle = find(books, partialTitile, 'the');
console.log("Book names with partial title ",bookBytitle);

let bookByprice = find(books,priceRange,150,300);
console.log("Book name for given price range  ",bookByprice);

let bookByrating = find(books,ratingRange,4,5);
console.log("Book name for given rating Range  ",bookByrating);


var newObj = titlePrice(books);
console.log("New object with title and price ", newObj);
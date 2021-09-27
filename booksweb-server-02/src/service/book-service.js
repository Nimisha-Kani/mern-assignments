let books=[];
const dbPath=Path.join(__dirname,'src','db','books-db.json');
fs.readFile(dbPath,(err,data)=>{
    if(err) {
        console.log('error reading db', err);
        return ;
    }

    books=JSON.parse(data);
    console.log(`total ${books.length} loaded...`);
});






function getAllBooks(){
    
}
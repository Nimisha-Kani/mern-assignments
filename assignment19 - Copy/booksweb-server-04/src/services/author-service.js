const { response } = require('express');
const {Author} = require('../models/author');
const {ServiceError}= require('../utils/service-error');
const {Book} = require('../models/book');

class AuthorService {
    constructor(){
        const functions = [
            this.getAllAuthors,
            this.getAuthorById,
            this.addAuthor,
            this.removeAuthor,
            this.updateAuthor,
            this.getBooksByAuthor,
        ]
        for(let f of functions){
            //console.log(f.name); 
            this[f.name] = f.bind(this);
        }
    }
    async getAllAuthors(){
        return await Author.find();
    }
    async getAuthorById({id}){
        
        let author=await Author.findOne({id:id});
        if(!author)
            throw new ServiceError(404, "Invalid Book Id", {id:id});
        else
            return author;       

    }
    async addAuthor({body}){
        try{
            let newAuthor= new Author(body);
            await newAuthor.save();
            return newAuthor;
        } catch(error) {

            throw new ServiceError(400, error.message, {error});

        }
    }
    async removeAuthor({id}){
        try{
        let author=await this.getAuthorById({id});
        await author.delete();
        }catch(e){
            console.log(e);
        }

    }
    async updateAuthor({id,body}){
        let author=await this.getAuthorById({id});
       return await Author.findOneAndUpdate({id:id},body);
   }

   async getBooksByAuthor({author}){
       console.log({author});
        const a= new RegExp(author,'i');
        console.log("author a",a);
        return await Book.find({author:a})
    }
}


module.exports={AuthorService}
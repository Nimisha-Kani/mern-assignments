import { contains, copyObject, delay } from '../utils/core';
import http from './http';

const url = 'http://localhost:5000/api/authors/';

export class AuthorService {
    static instance  = new AuthorService();
    constructor(){

    }
    getAllAuthor= async()=>{
        try {
            // let response = await fetch(url);
            // // console.log('response', response);
            // if (response.status !== 200) {
            //     console.error('http error', response.status);
            //     return [];
            // }
            // let authors = await response.json();
            // return authors;
            let response=await  http.get('authors'); 
            console.log('response',response);
            return response.data;
        } catch (error) {
            console.log('error', error);
            return null;
        }
    }

    addAuthor = async (author) => {
        // console.log(author);
        // this.authors.push(author);
        // this.save();
        // console.log('author saved',author);
        try{
            let response= await http.post('authors',author);
            return {success:true, data:response.data};

        }catch(error){
            console.log('error posting data', error);
            return {success:false, error:error};
        }
    }    
    
    async update(author) {
        //TODO: COMPLETE THIS WORK!
        const id = author.id;
        try{
            let response=await http.put(`/authors/${id}`,author);
            return {success:true,data:response};
        }catch(error){
            return {success:false, error:error};
        }
    }

    getAuthorById = async (id) => {
        try{
            
            let response= await http.get(`authors/${id}`);
            console.log('author by id ', response.data);
            return response.data;
        }catch(error){
            console.log('error fetching book by isbn',error);
            return undefined;
        }
    }

}

import getHttp from './http';

export class AuthorService{

    static instance=new AuthorService();

    getAllAuthors=async ()=>{

        const response= await getHttp().get('authors');
        return response.data;
    }

    addAuthor=async (author)=>{
        const response= await getHttp().post('authors',author);
        return response.data;
    }

    updateAuthor=async(author)=>{
        const response= await getHttp().put(`authors/${author.id}`,author);
        console.log('update response',response);
        return response.data;
    }
}
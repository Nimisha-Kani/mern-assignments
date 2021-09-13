import React, {useState}from 'react';
import {AuthorService} from '../services/author-service';

const Component = (props)=>{
    // const author={
    //     id:'',
    //     name:'',
    //     photo:'',
    //     biography:''
        
    // };
    const handleSave=(author)=>{
        console.log("reached here");
        AuthorService.instance.addAuthor(author);

        props.history.push('/author/list'); 
    };

    return(
        <div>
            <h2>Add Author</h2>
            <form>
                <div className="form-group">
                        <label htmlFor="name">Author Name</label>
                        <input  type="text"          
                                id="name"
                                className="form-control"          
                                placeholder="name"
                        />


                    </div>

                    <div className="form-group">
                        <label htmlFor="author-id">Author Id</label>
                        <input  type="text"          
                                id="author-id"
                                className="form-control"          
                                placeholder="author-id"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="photo">Photo</label>
                        <input  type="text"          
                                id="photo"
                                className="form-control"          
                                placeholder="photo"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="biography">Biography</label>
                        <input  type="text"          
                                id="biography"
                                className="form-control"          
                                placeholder="biography"
                        />
                    </div>
                    <button onClick={handleSave} type="submit" className='btn  btn-primary'>Save</button>
            </form>
        </div>
    )
}

export default Component;
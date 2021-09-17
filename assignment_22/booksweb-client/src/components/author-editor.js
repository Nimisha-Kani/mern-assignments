import React, { useState,useEffect } from 'react';
import { IconInput } from './input-controls';
import {UserService} from '../services/user-service';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserAlt,faTags, faImage, faInfo,  faKey , faWindowClose, faUserPlus } from '@fortawesome/free-solid-svg-icons'

import {useSelector,useDispatch} from 'react-redux';

import {updateAuthor,addAuthor} from '../store/author-action';
import * as ActionNames from '../store/action-names';


const Component = (props) => {


    const getEmptyAuthor=()=>({name:'',id:'',biography:'', photo:'',tags:''});

    const [author, setAuthor] = useState(getEmptyAuthor());
    const [errors, setErrors] = useState(null);

    const [createMode, setCreateMode] = useState(true);


    //const history = useHistory();

    let selectedAuthor= useSelector(state => state.selectedAuthor);
    let status=useSelector(state => state.status);
    const dispatch=useDispatch();

    if(status.type===ActionNames.STATUS_ERROR){
        console.log('error',status.error);
    }

    useEffect(()=>{
       // console.log('selected author changed',selectedAuthor);
        if(selectedAuthor) 
                setAuthor(selectedAuthor);
        else
                setAuthor(getEmptyAuthor());

        setCreateMode(selectedAuthor===null); //if no selected author I am creating a new one
    },[selectedAuthor]);


    const handleChange = (id, value) => {
        author[id] = value;
        setAuthor({ ...author });
    }

    const handleSave = async(e) => {
        e.preventDefault();
        if(createMode){
            addAuthor(dispatch,author);
            
        } else
            updateAuthor(dispatch,author);
    }

    const handleNewAuthor= e=>{
        setCreateMode(true);
        setAuthor(getEmptyAuthor());;
    }

    if(!author)
        return null;

    return (
        <div className="author-editor">
            <button class='btn btn-primary ' onClick={handleNewAuthor}>New Author</button>
            <div className="row">           
                
                <div className='col col-8'>
                    
                    <form>
                        <IconInput disabled={!createMode} value={author.name} id="name" icon={faUserAlt} placeholder="Author's Name" onChange={handleChange} />
                        <IconInput disabled={!createMode} value={author.id} id="id" icon={faKey} placeholder="Friendly Id with no space" onChange={handleChange} />
                        <IconInput value={author.photo} id="photo" icon={faImage} placeholder="photo url" onChange={handleChange} />
                        <IconInput value={author.biography} id="biography" icon={faInfo} placeholder="Author's Biography" onChange={handleChange} />
                        <IconInput value={author.tags} id="tags" icon={faTags} placeholder="Important Keywords" onChange={handleChange} />
                        <button onClick={handleSave} type="submit" className='btn  btn-primary'>
                            <FontAwesomeIcon icon={faUserPlus}/>
                             &nbsp;&nbsp;{createMode?"Add":"Update"}
                        </button>
                        <button onClick={handleSave} type="submit" className='btn  btn-danger'>
                            <FontAwesomeIcon icon={faWindowClose}/>
                             &nbsp;&nbsp; Cancel
                        </button>
                        {status.type===ActionNames.STATUS_ERROR&&<p className="text text-danger">{status.error?.response?.data?.message}</p>}
                        
                    </form>
                </div>
                <img src={author.photo} alt={author.name} className='col col-4'/>
            </div>
 
        </div>
           );
};

export default Component;
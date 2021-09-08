import React from 'react';


class AppHome extends React.Component{

    constructor(props){
        super(props);
        this.state={
            images:['./images/coverpage.jpg',
                    './images/image2.jpg',
                    './images/image3.jpg',
                    './images/image4.jpg',
                    './images/image5.jpg'
        
                ],
            quotes:[
                    'A room without books is like a body without a soul',
                    'Take a good book to bed with you - books do not snore.',
                    'Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.',
                    'A book is a version of the world. If you do not like it, ignore it; or offer your own version in return.',
                    'If you don’t like to read, you haven’t found the right book.'
            ],

            current:0
        }

    }
    handleClick = ()=>{
        if(this.state.current<this.state.images.length-1){
            this.setState({current:this.state.current+1});
            
        }
        else{
            this.setState({current:0})
            
        }
        return this.current;

    }
    

    render(){
        return <div className='body'>
            <div>
                <h2>Home!</h2>
                <p>Welcome to the Book's web Home page.</p>
                <p className="quotes">{this.state.quotes[this.state.current]}</p>
                <img className="current-img" src={this.state.images[this.state.current]} alt="current image" />
            </div>
            <div>
                <button className="refresh" onClick = {this.handleClick}>Refresh</button>
            </div>
        </div>
    }

};

export default AppHome;

import React from 'react';
import RD from 'react-dom';


const siteTitle= React.createElement('h1',{}, 'Reactive World');

const siteSubtitle= React.createElement('h3',{style:{textDecoration:"underline"}},'The World of React!..');


const siteHeader= React.createElement('div',{
   style:{background:'lightcoral', height:100}
}, siteTitle, siteSubtitle); 


const root=document.getElementById('root');

RD.render(siteHeader,root);
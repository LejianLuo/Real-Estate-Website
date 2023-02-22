import './css/SearchDiv.css';
import SeachBlock from "./SearchBlock";
import React from 'react'; import ReactDOM from 'react-dom';

export default function SeachDiv(){
    return(
        <div id="searchDiv" >
            <h1 id="title" >Real Estate Made Real Easy</h1>
            <SeachBlock />
        </div>
    );
}
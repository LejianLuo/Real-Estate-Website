import InterestList from './InterestList'
import SearchBar from './SearchBar';
import React from 'react'; import ReactDOM from 'react-dom';


export default function SeachBlock(){
    return(
        <div style={{
            position:'relative',
            top:'30%',
           
        }}>
            <InterestList/>
            <SearchBar/>
            
        </div>
    );
}
import * as React from 'react';
import NewsMenu from './NewsMenu';
import NewsList from './NewsList';
import './css/NewsBlock.css'

export default function NewsBlock(){
    return(
        <div>
            <h1 style={{textAlign:'center'}}>News from the blog</h1>
            <div id='newsBlock'>
                <NewsMenu/>
                <NewsList/>
            </div>
        </div>
    );
}
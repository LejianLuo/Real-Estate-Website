import * as React from 'react';

export default function NewsList(){
    let newsArticle=(
    <article>
        <h2>A Breath of Fresh Air: India’s Cleanest Cities and Their Real Estate</h2>
        <p>India is a land of diversity, and that includes its cities! While some cities 
            teem with pollution and filth, others are relatively clean and livable. 
            The key fac­tors in decid­ing the best r...</p>
        <p>March 9, 2023    <span>Current Trends</span></p>
    </article>);
    return(
        <div>
            {Array(4).fill(0).map(()=>newsArticle)}
        </div>
    );
}
import * as React from 'react';
import InsightCard from './InsightCard';
import ToolCard from './ToolCard';
import './css/InsightBlock.css'

export default function InsightBlock(){
    return(
        <>
        <div style={{textAlign:'center',marginTop:50}}>
            <h1>Insights & Tools</h1>
                <InsightCard/>
                <InsightCard/>
                <InsightCard/>
        </div>
        <div id='tool'>
        <div id='developer'>
            <h1>For Real Estate Developers</h1>
            <ToolCard/>
            <ToolCard/>
        </div>
        <div id='agent'>
            <h1>For Agents</h1>
            <ToolCard/>
            <ToolCard/>
        </div>
        </div>
        </>
    );
}
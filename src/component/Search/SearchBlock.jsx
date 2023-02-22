import InterestList from './InterestList'
import SearchBar from './SearchBar';


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
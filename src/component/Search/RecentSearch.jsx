import { Card } from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
import './css/RecentSearch.css';

export default function RecentSearch(){
    return(
        <div id="recentSearchWrapper">
            <p id='recent'>recent search:</p>
            <Card className="card">
                <ReplayIcon/>
                <span>Ottawa</span>
            </Card>
            <Card className="card">
                <ReplayIcon/>
                <span>Toronto</span>
            </Card>
            <Card className="card">
                <ReplayIcon/>
                <span>Kitchener</span>
            </Card>
        </div>
    );
}
    
import NavBar from "./component/Nav/NavBar"
import SearchDiv from "./component/Search/SearchDiv"
import FinanceCarousel from './component/Finance/FinanceCarousel'
import ProjectBlock from "./component/NewProject/ProjectBlock";
import OptionBlock from "./component/OptionPanel/OptionBlock";
import HomeBlock from "./component/HomeAd/HomeBlock";
import React from 'react'; 
import CityBlock from "./component/City/CityBlock";
import LocalityBlock from "./component/Locality/LocalityBlock";
import InsightBlock from "./component/Insight/InsightBlock";
import NewsBlock from "./component/News/NewsBlock";
import FooterBlock from "./component/Footer/FooterBlock";

function App() {
  return (
    <div className="App">
      <NavBar/>
      < SearchDiv />
      <FinanceCarousel/>
      <ProjectBlock/>
      <OptionBlock/>
      <HomeBlock/>
      <CityBlock/>
      <LocalityBlock/>
      <InsightBlock/>
      <NewsBlock/>
      <FooterBlock/>
    </div>
  );
}

export default App;

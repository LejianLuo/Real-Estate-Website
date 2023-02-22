import NavBar from "./component/Nav/NavBar"
import SearchDiv from "./component/Search/SearchDiv"
import FinanceCarousel from './component/Finance/FinanceCarousel'
import ProjectBlock from "./component/NewProject/ProjectBlock";
import OptionBlock from "./component/OptionPanel/OptionBlock";
import HomeBlock from "./component/HomeAd/HomeBlock";

function App() {
  return (
    <div className="App">
      <NavBar/>
      < SearchDiv />
      <FinanceCarousel/>
      <ProjectBlock/>
      <OptionBlock/>
      <HomeBlock/>
    </div>
  );
}

export default App;

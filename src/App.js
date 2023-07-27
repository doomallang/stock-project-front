import MainContainer from "./container/MainContainer";
import Tab from "./component/Tab";
import RankContainer from "./container/RankContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFoundContainer from "./container/NotFoundContainer";
import PortfolioContainer from "./container/PortfolioContainer";
import './App.css'

function App() {

  return (
    <div className="App">
        <Tab />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainContainer />}></Route>
                <Route path="/recommend/*" element={<RankContainer />}></Route>
                <Route path="/portfolio/*" element={<PortfolioContainer />}></Route>
                <Route path="*" element={<NotFoundContainer />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

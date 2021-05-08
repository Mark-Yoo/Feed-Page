import "./App.scss";
import { Route } from "react-router-dom";
import FeedPage from "./pages";
import DetailPage from "./pages/detail";

function App() {
  return (
    <>
      <div className="dev__data">[05.10.2021] 유진혁</div>
      <div>
        <Route exact path="/" component={FeedPage} />
        <Route path="/:id" component={DetailPage} />
      </div>
    </>
  );
}

export default App;

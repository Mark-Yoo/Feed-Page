import './App.scss';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import FeedPage from './pages';
import DetailPage from './pages/detail';

function App() {
  return (
    <>
      <div class="dev__data">[03.16.2021] 유진혁</div>
      <div>
        <Route exact path="/" component={FeedPage} />
        <Route path="/:id" component={DetailPage} />
      </div>
    </>
  );
}

export default App;

import './App.scss';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import FeedPage from './pages';
import DetailPage from './pages/detail';

function App() {
  return (
    // <FeedPage />
    <>
      <Route exact path="/" component={FeedPage} />
      <Route path="/:id" component={DetailPage} />
    </>
  );
}

export default App;

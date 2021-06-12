import './App.scss';
import { Fragment, useState } from 'react';
import SearchBar from './components/search';
import ComicCard from './components/card';
import Header from './components/header';

function App() {
  const [comicData, setComicData] = useState(null);
  return (
    <Fragment>
     <Header/>
      <SearchBar/>
      <ComicCard/>
    </Fragment>
  );
}

export default App;

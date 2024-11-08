import './Static/Style/App.css';
import useEnterspeed from './Hooks/useEnterspeed';
import Navigation from './Components/Navigation';
import Home from './Components/Pages/Home';
import ContentPage from './Components/Pages/ContentPage';
import MovieList from './Components/Pages/MovieList';

function App() {
  const url = window.location.href;

  const enterspeedResponse = useEnterspeed(url, ['navigation']);
  //const enterspeedNavigationResponse = useEnterspeed(null, ['navigation'], 10);

  const components = {
    home: Home,
    contentPage: ContentPage,
    movieList: MovieList
  };

  var PageComponent = components[enterspeedResponse?.page.basePage?.type as keyof typeof components];
  
  return (
    <>
      <div className="App">
        <header className="App-header">
        <div className='App-sign' />
          <Navigation navigationItems={enterspeedResponse?.navigation.items ?? []} />
          <div className='App-bat' />
        </header>
        <main className="App-main">
          {PageComponent && enterspeedResponse?.page &&
            <PageComponent page={enterspeedResponse.page} />
          }
        </main>
        <footer className='App-footer'>
          <div className='App-pumpkin' />
        </footer>
      </div>
    </>
  );
}

export default App;

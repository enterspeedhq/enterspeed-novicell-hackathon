import NovicellLogo from '../../Static/Images/novicell.png'
import EnterspeedLogo from '../../Static/Images/enterspeed.png'

function Home({page}: {
  page: Page
}) {
  const homePage = page as ContentPage;

  return (
      <div>
        <h1 className="App-home-headline">{homePage.headline}</h1>
        <div dangerouslySetInnerHTML={{ __html: homePage.content }} />
        <div className='App-home-logo-container'>
          <img className='App-home-logo-first' src={NovicellLogo} alt="Novicell" />
          <img src={EnterspeedLogo} alt="Enterspeed" />
        </div>
      </div>
  );
}

export default Home;

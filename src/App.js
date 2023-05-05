import './App.css';
import Joker from './components/Joker';

function App() {
  return (
    <div className="App">
      <div className='mainContainer'>
        <h1>JOKERS</h1>
        <Joker 
        name='Jack Nicholson'
        image='jacknicholson'  
        year='1989'
        history="Joker was the chosen alias of Jack Napier, to which an accident occurred that his face and psyche were altered by chemicals. He became Batman's first and greatest enemy, and the two share a secret past that made them enemies in the past." />

        <Joker 
        name='Heath Ledger'
        image='heathledger'     
        year='2008'
        history='The Joker was a psychopathic anarchist, nihilist, and criminal mastermind who rose to power in the criminal underworld by thrusting Gotham City into turmoil, and drew Batman ever closer to crossing the line between hero and vigilante.' />

        <Joker 
        name='Joaquin Phoenix'
        image='joaquinphoenix'      
        year='2019'
        history='Arthur Fleck, later known as the Joker, is a failed comedian who, following his great lack of success and respect, loses his mental stability until he becomes a nihilistic, sociopathic killer calling himself Joker, aiming himself to make Gotham smile in his way.' />

        <Joker 
        name='Barry Keoghan'
        image='barrykeoghan'     
        year='2022'
        history='Born with a congenital disease which left him with a permanent grin, the man who grew up to be "the Joker" had a rough life. Due to the stares he received from everywhere he went, he came to believe that life had played a cruel joke on him, opening his pursuit of a life filled with crime and anarchy.' />
      </div>
    </div>
  );
}

export default App;

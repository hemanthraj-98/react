import logo from './patriots.jpg';
import logo1 from './jahlani.png';
import './App.css';

function App() {
  return (
    <div>
      <h1 align="center">Patriots Stock Report: 3 up, 3 down</h1>
      <img src={logo} alt="Patriots" />
      <p>After a disastrous 2-8 start, it's finally the bye week in New England. The Patriots organization hoped to be sitting in a better spot after 10 games, but this is the situation they find themselves.</p>
      <p>With there not being a game this weekend, I thought it would be a good time to fill out another Patriots stock report.</p>
      <p>Keep in mind, that I'm basing this off of a recent play. For that reason, a guy like Christian Gonzalez, whose stock is through the roof, won't be listed, simply because he's injured and hasn't played.</p>
      <p>With all that in mind, here's my Patriots stock report.</p>
      <h1 align="center">Patriots Stock Report</h1>
      <h2>Up</h2>
      <p>Mike Onwenu</p>
      <p>Have the Patriots found themselves a long-term right tackle? It appears they may have. In 4 games at right tackle, Mike Onwenu has given up 4 total pressures. He's also been a dominant force in the run game. It's no coincidence that the Patriots have begun to run the ball better as of late.</p><br></br>
      <p>Onwenu is a free agent after this season, and at this point, he's a must-keep. The former Michigan product has provided stability to a position that has desperately needed it.</p>
      <h2>Jahlani Tavai</h2>
      <p>You have to love the type of player Jahlani Tavai has developed into. Tavai has 61 combined tackles, 4 pass deflections, 1 forced fumble, 2 tackles for loss, and 3 quarterback hits this year.</p>
      <img src={logo1} alt="jajlani" />
    </div>
    
  );
}

export default App;

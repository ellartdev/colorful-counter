import React from 'react';
import './App.css';
/**
 * DISCLAIMER
 * ---------------------------------------------------------
 * I take no responsibility for epileptic seizures.
 * Be safe and cautious!
 */
import EpilepsyWarning from './Components/EpilepsyWarning';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      randomLetters: '',
      bgColor: '#000',
      randStringColor: '#fff',
      secColor: '#fff',
      hexColor: '#fff',
      speed: 1000,
      warning: true
    };
    this.handleSpeed = this.handleSpeed.bind(this);
    this.loop = this.loop.bind(this);
  };

  ticking() {
    this.setState({
      ...this.state,
      seconds: this.state.seconds + 1,
      randomLetters: this.randomString(9),
      bgColor: this.cssRandHexCode(),
      randStringColor: this.cssRandHexCode(),
      secColor: this.cssRandHexCode(),
      hexColor: this.cssRandHexCode(),
    });
  };

  handleSpeed(evt) {
    this.setState({ ...this.state, speed: evt.target.value });
  };

  randomString(digit) {
    let letters = '0123456789AĀĄBCČDEĒĘĖFGĢHIĪĮJKĶLĻMNŅOPQRSŠZŽTUŪŲVWÕÄÖÜXY'; // Baltic States alphabet combined
    let code = "";
    for (let i = 0; i < digit; i++) {
      code += letters[Math.floor(Math.random() * letters.length)];
    };
    return code;
  };

  cssRandHexCode() {
    let numbers = '0123456789ABCDEF';
    let code = "#";
    for (let i = 0; i < 6; i++) {
      code += numbers[Math.floor(Math.random() * numbers.length)];
    };
    return code;
  };

  loop() {
    //this.setState({seconds: this.state.seconds + 1})
    this.ticking()
    window.setTimeout(this.loop, this.state.speed)
  }

  componentDidMount() {
    setTimeout(async () => {
      await this.setState({warning: !this.state.warning});
      this.interval = await this.loop() 
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div
      style={{ backgroundColor: this.state.bgColor }}
      className="App">
        <header className="App-header">
          { this.state.warning && <EpilepsyWarning /> }
          { !this.state.warning && (
            <div className="Counter">
              <p style={{backgroundColor: this.state.secColor}}>{ this.state.seconds }</p>
              <p style={{backgroundColor: this.state.randStringColor}}><b>{ this.state.randomLetters }</b></p>
              <p style={{backgroundColor: this.state.hexColor}}>{ this.state.bgColor }</p>
              <input value={this.state.speed} onChange={this.handleSpeed} type="range" name="speed" min="0" max="2000" />
              <p>{this.state.speed}</p>
            </div>
          )}
        </header>
      </div>
    );
  };
};

export default App;

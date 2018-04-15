import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import icon1 from './icons/C3P-0.svg';
import icon2 from './icons/vader.svg';
import icon3 from './icons/bb-8.svg';
import icon4 from './icons/fett.svg';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
      
    this.state = {
      starWars: [
        { name: "C-3PO", icon: icon1, points: "2,983 points", active: false },
        { name: "Darth Vader", icon: icon2, points: "1,292 points", active: false },
        { name: "BB-8", icon: icon3, points: "1,292 points", active: false },
        { name: "Boba Fett", icon: icon4, points: "872 points", active: false }
      ]
    };
      
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
      
  }
      
  handleBlur(event, i){
    let starWarsCopy = JSON.parse(JSON.stringify(this.state.starWars))
    starWarsCopy[i].name = event.target.value;
    starWarsCopy[i].active = false;
    this.setState({
      starWars:starWarsCopy 
    })
  }
    
  handleKeyPress(event, i){
    if (event.key === 'Enter') {
      this.handleBlur(event, i)
    }
  }
    
  handleClick(event, i){
    let starWarsCopy = JSON.parse(JSON.stringify(this.state.starWars))
    starWarsCopy[i].active = true;
    this.setState({ 
      starWars: starWarsCopy
    });
  }

  render() {
    return (
      <div className="App">
        <Tabs forceRenderTabPanel>
          <TabList>
            {this.state.starWars.map(character => {
              return (
                <Tab>{character.name}</Tab>
              )}
            )}
          </TabList>

          {this.state.starWars.map((character, index) => {
              return (
                <TabPanel>
                  <div className="react-tabs__menu is--open">
                    <img className="iconImage" src={character.icon} alt={character.name} />
                    {character.active ?
                      <input 
                        className="nameInput"
                        defaultValue={character.name} 
                        onBlur={(e) => this.handleBlur(e, index)}
                        onKeyPress={(e) => this.handleKeyPress(e, index)}
                        autoFocus
                      />
                    :
                      <b className="nameText" onClick={(e) => this.handleClick(e, index)} >{character.name}</b>
                    }
                    <span className="points">{character.points}</span>
                  </div>
                </TabPanel>
              )}
            )}

        </Tabs>
      </div>
    );
  }
}

export default App;

import React from 'react';


class Todolist extends React.Component {
  constructor() {
    super();

    this.state = {
      arr: [
       "go out tonight",
       "10min work out",
       "10min talk to people",
       "delegate this to somebody else",
       "travel on weekend out of the city",
       "plan a trip in September to Venice",
       "a car ride!!",
       "call your mom",
       "money check-in",
       "good reads - HMiller",
       "10min Artist date",
       "plan a trip to Vilnius",
       "look up your phone book - who do you want to meet",
       "10min paint a small sketch",
       "10min the piano playing",
       "go to massage",
       "swimming pool",
       "backup files",
       "play soccer",
       "Pauline Reage",
       "10min Math practice",
       "go for a walk, visit art-gallery",
       "check-out some residences - Japan, India, Cambodia",
       "throw out two worn-out items",
       "buy a new shirt",
       "fix some practical stuff at home",
       "smoke some weed in Nevada",
       "sing some songs with kids",
       "pay a surprise visit to your friend!",
       "15min ride with a bike",
       "duolingo French",
       "Havanna",
       "drink more water",
       "Abu Oreum",
       "a trip to Lvov",
       "do some UX!"
     ],
     answ: ''
    }
  }


  render() {
    const randIndex = Math.floor(Math.random() * this.state.arr.length);
    console.log(randIndex);
    this.state.answ = this.state.arr[randIndex];

    return (
      <p>{this.state.answ}</p>

    );
  }
}





export default Todolist;

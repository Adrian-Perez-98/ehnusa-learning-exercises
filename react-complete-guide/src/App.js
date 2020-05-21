import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const app = props => {

  const [personsState, setPersonsState] = useState({

    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Steph', age: 35}
    ],
    otherState: 'something else'
  });

  const [otherState, setOtherState] = useState ('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log('was clicked!');
    //personsState.state.persons[0].name = 'Adrian';
    setPersonsState({
      persons:[
        {name: 'Adrian', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Steph', age: 100}
      ],
      otherState: personsState.otherState
    });
  };

  return (
    <div className="App">
      <h1>Hi there!</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person
        name={personsState.persons[1].name} age={personsState.persons[1].age}
        >My Hobbies: Racing</Person>
      <Person
        name={personsState.persons[2].name} age={personsState.persons[2].age}/>
    </div>
  )
}

export default app;

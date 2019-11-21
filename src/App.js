import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:'1', name: "Rachit", age: 24},
      {id:'2', name: "Zain", age: 30 },
      {id:'3', name: "Aman", age: 24}
    ],
    showPersons: false
  }

   
  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];          //Spread Operator used for immutably updating the state
    persons.splice(personIndex, 1);
    this.setState ({persons: persons})

  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
      const person = {
        ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: [
        {name: 'Rachit', age: 24},
        {name: event.target.value, age: 32 },
        {name: 'Aman Shri', age: 25}
      ]     
  
     })
  }
  
  togglePersonsHandler = () =>{
 const doesShow = this.setState.showPersons;
 this.setState({showPersons: !doesShow});
  }
 
  
  render() {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid green',
        padding: '8px',
        cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons)
    {
        persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person 
                name = {person.name}
                age= {person.age}
                click = {() => this.deletePersonHandler(index)} 
                key= {person.id}
                changed= {(event) => this.nameChangedHandler(event, person.id)}                                  // Use this so that react can find what elements are updated
                />


        })
                }  
        </div> );
    }



    return (
      <div className="App">
        <h1> First React Page </h1>
        <p>This is really nice!!</p>
        <button
            style = {style} 
            onClick={this.togglePersonsHandler}>Toggle</button>
            {persons}  
      </div>
    );
  }
}

export default App;

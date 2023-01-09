import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actionTypes from '../store/actions';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
  state = {
    persons: [],
  };

  //   personAddedHandler = () => {
  //     const newPerson = {
  //       id: Math.random(),
  //       name: 'Max',
  //       age: Math.floor(Math.random() * 40),
  //     };

  //     this.setState((prevState) => {
  //       return {
  //         persons: prevState.persons.concat(newPerson),
  //       };
  //     });
  //   };

  //   personDeleteHandler = (personId) => {
  //     this.setState((prevState) => {
  //       return {
  //         persons: prevState.persons.filter((person) => person.id !== personId),
  //       };
  //     });
  //   };

  //   render() {
  //     return (
  //       <div>
  //         <AddPerson personAdded={this.props.onPersonAdd} />

  //         {this.state.persons.map((person) => ( //alterado.
  //           <Person
  //             key={person.id}
  //             name={person.name}
  //             age={person.age}
  //             clicked={() => {
  //               this.props.onPersonDelete(person.id);
  //             }}
  //           ></Person>
  //         ))}
  //       </div>
  //     );
  //   }

  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onPersonAdd} />
        {this.props.persons.map(
          (
            person //alterado.
          ) => (
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              clicked={() => {
                this.props.onDeletePerson(person.id);
              }}
            ></Person>
          )
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.persons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPersonAdd: (name, age) => {
      dispatch({
        type: actionTypes.ADD_PERSON,
        personData: {
          name: name,
          age: age,
        },
      });
    },
    onDeletePerson: (personId) => {
      dispatch({
        type: actionTypes.DELETE_PERSON,
        personId: personId,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);

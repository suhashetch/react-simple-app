import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    /*
    NOTE:
    Initialization of 'state' for this component.
    Every class-based component in React has a state object
    associated with it.
    Each instance of the component has its own state object.
    Everytime the state of a component changes, the component
    along with all its children is re-rendered.
    */
    this.state = { term: '' };
  }

  /*
  NOTE:
  Every component must have a render method which returns
  a JSX element
  */
  render() {
    return (
      /*
      NOTE:
      A controlled component is one whose 'value' is influenced by
      the 'state' or changes in 'state'
      */
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange = {this.onInputChange} />
          {/* Value of the input = {this.state.term} */}
      </div>
    );
  }

  /*
  NOTE:
  Event handler.
  All event handlers are called with an "event" object
  Passed as param "evt" below
  */
  onInputChange = (evt) => {
    // console.log(evt.target.value);
    // console.log(evt);

    // NOTE: setState is the right (ONLY) way to record state changes
    this.setState({ term: evt.target.value });
    this.props.onSearchTermChange(evt.target.value);
  }

  /*
  NOTE:
  Until arrow functions, every new function defined its own 'this' value [...].
  This proved to be annoying with an object-oriented style of programming.
  Arrow functions capture the 'this' value of the enclosing context [...]
  */
}

// This is a functional component
/*
const SearchBar = () => {
  return <input />; // JSX maps to React.createElement()
};
*/

export default SearchBar;

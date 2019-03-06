import React from 'react';
import { connect } from 'react-redux';

import { CharacterList } from '../components';
// import actions
import { getCharacters } from '../actions/index';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <div>LOADING...</div>;
    }
    if (this.props.error) {
      return <div>Something went wrong: {this.props.error}</div>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error,
  };
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    /* action creators go here */
    getCharacters: getCharacters,
  },
)(CharacterListView);

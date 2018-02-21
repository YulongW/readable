import React, { Component } from 'react';
import { connect } from 'react-redux';

// presentational components
import Header from '../components/Header';

// actions
import {
  setSortBy
} from '../../app/actions/post';

const mapStateToProps = (state) => ({
  sortBy: state.sortBy
});

const mapDispatchToProps = (dispatch) => ({
  sortByHandler: (event) => dispatch(setSortBy(event.target.value))
});

class HeaderContainer extends Component {
  render() {
    const { sortBy, sortByHandler } = this.props;
    
    return (
      <Header
        sortBy={sortBy}
        sortByHandler={sortByHandler}
      />
    );
  }
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(HeaderContainer);

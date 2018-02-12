import React, { Component } from 'react';
import { connect } from 'react-redux';

// presentational components
import CategoryList from '../components/CategoryList';

// api
import * as CategoryApi from '../utils/api/category';

// actions
import { receiveCategories } from '../../app/actions/category'

const mapStateToProps = (state) => ({
  categories: state.category.categories
});

const mapDispatchToProps = (dispatch) => ({
  receiveCategories: (categories) => dispatch(receiveCategories(categories))
});

class CategoryListContainer extends Component {
  componentDidMount() {
    CategoryApi
      .getAllCategory()
      .then(categories => this.props.receiveCategories(categories));
  }

  render() {
    return (
      <CategoryList categories={this.props.categories} />
    );
  }
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CategoryListContainer);

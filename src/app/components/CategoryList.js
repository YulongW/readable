import React from 'react';
import CategoryCard from './CategoryCard';

const CategoryList = ({
  categories = [] 
}) => (
  <div className='category-list-container mt-3'>
    <h5 className='font-weight-bold'>Top Categories</h5>
    <div className='category-list card-deck'>
      {categories.map(category => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </div>
  </div>
)

export default CategoryList;

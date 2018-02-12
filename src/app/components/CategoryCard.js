import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({
  category
}) => (
  <div className='card category-card'>
    <div className='card-body'>
      <h5 className='card-title font-weight-bold text-uppercase'>
        {category.name}
      </h5>
      <p className='card-text'>
        Some supporting text as a natural lead-in to additional content for {category.name}.
      </p>
      <Link className='category-link btn btn-primary' to={category.path}>
        {category.name}
      </Link>
    </div>
  </div>
)

export default CategoryCard

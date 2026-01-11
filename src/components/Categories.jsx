import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch('/categories.json')
    .then(response => response.json());
const Categories = () => {

    const category = use(categoryPromise);
    return (
        <div>
            <h1>All Categories({category.length}) </h1>
            <div className='grid grid-cols-1 gap-3'>
                {category.map(showCategory => <NavLink className='list-none text-accent 
                p-3 hover:underline border-0 hover:bg-base-200 w-auto font-semibold rounded-lg ' to={`/category/${showCategory.id}`} key={showCategory.id}>{showCategory.name}</NavLink>)}
            </div>
        </div>
    );
};

export default Categories;
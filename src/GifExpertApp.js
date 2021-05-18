import React, { useState } from 'react'

import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setCategories] = useState(['One Punch'])

    /* const handledAdd = () => {
        // We have to return a new array in the state, not modify the current state
        // setCategories( [...categories, 'HunterXHunter'] )
        // || OR
        // setCategories( cats => [...categories, 'HunterXHunter'] )

    } */
    console.log(categories);
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            {
                categories.map( (category, i) => (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </>
    )
}
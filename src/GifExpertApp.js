import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [ categories, setCategories ] = useState([ 'One Puch Man' ]);
    // const handAdd = () => {
    //     setCategories( cats => [ ...cats, 'Death Note' ] );
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            {/* <button onClick={ handAdd }>Agregar</button> */}
            <ol>
                { 
                    categories.map( category => (
                        <GifGrid key={ category } category={ category } />
                    ))
                }
            </ol>
        </>
    )
}

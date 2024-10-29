'use client';
import React from 'react'
import { Button } from '../../common/Buttons'

function ItemList() {

    const [quickFilterSelected, setQuickFilterSelected] = React.useState(0)

    const quickFilters = [{
        label: "Cantina 1"
    },
    {
        label: "Cantina 2"
    },
    {
        label: "Cantina 3"
    }]

    return (
        <section className='px-16 h-48 my-8'>
            <h1>Ver Itens</h1>
            {quickFilters.map((item, index) =>
                <Button
                    className={`ml-2 ${quickFilterSelected !== index && 'text-black bg-lightGray hover:text-background'}`}
                    onClick={() => {
                        console.log(item, index)
                        setQuickFilterSelected(index)
                    }}
                    key={`quick-filters-${index}`} label={item.label} />)}
        </section>
    )
}

export default ItemList
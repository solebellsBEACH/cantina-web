'use client';
import React from 'react'
import { Button } from '../../common/Buttons'
import ProductItem from '../ProductItem';

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

    const itens = [{}, {}, {}, {}, {}, {}, {}, {}, {}]

    return (
        <section className='px-16 h-48 my-8'>
            <h1 className='mb-4'>Ver Itens</h1>
            {quickFilters.map((item, index) =>
                <Button
                    className={`mr-2 ${quickFilterSelected !== index && 'text-black bg-lightGray hover:text-background'}`}
                    onClick={() => {
                        console.log(item, index)
                        setQuickFilterSelected(index)
                    }}
                    key={`quick-filters-${index}`} label={item.label} />)}
            <div className='grid grid-cols-4 gap-4 mt-5'>
                {
                    itens.map((item, index) => <ProductItem key={`product-itens-${index}`} />)
                }
            </div>
        </section>
    )
}

export default ItemList
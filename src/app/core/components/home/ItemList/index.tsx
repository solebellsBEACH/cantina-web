'use client';
import React, { useEffect } from 'react'
import { Button } from '../../common/Buttons'
import ProductItem from '../ProductItem';
import { fetchProducts } from '@/app/core/store/reducers/products';
import { useAppDispatch, useAppSelector } from '@/app/core/store/hooks';

function ItemList() {

    const dispatch = useAppDispatch();
    const { products, loading, error, } = useAppSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProducts({ page: 1, limit: 10 }));
        console.log(products)
    }, [dispatch]);

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
            {loading && <p>Carregando...</p>}
            {error && <p>Erro: {error}</p>}

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
                    (products || []).map((item, index) => <ProductItem key={`product-itens-${index}`} data={item} />)
                }
            </div>
        </section>
    )
}

export default ItemList
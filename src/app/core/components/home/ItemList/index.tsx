'use client';
import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';
import { fetchProducts } from '@/app/core/store/reducers/products';
import { useAppDispatch, useAppSelector } from '@/app/core/store/hooks';

function ItemList() {
    const dispatch = useAppDispatch();
    const { products, loading, error, totalPages } = useAppSelector(state => state.products);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);

    useEffect(() => {
        console.log(products)
        dispatch(fetchProducts({ page: currentPage, limit: itemsPerPage }));
    }, [dispatch, currentPage]);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    return (
        <section className='px-16 h-48 my-8'>
            {loading && <p>Carregando...</p>}
            {error && <p>Erro: {error}</p>}

            <h1 className='mb-4'>Ver Itens</h1>

            <div className='grid grid-cols-4 gap-4 mt-5'>
                {(products || []).map((item, index) => (
                    <ProductItem key={`product-items-${index}`} data={item} />
                ))}
            </div>

            <div className="flex justify-center items-center my-8">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="mr-4 px-4 py-2 bg-gray-200 text-black hover:bg-gray-300"
                >
                    Anterior
                </button>
                <span className="px-4">{currentPage}</span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={handleNextPage}
                    className="ml-4 px-4 py-2 bg-gray-200 text-black hover:bg-gray-300"
                >
                    Próximo
                </button>
            </div>
        </section>
    );
}

export default ItemList;


{/* {quickFilters.map((item, index) =>
                <Button
                    className={`mr-2 ${quickFilterSelected !== index && 'text-black bg-lightGray hover:text-background'}`}
                    onClick={() => {
                        console.log(item, index)
                        setQuickFilterSelected(index)
                    }}
                    key={`quick-filters-${index}`} label={item.label} />)} */}
import React from 'react'
import { faker } from '@faker-js/faker';

function DescriptionContent() {
    return (
        <section className='px-16 h-48 my-8'>
            <h3 className='font-semibold text-primary'>Cantina Web</h3>
            <h1>
                Fuja das filas <br />
                Compre seu lanche pelo site
            </h1>
            <p>{faker.lorem.words(30)}</p>
        </section>
    )
}

export default DescriptionContent;
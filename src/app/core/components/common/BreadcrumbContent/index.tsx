import React from 'react'
import './style.css'

interface LibBreadcrumbContent {
    children: React.ReactElement;
}

function BreadcrumbContent({ children }: LibBreadcrumbContent) {
    const breadCrumbData = [{ label: 'Home', href: '/' }, { label: 'Cantina 1', href: '/cantina/id' }, { label: 'Produto 1', href: '/Produto/id' }]
    return (
        <section className='bg-white h-full p-5 rounded shadow-sm content'>
            <ol className="flex items-center whitespace-nowrap">
                {breadCrumbData.map((item, index) => <li
                    key={`breadCrumb-item-${index}`}
                    className="inline-flex items-center">
                    <a className="flex items-center hover:text-lg" href={item?.href}>
                        {item.label}
                    </a>
                    {index !== breadCrumbData.length - 1 && <svg className="shrink-0 size-5 text-gray-400 dark:text-neutral-600 mx-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M6 13L10 3" stroke="currentColor" strokeLinecap="round"></path>
                    </svg>}

                </li>)}
            </ol>
            <section className='mt-3'>
                {children}
            </section>
        </section>
    )
}

export default BreadcrumbContent
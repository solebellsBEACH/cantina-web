import Link from "next/link"

const ProductItem = () => {
    return <Link href="/product" className='h-full rounded-xl border shadow-sm bg-white m-2 hover:m-0'>
        <img className="h-100 rounded-t-xl w-full" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image" />
        <div className="flex justify-between pt-4 px-2">
            <div>
                <h3 className="text-lg font-bold mr-4 text-gray-800">
                    Coxinha
                </h3>
                <p className="text-sm text-gray-500 dark:text-neutral-400">
                    Cantina 1
                </p>
            </div>
            <h4>R$ 5,00</h4>
        </div>
    </Link>
}

export default ProductItem
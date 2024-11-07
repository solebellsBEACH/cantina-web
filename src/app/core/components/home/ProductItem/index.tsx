import { useAppDispatch } from "@/app/core/store/hooks";
import { Button } from "../../common/Buttons"
import { applicationActions } from "@/app/core/store/slices/application";
import { Product } from "@/app/core/services/api/products";

const ProductItem = ({ data }: { data: Product }) => {

    const dispatch = useAppDispatch();

    const handleBuyButton = () => { dispatch(applicationActions.setModalState()); }

    return <div className='h-full rounded-xl border shadow-sm bg-white m-2 hover:m-0'>
        <img className="h-100 rounded-t-xl w-full" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image" />
        <div className="px-2">
            <div className="flex justify-between py-4">
                <div>
                    <h3 className="text-lg font-bold text-gray-800">
                        {data.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-neutral-400">
                        Cantina {data.establishmentId}
                    </p>
                </div>
                <h4>{data.price}</h4>
            </div>
            <Button label="Comprar" className="w-full justify-center flex" onClick={handleBuyButton} />
        </div>
    </div>
}

export default ProductItem
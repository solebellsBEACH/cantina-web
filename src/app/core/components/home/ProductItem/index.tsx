import { useAppDispatch } from "@/app/core/store/hooks";
import { Button } from "../../common/Buttons"
import { applicationActions } from "@/app/core/store/slices/application";
import { Product } from "@/app/core/services/api/products";

const ProductItem = ({ data }: { data: Product }) => {

    const dispatch = useAppDispatch();

    const handleBuyButton = () => {

        dispatch(applicationActions.openModal(data));
    }

    return <div className='h-full rounded-xl border shadow-sm bg-white m-2 hover:m-0'>
        <img className="h-100 rounded-t-xl w-full" alt="Card Image" src={data.image_url} />
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
            <Button label="Selecionar" className="w-full justify-center flex" onClick={handleBuyButton} />
        </div>
    </div>
}

export default ProductItem
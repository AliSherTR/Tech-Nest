import { useQuery } from "react-query";
import AdminProductRow from "../../ui/AdminProductRow";
import LoadingIndicator from "../../ui/LoadingIndicator";
import { getAllProducts } from "../../utils/helpers";

export default function Products() {
    const { isLoading, data: products } = useQuery({
        queryKey: ["products"],
        queryFn: getAllProducts,
    });
    console.log(products);

    if (isLoading) return <LoadingIndicator />;
    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="flex justify-between w-full min-w-full p-3 bg-white gap-3 mt-4 rounded-xl">
                    <h5 className="font-bold text-center font-sans">Image</h5>
                    <h5 className="flex-1 text-center font-bold font-sans">
                        Name
                    </h5>
                    <h5 className="flex-1 font-bold text-center font-sans">
                        Remaining Stock
                    </h5>
                    <h5 className="flex-1 font-bold text-center font-sans">
                        Owner Name
                    </h5>

                    <h5 className="flex-1 font-bold text-center font-sans">
                        Edit
                    </h5>
                </div>
                {products?.map((product) => {
                    return (
                        <AdminProductRow
                            id={product._id}
                            name={product.name}
                            key={product._id}
                            quantity={product.quantity}
                            imageUrl={`http://localhost:8000/${product.image}`}
                            ownerName={product.owner.name}
                        />
                    );
                })}
            </div>
        </>
    );
}

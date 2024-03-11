import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import AdminProductRow from "../../ui/AdminProductRow";
import LoadingIndicator from "../../ui/LoadingIndicator";
import { deleteProduct, getAllProducts } from "../../utils/helpers";
import { useAuth } from "../../context/authContext";

export default function DeleteProductsPage() {
    const queryClient = useQueryClient();
    const { state } = useAuth();
    const { isLoading, data: products } = useQuery({
        queryKey: ["products"],
        queryFn: getAllProducts,
    });
    const { isLoading: isDeleting, mutate } = useMutation({
        mutationFn: (id) => deleteProduct(id),
        onSuccess: () => {
            queryClient.invalidateQueries("products");
            toast.success("Product Deleted Successfully");
        },
    });
    if (isLoading) return <LoadingIndicator />;
    if (isDeleting) return <LoadingIndicator />;
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
                        Delete
                    </h5>
                </div>
                {products?.map((product) => {
                    return (
                        <AdminProductRow
                            isDeleting={true}
                            id={product._id}
                            name={product.name}
                            key={product._id}
                            quantity={product.quantity}
                            imageUrl={`http://localhost:8000/${product.image}`}
                            deleteHandler={() => mutate(product._id)}
                            ownerName={state.user.username}
                        />
                    );
                })}
            </div>
        </>
    );
}

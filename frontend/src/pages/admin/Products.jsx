import { useMutation, useQuery } from "react-query";
import AdminProductRow from "../../ui/AdminProductRow";
import AdminAddBtn from "../../ui/AdminAddBtn";
import LoadingIndicator from "../../ui/LoadingIndicator";
import { deleteProduct, getAllProducts } from "../../utils/helpers";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { IoClose } from "react-icons/io5";

export default function Products() {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        brand: "",
        description: "",
        price: "",
        specifications: [],
        images: [],
        stock: "",
    });
    const handleFileChange = (e) => {
        const selectedFile = e.target.files;
        if (selectedFile) {
            setFormData((prevData) => ({
                ...prevData,
                images: [...prevData.images, ...selectedFile],
            }));
        }
    };
    const { isLoading, data: products } = useQuery({
        queryKey: ["products"],
        queryFn: getAllProducts,
    });

    const { isLoading: isDeleting, mutate } = useMutation({
        mutationFn: (id) => deleteProduct(id),
        onSuccess: () => {
            toast.success("Product Deleted Successfully");
        },
    });

    const { isLoading: isCreating, mutate: createProduct } = useMutation({
        mutationFn: async () => {
            axios.post("http://localhost:8000/api/products/add", formData);
        },
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        createProduct();
        console.log(formData);
    };

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
                        Stock
                    </h5>
                    <h5 className="flex-1 font-bold text-center font-sans">
                        Owner Name
                    </h5>
                    <h5 className="flex-1 font-bold text-center font-sans">
                        Delete Or Update
                    </h5>
                </div>
                {products?.map((product) => {
                    return (
                        <AdminProductRow
                            id={product._id}
                            name={product.name}
                            key={product._id}
                            stock={product.stock}
                            imageUrl={product.images[0]}
                            deleteHandler={() => mutate(product._id)}
                            updateHandler={() => alert("Update")}
                        />
                    );
                })}

                <div className=" self-end mb-6">
                    <AdminAddBtn
                        text={"Add a product"}
                        onclick={() => setShowForm(!showForm)}
                    />
                </div>
            </div>
            {showForm && (
                <div className="h-screen flex items-center bg-slate-100 justify-center modal-background">
                    <form
                        className="flex flex-col gap-1 px-3 py-2  max-w-2xl m-auto  bg-white rounded-lg"
                        encType="multipart/form-data"
                    >
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setShowForm(!showForm);
                            }}
                            className=" text-black top-0 self-end"
                        >
                            <IoClose size={"22px"} />
                        </button>

                        <h1 className=" text-lg text-center font-bold mb-3">
                            Add Product Details
                        </h1>
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Product Name"
                                className="w-full auth-input-box"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Brand"
                                className="w-full auth-input-box"
                                value={formData.brand}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        brand: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Description"
                                className="w-full auth-input-box"
                                value={formData.description}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        description: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="flex-1">
                            <input
                                type="number"
                                placeholder="Price"
                                className="w-full auth-input-box"
                                value={formData.price}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        price: e.target.value * 1,
                                    })
                                }
                            />
                        </div>
                        <div className="flex-1 flex items-center flex-wrap">
                            <input
                                type="text"
                                placeholder="Ram (optional)"
                                className="w-full auth-input-box"
                                value={formData.specifications.ram}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        specifications: {
                                            ...formData.specifications,
                                            ram: e.target.value,
                                        },
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Processor (optional)"
                                className="w-full auth-input-box"
                                value={formData.specifications.processor}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        specifications: {
                                            ...formData.specifications,
                                            processor: e.target.value,
                                        },
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Storage (optional)"
                                className="w-full auth-input-box"
                                value={formData.specifications.storage}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        specifications: {
                                            ...formData.specifications,
                                            storage: e.target.value,
                                        },
                                    })
                                }
                            />
                            <input
                                type="text"
                                placeholder="Screen Size (optional)"
                                className="w-full auth-input-box"
                                value={formData.specifications.screenSize}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        specifications: {
                                            ...formData.specifications,
                                            screenSize: e.target.value,
                                        },
                                    })
                                }
                            />
                        </div>
                        <h2>Select Images</h2>
                        <div className="flex-1">
                            <input
                                type="file"
                                className="w-full"
                                onChange={handleFileChange}
                            />
                            <input
                                type="file"
                                className="w-full"
                                onChange={handleFileChange}
                            />
                            <input
                                type="file"
                                className="w-full"
                                onChange={handleFileChange}
                            />
                            <input
                                type="file"
                                className="w-full"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="flex-1">
                            <input
                                type="number"
                                placeholder="Stock"
                                className="w-full auth-input-box"
                                value={formData.stock}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,

                                        stock: e.target.value * 1,
                                    })
                                }
                            />
                        </div>
                        <AdminAddBtn text={"Add"} onclick={handleFormSubmit} />
                    </form>
                </div>
            )}
        </>
    );
}

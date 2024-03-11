import axios from "axios";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import AdminAddBtn from "../../ui/AdminAddBtn";
import toast from "react-hot-toast";
import { useAuth } from "../../context/authContext";

export default function AddProductsPage() {
    const queryClient = useQueryClient();
    const { state } = useAuth();
    const [formData, setFormData] = useState({
        name: "",
        brand: "",
        description: "",
        price: 0,
        category: "",
        discountPrice: 0,
        image: null,
        quantity: "",
    });
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFormData((prevData) => ({
                ...prevData,
                image: selectedFile,
            }));
        }
    };
    const { mutate: createProduct } = useMutation({
        mutationFn: (formData) => {
            return axios.post(
                "http://localhost:8000/api/products/add",
                formData
            );
        },
        onSuccess: () => {
            queryClient.invalidateQueries("products");
            toast.success("Product added successfully");
        },
        onError: () => {
            toast.error("An error occured. Please try again");
        },
    });

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("price", formData.price);
        formDataToSend.append("description", formData.description);
        formDataToSend.append("brand", formData.brand);
        formDataToSend.append("quantity", formData.quantity);
        formDataToSend.append("category", formData.category);
        formDataToSend.append("file", formData.image); // 'file' should match the multer field name
        formDataToSend.append("userId", state.user.id);
        formDataToSend.append("userName", state.user.username);

        createProduct(formDataToSend);
        setFormData({
            name: "",
            brand: "",
            description: "",
            price: 0,
            category: "",
            discountPrice: 0,
            image: null,
            quantity: "",
        });
    };
    return (
        <div className="">
            <h1 className=" text-xl mt-4 font-bold mb-3">
                Add Product Details
            </h1>
            <form encType="multipart/form-data">
                <div className=" flex items-start gap-2">
                    <div className="flex-1">
                        <div className="px-2 py-3 bg-white rounded-md mb-2">
                            <h1 className=" font-bold mb-5">Description</h1>
                            <div>
                                <label htmlFor="product_name">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    id="product_name"
                                    className=" block mt-2 px-3 py-3 min-w-full rounded-md border"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div>
                                <label htmlFor="product_brand">
                                    Brand Name
                                </label>
                                <input
                                    type="text"
                                    id="product_brand"
                                    className=" block mt-2 px-3 py-3 min-w-full rounded-md border"
                                    value={formData.brand}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            brand: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex-1  px-2 py-3 bg-white rounded-md col-start-1 col-end-">
                            <h1 className=" font-bold mb-5">Description</h1>
                            <label htmlFor="product_desc">
                                Product Details
                            </label>
                            <textarea
                                id="product_desc"
                                className=" block mt-2 px-3 py-3  min-w-full rounded-md border"
                                rows={10}
                                value={formData.description}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        description: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>

                    <div className=" flex-1 px-2 py-3 bg-white rounded-md row-span-full row-end-12 col-start-2 col-end-2 ">
                        <div className=" mb-5">
                            <h1 className=" font-bold mb-5">Image</h1>
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900"
                                htmlFor="multiple_files"
                            >
                                Product Image
                            </label>
                            <input
                                type="file"
                                className="block py-3 px-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:border-gray-600 dark:placeholder-gray-400"
                                id="multiple_files"
                                onChange={handleFileChange}
                                name="file"
                            />
                        </div>
                        <div>
                            <h1 className=" font-bold mb-5">Category</h1>
                            <div className=" mb-3">
                                <label htmlFor="product_category">
                                    Product category
                                </label>
                                <select
                                    type="text"
                                    id="product_category"
                                    className=" block mt-2 px-3 py-3 min-w-full rounded-md border"
                                    value={formData.category}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            category: e.target.value,
                                        })
                                    }
                                >
                                    <option value="" selected></option>
                                    <option value="mobile">Mobile</option>
                                    <option value="laptop">Laptop</option>
                                    <option value="tablet">Tablets</option>
                                    <option value="audio">Audio</option>
                                    <option value="camera">Camera</option>
                                    <option value="watches">
                                        Smart Watches
                                    </option>
                                    <option value="other">Others</option>
                                </select>
                            </div>

                            <div className=" mb-3 flex gap-3 ">
                                <div className=" flex-1">
                                    <label htmlFor="product_price">
                                        Base Price
                                    </label>
                                    <input
                                        type="Number"
                                        id="product_price"
                                        className=" block mt-2 px-3 py-3 min-w-full rounded-md border"
                                        value={formData.price}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                price: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className=" flex-1">
                                    <label htmlFor="product_discount">
                                        Discount Price
                                    </label>
                                    <input
                                        type="number"
                                        id="product_discount"
                                        className=" block mt-2 px-3 py-3 min-w-full rounded-md border"
                                        value={formData.discountPrice}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                discountPrice: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div className=" mb-3">
                                <label htmlFor="product_qty">
                                    Total Quantity
                                </label>
                                <input
                                    type="Number"
                                    id="product_qty"
                                    className="block mt-2 px-3 py-3 min-w-full rounded-md border"
                                    value={formData.quantity}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            quantity: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <AdminAddBtn
                                text={"Add"}
                                onclick={handleFormSubmit}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

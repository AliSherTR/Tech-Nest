import axios from "axios";
import { useState } from "react";
import { useMutation } from "react-query";
import AdminAddBtn from "../../ui/AdminAddBtn";

export default function AddProductsPage() {
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
    const { mutate: createProduct } = useMutation({
        mutationFn: async () => {
            axios.post("http://localhost:8000/api/products/add", formData);
        },
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        createProduct();
        console.log(formData);
    };
    return (
        <div className="">
            <h1 className=" text-xl mt-4 font-bold mb-3">
                Add Product Details
            </h1>
            {/* <form className="flex flex-col gap-1" encType="multipart/form-data"> */}
            <form encType="multipart/form-data">
                <div className=" flex gap-3 justify-between mb-5">
                    <div className="flex-1 px-2 py-3 bg-white rounded-md self-start ">
                        <h1 className=" font-bold mb-5">Description</h1>
                        <div>
                            <label htmlFor="product_name">Product Name</label>
                            <input
                                type="text"
                                id="product_name"
                                className=" block mt-2 px-3 py-3 min-w-full rounded-md border  "
                            />
                        </div>
                        <div>
                            <label htmlFor="product_brand">Brand Name</label>
                            <input
                                type="text"
                                id="product_brand"
                                className=" block mt-2 px-3 py-3 min-w-full rounded-md border  "
                            />
                        </div>
                    </div>
                    <div className="flex-1 px-2 py-3 bg-white rounded-md ">
                        <h1 className=" font-bold mb-5">Description</h1>
                        <label htmlFor="product_desc">Product Details</label>
                        <textarea
                            id="product_desc"
                            className=" block mt-2 px-3 py-3 min-w-full rounded-md border   "
                            rows={8}
                        />
                    </div>
                </div>
                <div className=" flex gap-3 justify-between mb-5">
                    <div className="flex-1 px-2 py-3 bg-white rounded-md self-start ">
                        <h1 className=" font-bold mb-5">Category</h1>
                        <div>
                            <label htmlFor="product_name">
                                Product category
                            </label>
                            <select
                                type="text"
                                id="product_name"
                                className=" block mt-2 px-3 py-3 min-w-full rounded-md border  "
                            />
                        </div>
                    </div>
                    <div className="flex-1 px-2 py-3 bg-white rounded-md ">
                        <h1 className=" font-bold mb-5">Description</h1>
                        <label htmlFor="product_desc">Product Details</label>
                        <textarea
                            id="product_desc"
                            className=" block mt-2 px-3 py-3 min-w-full rounded-md border   "
                            rows={8}
                        />
                    </div>
                </div>

                {/* <div className="flex gap-2">
                    <h1 className=" font-semibold text-lg">Description</h1>
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
                <AdminAddBtn text={"Add"} onclick={handleFormSubmit} /> */}
            </form>
        </div>
    );
}

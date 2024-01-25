import { HiClipboardList, HiOutlineTrash } from "react-icons/hi";

export default function AdminProductRow({
    id,
    name,
    imageUrl,
    stock,
    deleteHandler,
    updateHandler,
}) {
    return (
        <div className=" flex justify-between items-center w-full min-w-full p-3 bg-white gap-5 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                <img
                    src={imageUrl}
                    className=" object-cover h-full w-full"
                    alt={name}
                />
            </div>

            <h5 className=" flex-1 text-center font-sans">{name}</h5>
            <h5 className=" flex-1 text-center  font-sans">{stock}</h5>
            <h5 className=" flex-1 text-center  font-sans">Ali sher Khan</h5>
            <div className="flex-1 flex gap-4 text-lg justify-center">
                <button onClick={deleteHandler}>
                    <HiOutlineTrash color="red" size={"23"} />
                </button>
                <button onClick={updateHandler}>
                    <HiClipboardList color="green" size={"23"} />
                </button>
            </div>
        </div>
    );
}

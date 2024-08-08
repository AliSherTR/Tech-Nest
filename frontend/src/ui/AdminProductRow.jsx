import { HiOutlineTrash } from "react-icons/hi";
import { HiOutlinePencil } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function AdminProductRow({
    id,
    isDeleting,
    name,
    imageUrl,
    quantity,
    deleteHandler,
    ownerName,
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
            <h5 className=" flex-1 text-center  font-sans">{quantity}</h5>
            <h5 className=" flex-1 text-center  font-sans">{ownerName}</h5>

            <div className="flex-1 flex gap-4 text-lg justify-center">
                {isDeleting ? (
                    <button onClick={deleteHandler}>
                        <HiOutlineTrash color="red" size={"23"} />
                    </button>
                ) : (
                    <Link to={`update/${id}`}>
                        <HiOutlinePencil color="green" size={"23"} />
                    </Link>
                )}
            </div>
        </div>
    );
}

import { HiClipboardList, HiOutlineTrash } from "react-icons/hi";
export default function AdminTableRow({
    imageURl = null,
    name,
    email,
    role,
    deleteHandler,
    updateHandler,
}) {
    return (
        <div>
            <div className=" flex justify-between items-center w-full min-w-full text-center p-3 bg-white gap-5 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-gray-300">
                    <img src={imageURl} className=" w-full " />
                </div>

                <h5 className=" flex-1  font-sans">{name}</h5>
                <h5 className=" flex-1  font-sans">{email}</h5>
                <h5 className=" flex-1  font-sans">{role}</h5>
                <div className="flex-1 flex gap-4 text-lg justify-center">
                    <button onClick={deleteHandler}>
                        <HiOutlineTrash color="red" size={"23"} />
                    </button>
                    <button onClick={updateHandler}>
                        <HiClipboardList color="green" size={"23"} />
                    </button>
                </div>
            </div>
        </div>
    );
}

import { useQuery } from "react-query";
import AdminTableRow from "../../ui/AdminTableRow";
import { getAllUsers } from "../../utils/helpers";
import toast from "react-hot-toast";

export default function Users() {
    const { isLoading, data } = useQuery({
        queryKey: ["users"],
        queryFn: getAllUsers,
        onError: () => {
            toast.error("Error getting users");
        },
    });

    if (isLoading) return <p>Loading......</p>;

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between w-full min-w-full p-3 bg-white gap-3 mt-4 rounded-xl">
                <h5 className="font-bold font-sans">Image</h5>
                <h5 className="flex-1 font-bold font-sans">Name</h5>
                <h5 className="flex-1 font-bold font-sans">Email</h5>
                <h5 className="flex-1 font-bold font-sans">Role</h5>
                <h5 className="flex-1 font-bold font-sans">Delete Or Update</h5>
            </div>

            {data.map((user) => (
                <AdminTableRow
                    key={user._id} // Add a unique key for each element in the map
                    name={user?.username}
                    email={user.email}
                    deleteHandler={() => alert("Delete")}
                    role={"Admin"}
                    updateHandler={() => alert("Update")}
                />
            ))}

            <button className="self-end px-2 py-1 bg-green-400 text-white text-base rounded-lg">
                Add User
            </button>
        </div>
    );
}

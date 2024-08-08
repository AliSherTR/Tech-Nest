import { useQuery } from "react-query";
import AdminTableRow from "../../ui/AdminTableRow";
import { getAllUsers } from "../../utils/helpers";
import toast from "react-hot-toast";
import AdminAddBtn from "../../ui/AdminAddBtn";
import LoadingIndicator from "../../ui/LoadingIndicator";

export default function Users() {
    const { isLoading, data } = useQuery({
        queryKey: ["users"],
        queryFn: getAllUsers,
        onError: () => {
            toast.error("Error getting users");
        },
    });

    if (isLoading) return <LoadingIndicator />;

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between w-full min-w-full p-3 bg-white gap-3 mt-4 rounded-xl text-center">
                <h5 className="font-bold font-sans">Image</h5>
                <h5 className="flex-1 font-bold font-sans">Name</h5>
                <h5 className="flex-1 font-bold font-sans">Email</h5>
                <h5 className="flex-1 font-bold font-sans">Role</h5>
                <h5 className="flex-1 font-bold font-sans">Delete Or Update</h5>
            </div>

            {data?.map((user) => (
                <AdminTableRow
                    key={user._id} // Add a unique key for each element in the map
                    name={user?.username}
                    email={user.email}
                    deleteHandler={() => alert("Delete")}
                    role={user.role}
                    updateHandler={() => alert("Update")}
                />
            ))}

            <div className="self-end">
                <AdminAddBtn
                    text={"Add User"}
                    onclick={() => alert("Add Product")}
                />
            </div>
        </div>
    );
}

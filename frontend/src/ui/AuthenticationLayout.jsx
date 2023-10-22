import { Link, Outlet } from "react-router-dom";

export default function AuthenticationLayout() {
    return (
        <div className="h-screen flex gap-40 flex-col">
            <div className="flex justify-center items-center">
                <Link
                    to="/welcome"
                    className="font-semibold font-montserrat text-2xl uppercase cursor-pointer "
                >
                    Tech Nest
                </Link>
            </div>
            <Outlet />
        </div>
    );
}

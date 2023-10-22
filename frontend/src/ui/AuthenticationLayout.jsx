import { Outlet } from "react-router-dom";

export default function AuthenticationLayout() {
    return (
        <div className="">
            <Outlet />
        </div>
    );
}

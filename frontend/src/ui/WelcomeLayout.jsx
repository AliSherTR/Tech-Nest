import { Outlet } from "react-router-dom";

export default function WelcomeLayout() {
    return (
        <div>
            Logo
            <main>
                <Outlet />
            </main>
        </div>
    );
}

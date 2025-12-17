import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./pages/default-layout.tsx";
import { Home } from "./pages/home";
import { User } from "./pages/user";
import { Blog } from "./pages/blog";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/:user" element={<User />} />
                <Route path="/:user/:blog" element={<Blog />} />
            </Route>
        </Routes>
    )
}
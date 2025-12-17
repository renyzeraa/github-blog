import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./pages/default-layout.tsx";
import { Home } from "./pages/home";
import { User } from "./pages/blog/index.tsx";
import { Issue } from "./pages/issue.tsx";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/:user" element={<User />} />
                <Route path="/:user/:issue" element={<Issue />} />
            </Route>
        </Routes>
    )
}
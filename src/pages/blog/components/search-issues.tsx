import { api } from "@/lib/axios";
import { useUserStore } from "@/store/user";
import { formatIssueResponse } from "@/utils/formater";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useShallow } from "zustand/shallow";
import { CardIssue } from "./card-issue";

export function SearchIssues() {
    const { user, issues, setIssues } = useUserStore(useShallow((state) => ({
        user: state.user,
        issues: state.issues,
        setIssues: state.setIssues,
    })));

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const debounceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const fetchUserIssues = async (query: string = "") => {
        try {
            const searchQuery = query
                ? `author:${user?.login}+state:open+${query}`
                : `author:${user?.login}+state:open`;

            const response = await api.get(`/search/issues?q=${searchQuery}`);
            const { items } = response.data;

            setIssues(formatIssueResponse(items));
        } catch (error) {
            console.error("Erro ao buscar issues:", error);
        }
    };

    useEffect(() => {
        if (user?.login) {
            fetchUserIssues();
        }
        else {
            navigate("/");
        }
    }, [user?.login]);

    const handleSearchChange = (value: string) => {
        setSearchTerm(value);

        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }

        debounceTimeoutRef.current = setTimeout(() => {
            fetchUserIssues(value);
        }, 500);
    };

    return (
        <div className="max-w-275 mx-auto mt-14">
            <header>
                <div className="flex justify-between items-center">
                    <h2 className="font-bold text-xl text-base-subtitle">Publicações</h2>
                    <span className="text-sm text-base-span">{issues.length} publicações</span>
                </div>
                <div className="bg-base-input rounded-lg border border-solid border-base-border flex items-center md:min-w-80 mt-3">
                    <input
                        type="text"
                        id="q"
                        placeholder="Buscar conteúdo"
                        value={searchTerm}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className="placeholder:text-base-label text-base-title px-3 py-4 w-full focus:outline-none focus-within:shadow-none focus:shadow-none"
                    />
                </div>
            </header>
            <div className="grid grid-cols-2 gap-4 my-10">
                {user && issues.map((issue) => (
                    <CardIssue
                        issue={issue}
                        user={user}
                        key={issue.id}
                    />
                ))}
            </div>
        </div>
    )
}
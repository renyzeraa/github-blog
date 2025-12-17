import { useUserStore } from "@/store/user";
import { Building2Icon, ExternalLink, GithubIcon, Globe, UsersRound } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useShallow } from "zustand/shallow";
import { SearchIssues } from "./components/search-issues";
import { SpanLink } from "@/components/span-link";

export function User() {
    const { user } = useUserStore(useShallow((state) => ({
        user: state.user
    })));

    const navigate = useNavigate();

    useEffect(() => {
        if (!user?.login) {
            navigate("/");
        }
    }, [user?.login]);

    return (
        <main className="w-full relative z-10">
            <div className="bg-base-profile p-8 rounded-lg -mt-24 mx-auto flex gap-8 max-w-275 relative">
                <SpanLink
                    href={user?.htmlUrl || ''}
                    text="GITHUB"
                    title="Visitar perfil"
                    Icon={<ExternalLink size={16} strokeWidth="3" />}
                    className="absolute top-6 right-6"
                />
                {user?.avatarUrl && (
                    <img width={148} height={148} src={user?.avatarUrl} alt={user?.name} className="rounded-lg overflow-hidden" />
                )}
                <div className="flex flex-col">
                    <h1 className="font-bold text-3xl text-base-title">{user?.name}</h1>
                    <span className="block text-base-subtitle text-base mt-2 leading-[160%]">{user?.bio}</span>
                    <div className="mt-auto flex gap-8">
                        {user?.login && (
                            <span className="flex items-center gap-1 text-base text-base-subtitle">
                                <GithubIcon size={22} className="text-base-label" />
                                {user.login}
                            </span>
                        )}
                        {user?.company && (
                            <span className="flex items-center gap-1 text-base text-base-subtitle">
                                <Building2Icon size={22} className="text-base-label" />
                                {user.company}
                            </span>
                        )}
                        {user?.followers && (
                            <span className="flex items-center gap-1 text-base text-base-subtitle">
                                <UsersRound size={22} className="text-base-label" />
                                {user?.followers} seguidores
                            </span>
                        )}
                        {user?.blog && (
                            <span className="flex items-center gap-1 text-base text-base-subtitle">
                                <Globe size={22} className="text-base-label" />
                                <a href={user.blog} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    {user.blog}
                                </a>
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <SearchIssues />
        </main>
    )
}
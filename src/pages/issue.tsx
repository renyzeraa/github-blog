import { SpanLink } from "@/components/span-link";
import { useUserStore } from "@/store/user";
import { ExternalLink, ChevronLeft, GithubIcon, MessageCircle, Calendar } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useShallow } from "zustand/shallow";
import ReactMarkdown from "react-markdown";

export function Issue() {
    const { issues } = useUserStore(useShallow((state) => ({
        issues: state.issues
    })));
    const { issue: issueParam, user } = useParams<{ issue: string, user: string }>();

    const navigate = useNavigate();

    const issue = issues.find((issue) => String(issue.id) === issueParam);
    if (!issue || !user || !issueParam) {
        navigate("/");
        return;
    }

    return (
        <main className="w-full relative z-10 max-md:px-4">
            <div className="bg-base-profile p-8 rounded-lg -mt-24 mx-auto flex flex-col gap-4 max-w-275">
                <div className="flex justify-between items-center">
                    <Link to={`/${user}`}>
                        <SpanLink
                            title="Voltar"
                            text="VOLTAR"
                            Icon={<ChevronLeft size={16} strokeWidth="3" />}
                            className="flex-row-reverse"
                        />
                    </Link>
                    <SpanLink
                        href={issue.url}
                        title="Ver no GitHub"
                        text="VER NO GITHUB"
                        Icon={<ExternalLink size={16} strokeWidth="3" />}
                    />
                </div>
                <h1 className="font-bold text-3xl mt-5 text-base-title">{issue?.title}</h1>
                <div className="mt-2 flex gap-8">
                    {user && (
                        <span className="flex items-center gap-1 text-base text-base-subtitle">
                            <GithubIcon size={22} className="text-base-label" />
                            {user}
                        </span>
                    )}
                    {issue?.createdAt && (
                        <span className="flex items-center gap-1 text-base text-base-subtitle">
                            <Calendar size={22} className="text-base-label" />
                            {issue.createdAt}
                        </span>
                    )}
                    {Boolean(issue?.comments) && (
                        <span className="flex items-center gap-1 text-base text-base-subtitle">
                            <MessageCircle size={22} className="text-base-label" />
                            {issue.comments} comentário{issue.comments > 1 && "s"}
                        </span>
                    )}
                </div>
            </div>
            <article className="mt-16 mx-auto max-w-275 markdown">
                <div className="rounded-lg bg-base-profile py-10 px-8">
                    <ReactMarkdown children={issue?.body || ""} />
                </div>
            </article>
        </main>
    )
}
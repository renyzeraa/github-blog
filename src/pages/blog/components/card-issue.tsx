import type { GithubUser, Issues } from "@/@types/global"
import { Link } from "react-router-dom"

interface IssueProps {
    issue: Issues
    user: GithubUser
}

export function CardIssue({ issue, user }: IssueProps) {
    return (
        <Link
            to={`/${user?.login}/${issue.id}`}
            className="bg-base-post rounded-lg p-8 hover:shadow-lg transition-shadow cursor-pointer h-65 flex flex-col gap-4 hover:shadow-base-label"
        >
            <div className="flex justify-between gap-3">
                <span className="font-bold text-lg text-base-title flex-1">
                    {issue.title}
                </span>
                <span className="text-sm text-base-span">
                    {issue.createdAt}
                </span>
            </div>
            <div className="max-h-37 overflow-hidden">
                <code className="text-base text-base-text mt-2">
                    {issue.body}
                </code>
            </div>
        </Link>
    )
}
import { cn } from "@/utils/cn";

interface SpanLinkProps {
    href?: string;
    title: string;
    Icon: React.ReactElement;
    text: string;
    className?: string;
}

export function SpanLink({ href, title, Icon, text, className }: SpanLinkProps) {
    return (
        <a
            {...(href ? { href } : {})}
            target="_blank"
            rel="noopener noreferrer"
            title={title}
            className={cn("text-blue hover:opacity-80 cursor-pointer flex items-center gap-1 font-bold leading-0", className)}
        >
            {text} {Icon}
        </a>
    )
}
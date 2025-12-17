export function formatUserResponse(data: any) {
    return {
        avatarUrl: data.avatar_url,
        bio: data.bio,
        blog: data.blog,
        company: data.company,
        email: data.email,
        followers: data.followers,
        gistsUrl: data.gists_url,
        htmlUrl: data.html_url,
        id: data.id,
        location: data.location,
        login: data.login,
        name: data.name,
        publicRepos: data.public_repos,
        reposUrl: data.repos_url,
    }
}

export function formatRelativeDate(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);

    if (diffSeconds < 60) {
        return "Agora mesmo";
    } else if (diffMinutes < 60) {
        return `Há ${diffMinutes} minuto${diffMinutes > 1 ? "s" : ""}`;
    } else if (diffHours < 24) {
        return `Há ${diffHours} hora${diffHours > 1 ? "s" : ""}`;
    } else if (diffDays < 7) {
        return `Há ${diffDays} dia${diffDays > 1 ? "s" : ""}`;
    } else if (diffWeeks < 4) {
        return `Há ${diffWeeks} semana${diffWeeks > 1 ? "s" : ""}`;
    } else if (diffMonths < 12) {
        return `Há ${diffMonths} mês${diffMonths > 1 ? "es" : ""}`;
    } else {
        return `Há ${diffYears} ano${diffYears > 1 ? "s" : ""}`;
    }
}

export function formatIssueResponse(items: any) {
    return items.map((item: any) => ({
        body: item.body,
        id: item.id,
        createdAt: formatRelativeDate(item.created_at),
        comments: item.comments,
        title: item.title,
        url: item.html_url,
    }))
}
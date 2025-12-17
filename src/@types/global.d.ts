export interface GithubUser {
    avatarUrl: string
    bio: null | string
    blog: null | string
    company: null | string
    email: null | string
    followers: null | number
    gistsUrl: string
    htmlUrl: string
    id: number
    location: null | string
    login: string
    name: string
    publicRepos: null | number
    reposUrl: string
}

export interface Issues {
    body: string
    id: number
    createdAt: string
    title: string
    url: string
    comments: number
}
import { create } from 'zustand'

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

interface UserState {
    user: GithubUser | null
    setUser: (user: GithubUser) => void
}

export const useUserStore = create<UserState>((set) => ({
    user: null,
    setUser: (user) => set({ user }),
}))
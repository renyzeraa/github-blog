import type { GithubUser, Issues } from '@/@types/global'
import { create } from 'zustand'

interface UserState {
    user: GithubUser | null
    issues: Issues[]
    setUser: (user: GithubUser) => void
    setIssues: (issues: Issues[]) => void
}

export const useUserStore = create<UserState>((set) => ({
    user: null,
    issues: [],
    setUser: (user) => set({ user }),
    setIssues: (issues) => set({ issues })
}))
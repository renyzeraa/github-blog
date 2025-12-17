import { api } from "@/lib/axios";
import { useUserStore } from "@/store/user";
import { formatUserResponse } from "@/utils/formater";
import { SearchIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useShallow } from "zustand/shallow";

type SearchHomeInput = {
    username: string,
}

export function Home() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isLoading },
        setError
    } = useForm<SearchHomeInput>()

    const { setUser } = useUserStore(useShallow((state) => ({
        setUser: state.setUser,
    })));

    const usernameInput = watch("username");

    const navigate = useNavigate();

    async function handleOnSubmitGithubUser({ username }: SearchHomeInput) {
        try {
            const response = await api.get(`/users/${username}`);
            if (response && response.status === 200) {
                setUser(formatUserResponse(response.data));
                navigate(`/${username}`);
            }
        } catch (error) {
            setError("username", {
                type: "manual",
                message: "Usuário não encontrado",
            });
        }
    }

    return (
        <main className="w-full relative z-10">
            <div className="bg-base-profile p-8 rounded-lg -mt-24 mx-auto flex flex-col gap-4 max-w-275">
                <h1 className="font-bold text-3xl text-base-title text-center">Bem vindo ao Github Blog</h1>
                <span className="block text-center text-base-subtitle">Aqui você encontrará os melhores posts sobre desenvolvimento e tecnologia do seu usuário favorito do github.</span>
                <form className="p-2 flex flex-col  gap-2 justify-center w-full mx-auto" onSubmit={handleSubmit(handleOnSubmitGithubUser)}>
                    <label htmlFor="search" className="text-center">Buscar usuário do github</label>
                    <div className="flex items-center flex-wrap justify-center mx-auto gap-3">
                        <div className="bg-base-input rounded-lg border border-solid border-base-border flex items-center md:min-w-80">
                            <input
                                type="text"
                                id="search"
                                placeholder="username"
                                className="placeholder:text-base-label text-base-title px-3 py-4 w-full focus:outline-none focus-within:shadow-none focus:shadow-none"
                                {...register("username", { required: true })}
                            />
                        </div>
                        <button type="submit" title={usernameInput ? "buscar usuário" : "digite nome do usuário para pesquisar"} className="bg-gray-700 hover:bg-gray-500 transition-colors cursor-pointer flex items-center gap-2 p-4 rounded-lg disabled:cursor-not-allowed disabled:bg-gray-800" disabled={!usernameInput || isLoading}>
                            <SearchIcon size={24} />
                            Buscar
                        </button>
                        {errors.username && (
                            <span className="text-sm text-red-500 font-bold block w-full text-center">{errors.username.message}</span>
                        )}
                    </div>
                </form>
            </div>
        </main>
    )
}
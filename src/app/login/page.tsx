"use client"
import { useEffect, useState } from "react";
import { LibComponents } from "../core/components";
import { useAppDispatch } from "../core/store/hooks";
import { fetchUser } from "../core/store/reducers/user";
import { useRouter } from "next/navigation";
import { LocalStorageUtils } from "../core/shared/utils/localStorage";

export default function Login() {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState<string>('');

    const router = useRouter()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email:', email);
        dispatch(fetchUser({ email }));

        const user = LocalStorageUtils.getUser()
        if (user) router.push('/');
    };

    useEffect(() => {
        const user = LocalStorageUtils.getUser()
        if (user) router.push('/');
    }, [])

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <section className="py-10 px-10 rounded bg-white">
                <h2>Digite seu email</h2>
                <form onSubmit={handleLogin} className="flex flex-col gap-4 mt-4">
                    <LibComponents.CommonComponents.Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    {email.length >= 4 && <LibComponents.CommonComponents.Button label="Entrar" className="flex justify-center" onClick={handleLogin} />}
                </form>
            </section>
        </div>
    );
}

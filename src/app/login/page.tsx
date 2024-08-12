"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            redirect: true, // Redireciona automaticamente após o login
            email,
            password,
            callbackUrl: '/dashboard' // Redireciona para o dashboard após o login
        });
    
        // Aqui você pode adicionar uma lógica para tratar o erro de autenticação, se necessário
        if (result?.error) {
            console.error('Erro de login:', result.error);
        }
    };
    

    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-balance text-muted-foreground">Entre com seu e-mail</p>
                    </div>
                    <form onSubmit={handleSubmit} className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">E-mail</Label>
                            <Input 
                                id="email"
                                type="email"
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Senha</Label>
                            <Input 
                                id="password"
                                type="password"
                                placeholder="Digite sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full">Login</Button>
                    </form>
                </div>
            </div>
            <div className="hidden bg-muted lg:block relative">
                <Image 
                    src="/img/bg-full.png"
                    alt="login-bg"
                    width={1920}
                    height={1080}
                    className="h-screen w-full object-cover object-center"
                />
                <div className="flex flex-col items-center justify-center absolute inset-0">
                    <p className="text-white text-2xl">Faça login para aproveitar</p>
                </div>
            </div>
        </div>
    );
}

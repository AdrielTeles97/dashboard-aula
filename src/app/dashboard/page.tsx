import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route"; // Certifique-se de que o caminho esteja correto
import { SalesChart } from "@/components/chart";
import { Sales } from "@/components/sales";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, DollarSign, Percent, User2 } from "lucide-react";

export default async function Dashboard() {
    // Obtém a sessão do servidor
    const session = await getServerSession(authOptions);

    if (!session) {
        // Se não estiver autenticado, redireciona para a página de login
        return (
            <div>
                <p>Você precisa estar logado para ver esta página.</p>
            </div>
        );
    }

    return (
        <>
            <main className="sm:ml-14 p-4">
                <section className="mb-4">
                    <h2 className="text-2xl font-bold">Bem-vindo, {session.user?.email}!</h2>
                </section>
                <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-center">
                                <CardTitle className="text-lg sm:text-xl text-gray-400 select-none">
                                    Total Vendas
                                </CardTitle>
                                <DollarSign className="ml-auto w-4 h-4" />
                            </div>
                            <CardDescription>Total de vendas em 90 dias</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="font-semibold text-xl sm:text-lg">R$ 40.000</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-center">
                                <CardTitle className="text-lg sm:text-xl text-gray-400 select-none">
                                    Novos clientes
                                </CardTitle>
                                <User2 className="ml-auto w-4 h-4" />
                            </div>
                            <CardDescription>Novos clientes em 30 dias</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="font-semibold text-xl sm:text-lg">450</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-center">
                                <CardTitle className="text-lg sm:text-xl text-gray-400 select-none">
                                    Pedidos Hoje
                                </CardTitle>
                                <Percent className="ml-auto w-4 h-4" />
                            </div>
                            <CardDescription>Total de pedidos hoje</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="font-semibold text-xl sm:text-lg">45</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-center">
                                <CardTitle className="text-lg sm:text-xl text-gray-400 select-none">
                                    Total pedidos
                                </CardTitle>
                                <BadgeDollarSign className="ml-auto w-4 h-4" />
                            </div>
                            <CardDescription>Total de pedidos em 30 dias</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="font-semibold text-xl sm:text-lg">R$ 2300</p>
                        </CardContent>
                    </Card>
                </section>
                <section className="mt-4 flex flex-col md:flex-row gap-4">
                    <SalesChart />
                    <Sales />
                </section>
            </main>
        </>
    );
}

import { CircleDollarSign } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export const Sales = () => {
    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg text-gray-400 sm:text-xl">Últimos Clientes</CardTitle>
                    <CircleDollarSign className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>
                    Novos clientes nas últimas 24 horas
                </CardDescription>
            </CardHeader>
            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/AdrielTeles97.png" />
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold text-gray-300">Adriel Teles</p>
                        <span className="font-[12px] sm:text-sm text-gray-400 ">adriel@teste.com.br</span>
                    </div>
                </article>
                
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/AdrielTeles97.png" />
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold text-gray-300">Adriel Teles</p>
                        <span className="font-[12px] sm:text-sm text-gray-400 ">adriel@teste.com.br</span>
                    </div>
                </article>
                
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/AdrielTeles97.png" />
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold text-gray-300">Adriel Teles</p>
                        <span className="font-[12px] sm:text-sm text-gray-400 ">adriel@teste.com.br</span>
                    </div>
                </article>
                
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/AdrielTeles97.png" />
                        <AvatarFallback>DV</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold text-gray-300">Adriel Teles</p>
                        <span className="font-[12px] sm:text-sm text-gray-400 ">adriel@teste.com.br</span>
                    </div>
                </article>

            </CardContent>
            
        </Card>    
    )
}
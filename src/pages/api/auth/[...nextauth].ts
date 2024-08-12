import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface User {
  id: string;
  name: string;
  email: string;
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Simulação de dados de usuário (substitua com a lógica real de verificação)
        const user = { email: "admin@example.com", password: "admin" }; // Simulação de usuário

        if (credentials?.email === user.email && credentials.password === user.password) {
          // Retorna um objeto que representa o usuário
          return { id: "1", name: "Admin", email: user.email } as User;
        }
        return null; // Retorna null se as credenciais estiverem incorretas
      }
    })
  ],
  pages: {
    signIn: '/login', // Página de login personalizada
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redireciona para a página do dashboard após o login
      return baseUrl + '/dashboard';
    }
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET, // Configure uma variável de ambiente secreta para segurança
});

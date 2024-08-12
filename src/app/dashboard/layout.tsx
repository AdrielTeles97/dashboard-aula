import { Sidebar } from "@/components/sidebar";

export const metadata = {
    title: "Dashboard",
    description: "Dashboard de vendas",
};


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Sidebar />
            <main>{children}</main>
        </div>
    );
}

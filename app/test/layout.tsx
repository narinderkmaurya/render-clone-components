export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <main className="bg-[#1B1B1B] ">{children}</main>

    )
}
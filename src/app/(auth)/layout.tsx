export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex h-screen w-screen justify-center bg-gray-50 gap-8 p-4">{children}</main>;
}

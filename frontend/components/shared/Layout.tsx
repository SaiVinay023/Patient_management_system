export default function Layout({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      {children}
    </div>
  );
}
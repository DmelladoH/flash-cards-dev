export default function CreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex justify-center pt-20">{children}</div>;
}

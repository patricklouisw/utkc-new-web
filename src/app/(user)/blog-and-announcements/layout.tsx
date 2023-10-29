export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section className="mt-36 max-w-7xl m-auto px-5">{children}</section>;
}

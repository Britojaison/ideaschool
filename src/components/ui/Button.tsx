import Link from "next/link";
export default function Button({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) {
  return <Link href={href} className={`btn ${primary ? "btnPrimary" : ""}`}>{children}</Link>;
}

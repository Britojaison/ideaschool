import Link from "next/link";
export default function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <div className="container crumbs">{items.map((item, i) => <span key={item.label}>{i > 0 && " / "}{item.href ? <Link href={item.href}>{item.label}</Link> : item.label}</span>)}</div>;
}

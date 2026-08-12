import Link from "next/link";
import { Logo } from "./Header";
import styles from "./Header.module.css";

export default function MinimalHeader({ href = "#register" }: { href?: string }) {
  return <header className={styles.header}><div className={styles.minimalInner}><Logo /><Link className={styles.apply} href={href}>Register now</Link></div></header>;
}

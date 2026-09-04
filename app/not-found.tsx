import Link from "next/link";
import Image from "next/image";
import Header from "@/components/global/Header";
import HomeForm from "@/components/homepage/HomeForm";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className="newSite" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#F5F5F5' }}>
      <Header />
      <main className={styles.page} style={{ flexGrow: 1, minHeight: 0 }}>
        <div className={styles.illustration} aria-hidden="true">
          <Image src="/images/404-illustration.svg" alt="404 Illustration" width={720} height={720} priority />
        </div>
        <Link href="/">Back to home <span>↗</span></Link>
        <p className={styles.mark}>IDEA SCHOOL · CREATING FUTURE-READY PROs</p>
      </main>
      <HomeForm />
    </div>
  );
}

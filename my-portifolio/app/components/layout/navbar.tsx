"use client"


import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from './navbar.module.css';

export default function Navigation() {
  const pathname = usePathname();
  const [currentRoute, setCurrentRoute] = useState(pathname);

  useEffect(() => {
    setCurrentRoute(pathname);
  }, [pathname]);

  return (
    <div className={styles.navbar}>
      <ul>
        <li className={currentRoute === '/' ? styles.active : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className={currentRoute === '/projects' ? styles.active : ''}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={currentRoute === '/languages' ? styles.active : ''}>
          <Link href="/languages">Languages</Link>
        </li>
        <li className={currentRoute === '/frameworks' ? styles.active : ''}>
          <Link href="/frameworks">Frameworks</Link>
        </li>
      </ul>
    </div>
  );
}
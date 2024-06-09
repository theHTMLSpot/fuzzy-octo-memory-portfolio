
import Title from "./components/homepage/title";
import styles from "./page.module.css";
import RocketIcon from "./components/homepage/rocket-icon";
import Link from "next/link";


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Title />
        <p>
          Hey there! I’m a 12-year-old coding enthusiast from the Netherlands. I love diving into the world of programming and have already mastered several coding languages. Whether it’s building awesome projects or solving complex problems, I’m always up for a coding challenge. Let’s create something amazing together!
        </p>
        
        <Link href='/projects'>
        <button className={styles.call_to_action}>
          See my work
          
        </button>
        </Link>
        

      </div>
      <div className={styles.image}>
        <RocketIcon />
      </div>
    </main>
  );
}

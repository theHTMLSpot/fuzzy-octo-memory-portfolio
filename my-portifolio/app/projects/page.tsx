import Head from "next/head";
import Heading from "../components/projects/title";
import styles from './title.module.css'
import Link from "next/link";
import ProjectList from '../components/projects/project-list'

function Projects()
{   
    return(
        <main className={styles.main}>
            <div className={styles.description}>
                <Heading />
            
                <p>
                Welcome to my project page! Here, you’ll discover a variety of innovative and exciting projects I’ve created. Each project showcases my journey and growth in the world of programming. From web development to game design, I’ve explored various fields and tackled numerous challenges. Take a look around and see what I’ve been working on—let’s create something amazing together!
                </p>

                <button className={styles.call_to_action}>
                    <Link href={'https://www.github.com/theHTMLSpot'} target="_blank"> My Github </Link>
                </button>
            </div>

        
                <ProjectList />
   
   
            
           
            
           
        </main>
        
    );

}

export default Projects;
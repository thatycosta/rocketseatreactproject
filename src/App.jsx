import { Header } from './components/Header';
import { Post } from './Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header></Header>

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post  
              author="Tauane Costa" 
              content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo architecto mollitia, sequi excepturi molestiae optio accusamus dolores ut incidunt qui iste, sed eligendi. Iste molestiae, nobis beatae consequatur hic ratione?"
              />

          <Post  
              author="Filipe Reuwsaat" 
              content="Ilorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo architecto mollitia, sequi excepturi molestiae optio accusamus dolores ut incidunt qui iste, sed eligendi. Iste molestiae, nobis beatae consequatur hic ratione?"
              />
        </main>
      </div>

      

    </div>
  )
}



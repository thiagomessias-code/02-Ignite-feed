import { Header } from "./components/Header"
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

function App() {
  

  return (
   <div>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
      <main>
    <Post author=" Thiago Messias" content=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus quos, error illo, commodi expedita excepturi eum neque molestias, aliquid possimus dignissimos. Nisi suscipit quibusdam aspernatur dolore molestiae voluptate ducimus magni!"/>
      </main>
     
    </div>
  </div>
  )
}

export default App

import { Post } from "./Post"
import { Header } from "./components/Header"
import './global.css'
import style from './App.module.css'
import { Sidebar } from "./components/Sidebar"
export function App() {
  return (
    <div>
      <Header/>
      <div className={style.wrapper}>
        <Sidebar/>
        <main>
          <Post author = "João da Silva" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestiae laboriosam recusandae maxime quaerat animi magnam, itaque dolore repellendus commodi quas expedita rem tempora saepe atque blanditiis, quam mollitia iste!"/> 
          <Post author = "Maria de Sousa" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestiae laboriosam recusandae maxime quaerat animi magnam, itaque dolore repellendus commodi quas expedita rem tempora saepe atque blanditiis, quam mollitia iste!"/> 
          <Post author = "Fulano de tal" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestiae laboriosam recusandae maxime quaerat animi magnam, itaque dolore repellendus commodi quas expedita rem tempora saepe atque blanditiis, quam mollitia iste!"/> 
        </main>
      </div>
    </div>
  )
}

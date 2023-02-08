import { Post } from "./Post"
import { Header } from "./components/Header"

export function App() {
  return (
    <div>
      <Header/>
      <Post title='My first Post here' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. A hic saepe illum architecto nisi vel dolorem incidunt esse, maiores molestiae ipsum eos quis quo recusandae! Sapiente illo illum culpa voluptas.'/> 
      <Post title='My second Post here' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. A hic saepe illum architecto nisi vel dolorem incidunt esse, maiores molestiae ipsum eos quis quo recusandae! Sapiente illo illum culpa voluptas.'/> 

    </div>
  )
}

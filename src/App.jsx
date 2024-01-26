import { Navbar } from "./components/Navbar"
import { Board } from "./components/board/Board"
import { Sidebar } from "./components/sidebar/Sidebar"

export const App = () => {
  return (
    <main className="h-screen w-screen flex flex-col">
      <Navbar/>
      <section className="w-screen h-full flex flex-wrap bg-stone-400">
        <Sidebar/>
        <Board/>
      </section>
    </main>
  )
}
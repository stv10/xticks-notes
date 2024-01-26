import { BoardBar } from "./BoardBar"
import { BoardColsContainer } from "./BoardColsContainer"

export const Board = () => {
  return (
    <main className="bg-stone-400 h-full flex-grow flex flex-col">
      <BoardBar/>
      <BoardColsContainer/>
    </main>
  )
}
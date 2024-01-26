import { BoardCol } from "./BoardCol"

export const BoardColsContainer = () => {
  return (
    <section className="flex-grow flex gap-4 flex-nowrap py-4 px-4">
        <BoardCol/>
        <BoardCol/>
        <BoardCol/>
    </section>
  )
}
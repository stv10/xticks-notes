import { BoardCol } from "./BoardCol"

export const BoardColsContainer = () => {
  return (
    <div className="flex-grow relative block">
      <div className="block">
        <ol className="flex gap-4 flex-nowrap py-4 px-4 overflow-x-auto overflow-y-hidden top-0 right-0 bottom-0 left-0 absolute">
            <BoardCol/>
            <BoardCol/>
            <BoardCol/>
        </ol>
      </div>
    </div>
  )
}
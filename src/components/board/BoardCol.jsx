import { CardsList } from "./cards/CardsList"

export const BoardCol = () => {
  return (
    <li className="bg-transparent h-full max-w-64 flex-grow rounded">
      <CardsList/>
    </li>
  )
}
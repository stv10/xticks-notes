import DotsSVG from "../../../assets/DotsSvg"

export const CardsList = () => {
  return (
    <div className="rounded bg-slate-600 p-3 flex flex-col">
        <header className="flex flex-nowrap justify-between items-center">
            <h2 className="text-base text-gray-50">Title</h2>
            <button className="p-0">
                <DotsSVG/>
            </button>
        </header>
        <ol className="flex flex-col rounded-md overflow-hidden z-[1] list-none px-[2px] py-1 h-full flex-grow flex-shrink basis-auto">

        </ol>
        <footer></footer>
    </div>
  )
}
import { useEffect, useState } from "react"

const Main = () => {

    const [count, setCount] = useState(0)
    const [timer, setTimer] = useState(0)

    const handleTimer = () => {
        setTimer(previous => previous + 1)
    }

    useEffect(() => {
        const interval = setInterval(handleTimer, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex justify-center w-screen h-screen">
            <div className="mt-5">
                <h1 className="text-white font-mono">CREATE REACT TAILWINDCSS APP</h1>
                <div className="flex justify-center mt-5">
                    <div className="w-10 h-10 border-x-2 animate-spin border-white rounded-full"></div>
                </div>

                <div className="flex flex-col items-center mt-5">
                    <span className="text-white">Count: {count}</span>
                    <div className="flex gap-3 mt-3">
                        <button className="rounded-full outline-none text-white text-xl flex justify-center items-center border-0 shadow bg-[#222] w-8 h-8 shadow-black" onClick={() => setCount(previous => previous - 1)}>➖</button>
                        <button className="rounded-full outline-none text-white text-xl flex justify-center items-center border-0 shadow bg-[#222] w-8 h-8 shadow-black" onClick={() => setCount(previous => previous + 1)}>➕</button>
                    </div>
                    <button className="rounded-full outline-none text-white text-xl flex justify-center items-center border-0 shadow bg-[#222] w-8 h-8 shadow-black" onClick={() => setCount(previous => previous + 1)}>⟳</button>
                </div>

                <div className="text-center text-white mt-10">Timer: {timer}</div>

                <div className="text-center text-white mt-5 text-sm">
                    <h1>Template by <span onClick={() => window.open("https://github.com/thenamevishnu", "_blank")} className="cursor-pointer text-red-600">@thenamevishnu</span></h1>
                </div>
            </div>
        </div>
    )
}

export default Main

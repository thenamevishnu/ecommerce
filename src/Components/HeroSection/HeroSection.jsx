import { Fragment } from "react"

const HeroSection = () => {
    return (
        <Fragment>
            <div className="bg-[#96E9FB] h-[500px] relative mx-14 rounded-xl hidden md:block">
                <div className="absolute h-96 w-96 rounded-full bg-white right-0 top-0"></div>
                <div className="absolute h-24 w-24 rounded-full bg-white right-96 top-0"></div>
                <div className="absolute h-3 w-3 rounded-full bg-[#977DF4] right-[-3rem] top-24"></div>
                <img src="./hero-bg-girl.jpg" className="object-contain bottom-0 absolute overflow-hidden right-[-3rem]" />
                <div className="absolute h-6 w-6 rounded-full bg-white right-[-1.5rem] top-56"></div>

                <div className="absolute top-1/2 translate-y-[-50%] lg:left-36 md:left-10">
                    <p className="text-sm text-[#2A7CC7]">SUMMER 2020</p>
                    <p className="text-5xl font-bold mt-5">NEW COLLECTION</p>
                    <p className="mt-5 text-lg mb-5 text-[#737373]">We know how large objects will act, <br />but things on a small scale.</p>
                    <button className="bg-[#23A6F0] p-2 px-3 text-white rounded-md">SHOP NOW</button>
                </div>
            </div>
            <div className="bg-[#96E9FB] h-[700px] relative mx-2 rounded-xl md:hidden">
                <div className="text-center">
                    <p className="text-sm text-[#2A7CC7] pt-14">SUMMER 2020</p>
                    <p className="text-5xl font-bold mt-5">NEW COLLECTION</p>
                    <p className="mt-5 text-lg mb-5 text-[#737373]">We know how large objects will act, <br />but things on a small scale.</p>
                    <button className="bg-[#23A6F0] p-2 px-3 text-white rounded-md">SHOP NOW</button>
                </div>

                <div className="mt-20">
                    <div className="absolute h-64 w-64 rounded-full bg-white left-1/2 translate-x-[-50%] top-[360px]"></div>
                    <div className="absolute h-12 w-12 rounded-full bg-white left-10 sm:left-16 top-96"></div>
                    <div className="absolute h-3 w-3 rounded-full bg-[#977DF4] right-10 top-80"></div>
                    <img src="./hero-bg-girl.jpg" className="object-contain bottom-0 right-0 absolute" />
                    <div className="absolute h-6 w-6 rounded-full bg-white right-3 sm:top-[26rem] top-[27rem]"></div>
                </div>
            </div>
        </Fragment>
    )
}

export default HeroSection

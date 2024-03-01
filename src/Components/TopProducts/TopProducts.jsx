
const TopProducts = () => {
    return (
        <div className="flex md:flex-row flex-col gap-3 justify-center mt-10 px-2 md:px-0">
            <div className="relative">
                <img src="./top-product-1.jpg" />
                <div className="bg-[#2D8BC0BF] bottom-0 absolute md:w-2/3 w-full h-2/5 flex items-center ps-14">
                    <div>
                        <p className="text-white text-2xl">Top Product Of <br />the Week</p>
                        <button className="border-2 border-white text-white mt-5 text-sm p-1 px-2">EXPLORE ITEMS</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 justify-between">
                <div className="relative">
                    <img src="./top-product-2.jpg" />
                    <div className="bg-[#2D8BC0BF] bottom-0 absolute md:w-2/3 w-full h-2/3 flex items-center ps-14">
                        <div>
                            <p className="text-white text-2xl">Top Product Of <br />the Week</p>
                            <button className="border-2 border-white text-white mt-5 text-sm p-1 px-2">EXPLORE ITEMS</button>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src="./top-product-3.jpg" />
                    <div className="bg-[#2D8BC0BF] bottom-0 absolute md:w-2/3 w-full h-2/3 flex items-center ps-14">
                        <div>
                            <p className="text-white text-2xl">Top Product Of <br />the Week</p>
                            <button className="border-2 border-white text-white mt-5 text-sm p-1 px-2">EXPLORE ITEMS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopProducts

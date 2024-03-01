import { dummyProducts } from "../../constants"

const FeaturedProducts = () => {
    return (
        <div className="mt-24">
            <div className="text-center">
                <h3 className="text-primaryGray text-base">Featured Products</h3>
                <h1 className="text-2xl mt-3">BESTSELLER PRODUCTS</h1>
                <p className="text-primaryGray mt-2 text-base">Problems trying to resolve the conflict between</p>
            </div>

            <div className="flex flex-wrap gap-10 px-20 justify-center mt-5">
                {
                    dummyProducts.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="w-56">
                                    <img src={item.image} className="" />
                                </div>
                                <div className="text-center">
                                    <p className="mb-2 mt-2 font-semibold">{item.title}</p>
                                    <p className="mb-2 text-primaryGray">{item.desc}</p>
                                    <div className="flex justify-center gap-3 text-xl font-bold">
                                        <p className="text-primaryGray">{item.price}</p>
                                        <p className="text-[#23856D]">{item.discount}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex justify-center mt-14">
                <button className="border-2 border-[#23A6F0] text-[#23A6F0] text-sm p-2 px-4">LOAD MORE PRODUCTS</button>
            </div>

            <div className="flex justify-center lg:gap-20 md:gap-5 md:flex-nowrap flex-wrap-reverse gap-2 mt-32 md:items-center md:flex-row flex-row-reverse">
                <div className="flex lg:h-96 md:h-80 md:justify-end justify-center px-2 h-96 gap-5 md:w-1/2 w-full">
                    <img src="./section-3-girl-1.jpg" className="md:w-auto w-1/2" />
                    <img src="./section-3-girl-2.jpg" className="md:w-auto w-1/2" />
                </div>
                <div className="md:text-start text-center md:w-1/2 mb-10 md:mb-0 w-full">
                    <h6 className="text-sm text-[#23A6F0] mb-4 font-bold">Featured Products</h6>
                    <h2 className="text-5xl font-bold mb-4">We love what we do</h2>
                    <p className="text-primaryGray text-sm font-semibold">Problems trying to resolve the conflict between <br />the two major realms of Classical physics:
                        Newtonian mechanics.<br /><br />Problems trying to resolve the conflict between <br />the two major realms of Classical physics: <br />Newtonian mechanics </p>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts

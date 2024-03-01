
const BestServices = () => {
    return (
        <div className="mt-24">
            <div className="text-center">
                <h3 className="text-primaryGray text-base">Featured Products</h3>
                <h1 className="text-2xl mt-3">THE BEST SERVICES</h1>
                <p className="text-primaryGray mt-2 text-base">Problems trying to resolve the conflict between </p>
            </div>

            <div className="flex justify-evenly mt-20 md:flex-row flex-col items-center">
                <div className="text-center">
                    <div className="flex justify-center">
                        <img src="./easy-wins.jpg" />
                    </div>

                    <h3>Easy Wins</h3>
                    <p className="text-primaryGray w-64">Get your best looking smile now!</p>
                </div>
                <div className="text-center">
                    <div className="flex justify-center">
                        <img src="./concrete.jpg" />
                    </div>

                    <h3>Concrete</h3>
                    <p className="text-primaryGray w-64">Defalcate is most focused in helping you discover your most beautiful smile</p>
                </div>
                <div className="text-center">
                    <div className="flex justify-center">
                        <img src="./hack-growth.jpg" />
                    </div>

                    <h3>Hack Growth</h3>
                    <p className="text-primaryGray w-64">Overcame any hurdle or any other problem.</p>
                </div>
            </div>
        </div>
    )
}

export default BestServices

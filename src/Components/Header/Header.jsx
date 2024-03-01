import { Fragment, useState } from "react"


const Header = () => {

    const [isMenu, setIsMenu] = useState(false)

    return (
        <Fragment>
            <div className="h-16 bg-white justify-center items-center px-10 flex">
                <div className="flex justify-between w-full">
                    <div className="flex items-center lg:gap-28 gap-6">
                        <h4 className="font-bold text-xl">Bandage</h4>
                        <ul className="md:flex lg:gap-7 gap-3 hidden">
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Pages</li>
                        </ul>
                    </div>
                    <div className="text-[#23A6F0] font-bold flex lg:gap-10 gap-5 items-center">
                        <span className="hidden md:inline"><i className="far fa-user" /> Login / Register</span>
                        <i className="fa fa-search md:text-[#23A6F0] text-black" />
                        <i className="fa fa-shopping-cart md:text-[#23A6F0] text-black" />
                        <span className="md:inline hidden"><i className="far fa-heart" /></span>
                        <svg onClick={() => setIsMenu(prev => !prev)} className="inline md:hidden cursor-pointer" width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.571411 0H23.4285V2.28571H0.571411V0ZM6.2857 5.71429H23.4285V8H6.2857V5.71429ZM13.4286 11.4286H23.4285V13.7143H13.4286V11.4286Z" fill="#252B42" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className={`${isMenu ? `h-auto` : `h-0`} overflow-hidden px-3 text-center`}>
                <ul className="p-3 text-xl">
                    <li className="mb-3">Home</li>
                    <li className="mb-3">Product</li>
                    <li className="mb-3">Pricing</li>
                    <li>Contact</li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Header

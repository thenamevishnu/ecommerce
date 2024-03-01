
const Footer = () => {
    return (
        <div className="mt-28 md:px-20 px-5 mb-4 text-primaryGray">
            <div className="flex md:justify-around flex-col md:flex-row mb-10">
                <h2 className="text-xl font-bold text-black">Bandage</h2>
                <div className="text-[#23A6F0] flex gap-5 items-center mt-6 md:mt-0">
                    <i className="fab fa-facebook text-xl" />
                    <i className="fab fa-instagram text-xl" />
                    <i className="fab fa-twitter text-xl" />
                </div>
            </div>
            <hr />
            <div className="flex flex-wrap justify-around mt-10 gap-5 font-bold">
                <div className="md:w-auto w-full">
                    <ul>
                        <li className="font-semibold text-lg mb-3 text-black">Company Info</li>
                        <li className="mb-1">About Us</li>
                        <li className="mb-1">Carrier</li>
                        <li className="mb-1">We are hiring</li>
                        <li className="text-[#737373]">Blog</li>
                    </ul>
                </div>
                <div className="md:w-auto w-full">
                    <ul>
                        <li className="font-semibold text-lg mb-3 text-black">Legal</li>
                        <li className="mb-1">About Us</li>
                        <li className="mb-1">Carrier</li>
                        <li className="mb-1">We are hiring</li>
                        <li className="text-[#737373]">Blog</li>
                    </ul>
                </div>

                <div className="md:w-auto w-full">
                    <ul>
                        <li className="font-semibold text-lg mb-3 text-black">Features</li>
                        <li className="mb-1">Business Marketing</li>
                        <li className="mb-1">User Analytic</li>
                        <li className="mb-1">Live Chat</li>
                        <li className="text-[#737373]">Unlimited Support</li>
                    </ul>
                </div>

                <div className="md:w-auto w-full">
                    <ul>
                        <li className="font-semibold text-black text-lg mb-3">Resources</li>
                        <li className="mb-1">IOS & Android</li>
                        <li className="mb-1">Watch a Demo</li>
                        <li className="mb-1">Customers</li>
                        <li className="text-[#737373]">API</li>
                    </ul>
                </div>

                <div className="lg:w-auto w-full">
                    <h6 className="font-semibold text-lg text-black">Get In Touch</h6>
                    <div className="border-2 rounded-lg mt-2 flex"><input type="text" placeholder="Your Email" className="p-3 outline-none w-full rounded-lg" /><button className="rounded-lg text-white bg-[#23A6F0] p-3">Subscribe</button></div>
                    <p className="mt-2 font-bold text-sm">Lore imp sum dolor Amit</p>
                </div>

            </div>

            <p className="ms-12 mt-10 font-bold md:text-balance text-center">Made With Love By Finland All Right Reserved </p>
        </div>
    )
}

export default Footer

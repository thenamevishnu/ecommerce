
const TopHeader = () => {
    return (
        <div className="bg-[#252B42] h-8 items-center justify-between hidden md:flex text-white text-xs lg:text-sm lg:px-3">
            <div className="flex gap-4 items-center">
                <span><i className="fa fa-phone" /> (225) 555-0118</span>
                <span><i className="fa fa-at" /> michelle.rivera@example.com</span>
            </div>
            <div>
                <p>Follow Us  and get a chance to win 80% off</p>
            </div>
            <div className="flex gap-4">
                <span>Follow Us  :</span>
                <span><i className="fab fa-instagram" /></span>
                <span><i className="fab fa-youtube" /></span>
                <span><i className="fab fa-facebook" /></span>
                <span><i className="fab fa-twitter" /></span>
            </div>
        </div>
    )
}

export default TopHeader

import { Fragment } from "react"
import { featuredPosts } from "../../constants"

const FeaturedPosts = () => {
    return (

        <Fragment>
            {/* from medium */}

            <div className="mt-28 hidden md:block">
                <div className="text-center">
                    <h4 className="text-[#23A6F0] text-sm mb-3">Practice Advice</h4>
                    <h1 className="text-2xl font-bold">Featured Posts</h1>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 justify-center xl:px-32 px-4 mt-16">
                    {
                        featuredPosts.map((item, index) => {
                            return (
                                <div className="flex md:flex-row items-center justify-center flex-col h-96 gap-10" key={index}>
                                    <div className="relative flex justify-center md:w-auto w-96">
                                        <span className="bg-[#E74040] p-1 text-white absolute top-3 text-sm left-3 rounded-md px-3">Sale</span>
                                        <img src={item.image} className="h-96 md:aspect-auto aspect-square" />
                                        <div className="flex absolute bottom-3">
                                            <div className="gap-3 flex">
                                                <i className="far fa-heart p-2 bg-white rounded-full" />
                                                <i className="fa fa-shopping-cart p-2 bg-white rounded-full" />
                                                <i className="fa fa-eye p-2 bg-white rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-6/12">
                                        <div className="flex justify-between gap-5">
                                            <p className="text-[#23A6F0]">{item.department}</p>
                                            <p className="bg-[#252B42] w-14 p-1 text-nowrap rounded-full text-white"><i className="fa fa-star text-yellow-400" /> {item.rating}</p>
                                        </div>
                                        <p className="font-bold mt-2">{item.title}</p>
                                        <p className="text-primaryGray mt-4">{item.desc}</p>
                                        <div className="mt-3 font-bold text-primaryGray"><i className="fa fa-download" /> {item.sales}</div>
                                        <div className="text-primaryGray font-bold mt-3">{item.price} <span className="text-[#23856D]">{item.discount}</span></div>
                                        <div className="flex gap-3 mt-3">
                                            {
                                                item.colors.map((items, indexs) => {
                                                    return (
                                                        <div className={`w-4 h-4 rounded-full ${items}`} key={indexs}>

                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="flex items-center gap-5 mt-5">
                                            <span><i className="far fa-clock" /> 22h...</span>
                                            <span className="flex items-center">
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14 2.307L13.3425 2.5255C12.4214 2.81404 11.4649 2.97373 10.5 3C9.633 3 8.839 2.5465 7.998 2.066C7.081 1.542 6.133 1 5 1C3.5615 1 1.9575 2.103 1 2.886V0H0V13C0.000264738 13.2651 0.105707 13.5193 0.293186 13.7068C0.480665 13.8943 0.734865 13.9997 1 14H14V2.307ZM1 9.147C1.937 7.688 3.78 5.5 5 5.5C5.819 5.5 6.48 6.051 7.18 6.6345C7.9485 7.2745 8.819 8 10 8C11.118 7.94638 12.1809 7.49837 13 6.7355V9.2135C12.0781 9.71383 11.0488 9.98368 10 10C9.19775 9.97862 8.40531 9.81806 7.658 9.5255C6.80921 9.19742 5.90978 9.0196 5 9C3.5365 9 1.966 10.4795 1 11.579V9.147ZM5 2C5.867 2 6.661 2.4535 7.502 2.934C8.419 3.458 9.367 4 10.5 4C11.3438 3.98583 12.1829 3.87204 13 3.661V5.3215C12.6585 5.723 11.458 7 10 7C9.181 7 8.52 6.449 7.82 5.8655C7.0515 5.2255 6.181 4.5 5 4.5C3.532 4.5 1.9685 6.17 1 7.4225V4.212C1.773 3.483 3.6295 2 5 2ZM1.1245 13C1.931 11.9545 3.705 10 5 10C5.80225 10.0214 6.59469 10.1819 7.342 10.4745C8.19079 10.8026 9.09022 10.9804 10 11C11.036 10.9901 12.0582 10.7618 13 10.33V13H1.1245Z" fill="#E77C40" />
                                                </svg> <span className="ms-1">{item.lessons}</span>
                                            </span>
                                            <span className="flex items-center">
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.3333 13.8333H2V0.833293C2 0.741626 1.925 0.666626 1.83333 0.666626H0.666667C0.575 0.666626 0.5 0.741626 0.5 0.833293V15.1666C0.5 15.2583 0.575 15.3333 0.666667 15.3333H16.3333C16.425 15.3333 16.5 15.2583 16.5 15.1666V14C16.5 13.9083 16.425 13.8333 16.3333 13.8333ZM3.5 12.5H14.6667C14.7583 12.5 14.8333 12.425 14.8333 12.3333V3.24996C14.8333 3.09996 14.6521 3.02704 14.5479 3.13121L10.1667 7.51246L7.55417 4.92913C7.52284 4.89811 7.48054 4.88071 7.43646 4.88071C7.39238 4.88071 7.35007 4.89811 7.31875 4.92913L3.38125 8.87913C3.36596 8.89445 3.35385 8.91264 3.34562 8.93267C3.3374 8.95269 3.33322 8.97415 3.33333 8.99579V12.3333C3.33333 12.425 3.40833 12.5 3.5 12.5Z" fill="#23856D" />
                                                </svg>
                                                <span className="ms-1">Progress</span>
                                            </span>
                                        </div>

                                        <button className="text-[#23A6F0] mt-10 border-2 border-[#23A6F0] rounded-full flex items-center p-2 px-3 ">Learn More <i className="ms-3 fa fa-chevron-right" /></button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* small device */}

            <div className="mt-28 block md:hidden">
                <div className="text-center">
                    <h4 className="text-[#23A6F0] text-sm mb-3">Practice Advice</h4>
                    <h1 className="text-2xl font-bold">Featured Posts</h1>
                </div>
                <div className="px-4 mt-16 flex flex-col gap-10 items-center">
                    {
                        featuredPosts.map((item, index) => {
                            return (
                                <div className="gap-10" key={index}>
                                    <div className="relative flex justify-center md:w-auto w-full">
                                        <span className="bg-[#E74040] p-1 text-white absolute top-3 text-sm left-3 rounded-md px-3">New</span>
                                        <img src={item.image} className="h-96 w-full md:aspect-auto aspect-square object-cover" />
                                    </div>
                                    <div className="">
                                        <div className="flex gap-3 text-sm font-semibold">
                                            <span className="text-[#8EC2F2]">Google</span>
                                            <span>Trending</span>
                                            <span>New</span>
                                        </div>
                                        <div>
                                            <p className="mt-3">{item.title}</p>
                                            <p className="mt-3">{item.desc}</p>
                                        </div>
                                        <div className="flex justify-between mt-3 mb-3">
                                            <p><i className="fa fa-clock" /> {item.posted}</p>
                                            <p className="flex items-center text-center"><svg className="me-1" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.3333 13.8332H2V0.833171C2 0.741504 1.925 0.666504 1.83333 0.666504H0.666667C0.575 0.666504 0.5 0.741504 0.5 0.833171V15.1665C0.5 15.2582 0.575 15.3332 0.666667 15.3332H16.3333C16.425 15.3332 16.5 15.2582 16.5 15.1665V13.9998C16.5 13.9082 16.425 13.8332 16.3333 13.8332ZM3.5 12.4998H14.6667C14.7583 12.4998 14.8333 12.4248 14.8333 12.3332V3.24984C14.8333 3.09984 14.6521 3.02692 14.5479 3.13109L10.1667 7.51234L7.55417 4.929C7.52284 4.89799 7.48054 4.88059 7.43646 4.88059C7.39238 4.88059 7.35007 4.89799 7.31875 4.929L3.38125 8.879C3.36596 8.89433 3.35385 8.91252 3.34562 8.93255C3.3374 8.95257 3.33322 8.97402 3.33333 8.99567V12.3332C3.33333 12.4248 3.40833 12.4998 3.5 12.4998Z" fill="#23856D" />
                                            </svg> {item.comments} comments
                                            </p>
                                        </div>
                                        <button className="font-bold flex items-center">Learn More <i className="fa fa-chevron-right text-[#8EC2F2]" /></button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Fragment>

    )
}

export default FeaturedPosts

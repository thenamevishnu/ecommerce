import { Fragment } from "react"
import Header from "./Header/Header"
import HeroSection from "./HeroSection/HeroSection"
import TopHeader from "./Header/TopHeader"
import Brands from "./Brands/Brands"
import TopProducts from "./TopProducts/TopProducts"
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts"
import BestServices from "./BestServices/BestServices"
import FeaturedPosts from "./FeaturedPosts/FeaturedPosts"
import Footer from "./Footer/Footer"

const Main = () => {

    return (
        <Fragment>
            <TopHeader />
            <Header />
            <HeroSection />
            <Brands />
            <TopProducts />
            <FeaturedProducts />
            <BestServices />
            <FeaturedPosts />
            <Footer />
        </Fragment>
    )
}

export default Main

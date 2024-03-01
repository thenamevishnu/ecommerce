import { brands } from "../../constants"

const Brands = () => {
    return (
        <div className="flex flex-wrap gap-10 justify-center mt-10">
            {
                brands.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={item} className="h-14" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Brands

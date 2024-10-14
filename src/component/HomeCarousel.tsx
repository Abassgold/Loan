"use client"
import { Carousel } from "flowbite-react"
import Link from "next/link"

const HomeCarousel = () => {
    return (
        <div className="h-[25rem] sm:[30rem] lg:h-[40rem] bg-black">
            <Carousel indicators={false} slideInterval={5000} className="">
                <div className="first h-full">
                    <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto h-full">
                        <div className={`flex items-center h-full`}>
                            <div className={`lg:flex-[0.5]`}>
                                <h1 className="text-[3rem] text-white font-[700]">We provide you a financial power</h1>
                                <p className="text-white">We provide you an excellent service Loan blblblallalall</p>
                                <div className="my-[2rem]">
                                    <Link href='#' className="text-white bg-[#624bff] p-3 text-[1.1rem] rounded-md">
                                        Check eligibility
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second h-full">
                    <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto h-full">
                        <div className={`flex items-center h-full`}>
                            <div className={`lg:flex-[0.5]`}>
                                <h1 className="text-[3rem] text-white font-[700]">We provide you a financial power</h1>
                                <p className="text-white">We provide you an excellent service Loan blblblallalall</p>
                                <div className="my-[2rem]">
                                    <Link href='#' className="text-white bg-[#624bff] p-3 text-[1.1rem] rounded-md">
                                        Check eligibility
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="third h-full">
                    <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto h-full">
                        <div className={`flex items-center h-full`}>
                            <div className={`lg:flex-[0.5]`}>
                                <h1 className="text-[3rem] text-white font-[700]">We provide you a financial power</h1>
                                <p className="text-white">We provide you an excellent service Loan blblblallalall</p>
                                <div className="my-[2rem]">
                                    <Link href='#' className="text-white bg-[#624bff] p-3 text-[1.1rem] rounded-md">
                                        Check eligibility
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default HomeCarousel
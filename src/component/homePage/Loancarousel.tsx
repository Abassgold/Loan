'use client'

import Link from "next/link"
import HomeImages from "./HomeImages"

const Loancarousel = () => {
    const images = HomeImages()
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.5rem]">
                <div className={`p-[2rem] bg-[#ffffff] shadow-2xl rounded-lg`}>
                    <div>
                        <img src={images?.mortage} alt="" />
                    </div>
                    <div className="my-[1rem]">
                        <h1 className="text-[1.5rem] font-[600] capitalize mb-[1rem]">personal loan</h1>
                        <p className="text-[1.1rem] text-[#848b92]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis accusantium laboriosam aliquid saepe delectus placeat sapiente deleniti tenetur debitis dicta. Voluptate iure fuga blanditiis quaerat, similique ab ex officiis odio.</p>
                    </div>
                    <div>
                        <Link href='#' className="text-[#624bff] underline underline-offset4 text-[1.1rem] font-[700]">Read More</Link>
                    </div>
                </div>
                <div className={`p-[2rem] bg-[#ffffff] shadow-2xl rounded-lg`}>
                    <div>
                        <img src={images?.car} alt="" />
                    </div>
                    <div className="my-[1rem]">
                        <h1 className="text-[1.5rem] font-[600] capitalize mb-[1rem]">car loan</h1>
                        <p className="text-[1.1rem] text-[#848b92]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis accusantium laboriosam aliquid saepe delectus placeat sapiente deleniti tenetur debitis dicta. Voluptate iure fuga blanditiis quaerat, similique ab ex officiis odio.</p>
                    </div>
                    <div>
                        <Link href='#' className="text-[#624bff] underline underline-offset4 text-[1.1rem] font-[700]">Read More</Link>
                    </div>
                </div>
                <div className={`p-[2rem] bg-[#ffffff] shadow-2xl rounded-lg`}>
                    <div>
                        <img src={images?.piggyBank} alt="" />
                    </div>
                    <div className="my-[1rem]">
                        <h1 className="text-[1.5rem] font-[600] capitalize mb-[1rem]">educational loan</h1>
                        <p className="text-[1.1rem] text-[#848b92]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis accusantium laboriosam aliquid saepe delectus placeat sapiente deleniti tenetur debitis dicta. Voluptate iure fuga blanditiis quaerat, similique ab ex officiis odio.</p>
                    </div>
                    <div>
                        <Link href='#' className="text-[#624bff] underline underline-offset4 text-[1.1rem] font-[700]">Read More</Link>
                    </div>
                </div>
                <div className={`p-[2rem] bg-[#ffffff] shadow-2xl rounded-lg`}>
                    <div>
                        <img src={images?.mortage} alt="" />
                    </div>
                    <div className="my-[1rem]">
                        <h1 className="text-[1.5rem] font-[600] capitalize mb-[1rem]">business loan</h1>
                        <p className="text-[1.1rem] text-[#848b92]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis accusantium laboriosam aliquid saepe delectus placeat sapiente deleniti tenetur debitis dicta. Voluptate iure fuga blanditiis quaerat, similique ab ex officiis odio.</p>
                    </div>
                    <div>
                        <Link href='#' className="text-[#624bff] underline underline-offset4 text-[1.1rem] font-[700]">Read More</Link>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export default Loancarousel
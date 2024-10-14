import Link from "next/link"

const Footer = () => {
    return (
        <>
            <section className="text-[#837f78]">
                <div className="container px-[1.5rem] mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 ">
                        <div className="">
                            <img src="https://mediacity.co.in/assets/images/logo-light.png" alt="" />
                            <p className="text-[1.3rem] my-[2rem]">Our goal at Borrow Loan Company is to provide access to personal loans and education loan, car loan, home loan at insight competitive interest rates lorem ipsums. We are the loan provider, you can use our loan product.</p>
                            <div className="">
                                <div className="mb-4">
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#999999"><path d="M480.06-486.67q30.27 0 51.77-21.56 21.5-21.55 21.5-51.83 0-30.27-21.56-51.77-21.55-21.5-51.83-21.5-30.27 0-51.77 21.56-21.5 21.55-21.5 51.83 0 30.27 21.56 51.77 21.55 21.5 51.83 21.5ZM480-168q129.33-118 191.33-214.17 62-96.16 62-169.83 0-114.86-73.36-188.1-73.36-73.23-179.97-73.23T300.03-740.1q-73.36 73.24-73.36 188.1 0 73.67 63 169.83Q352.67-286 480-168Zm0 88Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
                                        <p className="text-[1.1rem]">3895 Sycamore Road Arlington, 97812</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#999999"><path d="M796-120q-119 0-240-55.5T333-333Q231-435 175.5-556T120-796q0-18.86 12.57-31.43T164-840h147.33q14 0 24.34 9.83Q346-820.33 349.33-806l26.62 130.43q2.05 14.9-.62 26.24-2.66 11.33-10.82 19.48L265.67-530q24 41.67 52.5 78.5T381-381.33q35 35.66 73.67 65.5Q493.33-286 536-262.67l94.67-96.66q9.66-10.34 23.26-14.5 13.61-4.17 26.74-2.17L806-349.33q14.67 4 24.33 15.53Q840-322.27 840-308v144q0 18.86-12.57 31.43T796-120ZM233-592l76-76.67-21-104.66H187q3 41.66 13.67 86Q211.33-643 233-592Zm365.33 361.33q40.34 18.34 85.84 29.67 45.5 11.33 89.16 13.67V-288l-100-20.33-75 77.66ZM233-592Zm365.33 361.33Z" /></svg>
                                        <p className="text-[1.5rem] font-[700]">800-123-456</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="">
                                <h1 className="text-white text-[1.5rem] font-[600] mb-[2rem]">Explore</h1>
                                <div className="mb-[.5rem]">
                                    <Link href='' className="text-[1.5rem] capitalize transition duration-300 hover:text-[#624bff]">about</Link>
                                </div>

                                <div className="mb-[.5rem]">
                                    <Link href='' className="text-[1.5rem] capitalize transition duration-300 hover:text-[#624bff]">our service</Link>
                                </div>
                                <div className="mb-[.5rem]">
                                    <Link href='' className="text-[1.5rem] transition duration-300 hover:text-[#624bff]">Apply for Loan</Link>
                                </div>
                                <div className="mb-[.5rem]">
                                    <Link href='' className="text-[1.5rem] capitalize transition duration-300 hover:text-[#624bff]">contact</Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="">
                                <h1 className="text-white text-[1.5rem] font-[600] mb-[2rem]">Explore</h1>
                                <p>Mon Fri: 7:00am - 6:00pm</p>
                                <p>Saturday: 9:00am - 5:00pm</p>
                                <p>Sunday: Closed</p>
                                <div>
                                    <img src="https://img.icons8.com/?size=100&id=118467&format=png&color=000000" className="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center bg-[#04080d] text-[1rem] mt-[2rem] p-[2rem]">
                    <small>Copyright © 2022 All Rights Reserved.</small>
                </div>
            </section>
        </>
    )
}

export default Footer
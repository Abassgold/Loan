import HomeCarousel from "@/component/HomeCarousel";
import Mynavbar from "@/component/Mynavbar";
import HomeImages from "@/component/homePage/HomeImages";
import Loancarousel from "@/component/homePage/Loancarousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const images = HomeImages()
  console.log(images);

  return (
    <>
      <section>
        <HomeCarousel />
        <section className="shadow-[20rem] border-b bg-white">
          <div className={`container mx-auto`}>
            <div className="grid lg:grid-cols-4 grid-cols-2">
              <div className="p-[1rem]">
                <div className={`flex justify-center items-center gap-[2rem]`}>
                  <img className="" src={images?.mortage} alt="" />
                  <div>
                    <h1 className={`text-[1.6rem] text-[#151e4b] font-[700]`}>3.74%</h1>
                    <p className="text-[1.2rem] text-[#6c759a]">Home Loans</p>
                  </div>
                </div>
              </div>

              <div className={`lg:border-x p-[1rem]`}>
                <div className={`flex justify-center items-center gap-[2rem]`}>
                  <img className="" src={images?.loan} alt="" />
                  <div>
                    <h1 className={`text-[1.6rem] text-[#151e4b] font-[700]`}>3.74%</h1>
                    <p className="text-[1.2rem] text-[#6c759a]">Personal Loans</p>
                  </div>
                </div>
              </div>
              <div className="lg:border-x p-[1rem]">
                <div className={`flex justify-center items-center gap-[2rem]`}>
                  <img className="" src={images?.car} alt="" />
                  <div>
                    <h1 className={`text-[1.6rem] text-[#151e4b] font-[700]`}>3.74%</h1>
                    <p className="text-[1.2rem] text-[#6c759a]">Car Loans</p>
                  </div>
                </div>
              </div>
              <div className="p-[1rem]">
                <div className={`flex justify-center items-center gap-[2rem]`}>
                  <img className="" src={images?.creditCard} alt="" />
                  <div>
                    <h1 className={`text-[1.6rem] text-[#151e4b] font-[700]`}>3.74%</h1>
                    <p className="text-[1.2rem] text-[#6c759a]">Credit card</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[5rem] bg-[#f8f9fa]">
          <div className={`container mx-auto`}>
            <div className="p-[1.5rem]">
              <div className="flex justify-center mb-[2rem]">
                <div className="lg:flex-[0.5] text-center">
                  <h1 className="text-[2rem] font-[700]">Find Loan Products We Offers</h1><br />
                  <p className="text-[1.5rem]">We will match you with a loan program that meet your financial need. In short term liquidity, by striving to make funds available to them
                    <span className="font-[600]"> within 24 hours of application.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="p-6">
              <Loancarousel />
            </div>
          </div>
        </section>

        <section className="py-[5rem] text-center">
          <div className="container mx-auto">
            <div className="p-[1.5rem]">
              <div className={`p-[1.5rem] mb-[4rem]`}>
                <div className="flex justify-center">
                  <div className="xl:flex-[0.5]">
                    <h1 className="text-[2rem] font-[700] mb-5">Fast & Easy Application Process.</h1>
                    <p className="text-[1.2rem]">Suspendisse aliquet varius nunc atcibus lacus sit amet coed portaeri sque mami luctus viveed congue lobortis faucibus</p>
                  </div>
                </div>
              </div>
              <div className="lg:px-[7rem]">
                <div className="grid sm:grid-cols-3 justify-around items-center gap-[2rem]">
                  <div className="border relative py-[4rem] px-[2rem] rounded-lg mb-[1.5rem]">
                    <div className="h-[4rem] w-[4rem] border-[3px] border-[#624bff] rounded-[50%] absolute  left-[50%] transform -translate-x-1/2 top-[-2.2rem] flex items-center justify-center text-[1.5rem] font-[600] bg-white text-[#624bff]">
                      1
                    </div>
                    <div>
                      <h1 className="text-[1.5rem] font-[700] mb-[1rem]">Choose Loan Amount</h1>
                      <p className="text-[#6c7796] text-[1.1rem]">Suspendisse accumsan imperdue ligula dignissim sit amet vestibulum in mollis etfelis</p>
                    </div>
                  </div>
                  <div className="border relative py-[4rem] px-[2rem] rounded-lg mb-[1.5rem]">
                    <div className="h-[4rem] w-[4rem] border-[3px] border-[#624bff] rounded-[50%] absolute  left-[50%] transform -translate-x-1/2 top-[-2.2rem] flex items-center justify-center text-[1.5rem] font-[600] bg-white text-[#624bff]">
                      2
                    </div>
                    <div>
                      <h1 className="text-[1.5rem] font-[700] mb-[1rem]">Approved Your Loan</h1>
                      <p className="text-[#6c7796] text-[1.1rem]">Suspendisse accumsan imperdue ligula dignissim sit amet vestibulum in mollis etfelis</p>
                    </div>
                  </div>
                  <div className="mb-[1.5rem] border relative py-[4rem] px-[2rem] rounded-lg">
                    <div className="h-[4rem] w-[4rem] border-[3px] border-[#624bff] rounded-[50%] absolute  left-[50%] transform -translate-x-1/2 top-[-2.2rem] flex items-center justify-center text-[1.5rem] font-[600] bg-white text-[#624bff]">
                      3
                    </div>
                    <div>
                      <h1 className="text-[1.5rem] font-[700] mb-[1rem]">Get Your Cash</h1>
                      <p className="text-[#6c7796] text-[1.1rem]">Suspendisse accumsan imperdue ligula dignissim sit amet vestibulum in mollis etfelis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-[1rem]">
            <Link href='' className="text-center bg-[#624bff] transition duration-300 hover:bg-[#1e1846] p-[1rem] text-white rounded-md font-[500]">Start Today</Link>
          </div>
        </section>

        <section className="bg-[#151e28] py-[5rem]">
          <div className="container mx-auto">
            <div className="px-[1rem]">
              <div className="text-center mb-[2rem]">
                <h1 className="text-[2.3rem] font-[600] text-white mb-2">Some of our Awesome Testimonials
                </h1>
                <p className="text-[#7b7263] text-[1.2rem]">You won’t be the only one lorem ipsu mauris diam mattises.</p>
              </div>

              <div className="py-[2rem] px-[1rem]">
                <div className="grid lg:grid-cols-3 gap-8 justify-between">
                  <div>
                    <div className="p-[2rem] bg-[#fff] rounded-lg italic text-[1.3rem] font-[600]">
                      <p>“I loved the customer service you guys provided me. That was very nice and patient with questions I had. I would really like definitely come back here”</p>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center gap-4">
                        <img src={images?.avatar1} alt="" width={50} className="rounded-md" />
                        <div>
                          <p className="text-white text-[1.3rem] font-[500]">Donny J. Griffin</p>
                          <p className="text-[#7b7263] capitalize font-[500]">personal loan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="p-[2rem] bg-[#fff] rounded-lg italic text-[1.3rem] font-[600]">
                      <p>“I had a good experience with Insight Loan Services. I am thankful to insight for the help you guys gave me. My loan was easy and fast. thank you Insigtht”</p>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center gap-4">
                        <img src={images?.avatar2} alt="" width={50} className="rounded-md" />
                        <div>
                          <p className="text-white text-[1.3rem] font-[500]">Mary O. Randle</p>
                          <p className="text-[#7b7263] capitalize font-[500]">Education Loan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="p-[2rem] bg-[#fff] rounded-lg italic text-[1.3rem] font-[600]">
                      <p>“We came out of their offices very happy with their service. They treated us very kind. Definite will come back. The waiting time was very appropriate.”</p>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center gap-4">
                        <img src={images?.avatar4} alt="" width={50} className="rounded-md" />
                        <div>
                          <p className="text-white text-[1.3rem] font-[500]">Lindo E. Olson</p>
                          <p className="text-[#7b7263] capitalize font-[500]">car loan</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-[2rem] bg-[#fff] shadow-md">
          <div className="container mx-auto">
            <div className="px-[1rem]">
              <div className="grid gap-8 justify-center items-center md:grid-cols-6 sm:grid-cols-3 grid-cols-2">
                <img src={images?.global} alt="" />
                <img src={images?.investor} alt="" />
                <img src={images?.bullSize} alt="" />
                <img src={images?.platinum} alt="" />
                <img src={images?.osm} alt="" />
                <img src={images?.global} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f9fa] py-[5rem]">
          <div className="text-center">
            <h1 className="text-[2rem] font-[800] mb-2">We are Here to Help You</h1>
            <p className="text-[#9b757d] text-[1.1rem]">Nulla rutrum tellus vel mauris tristique gravida in vulputate velit. Nulla dictum porttitor diam, ut molestie lorem mattis.</p>
          </div>
          <div className="mt-[4rem] container mx-auto px-[1.5rem]">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white shadow-sm text-center border-[4px] rounded-lg p-[4rem]">
              <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#0000F5"><path d="M660-180h120v-600H660v600ZM280.18-410q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5Zm0 120q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5ZM250-530h300v-140H250v140Zm150.18 120q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5Zm0 120q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5Zm120-120q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5Zm0 120q12.82 0 21.32-8.68 8.5-8.67 8.5-21.5 0-12.82-8.68-21.32-8.67-8.5-21.5-8.5-12.82 0-21.32 8.68-8.5 8.67-8.5 21.5 0 12.82 8.68 21.32 8.67 8.5 21.5 8.5ZM600-220v-520H180v520h420Zm60 100q-20.22 0-35.61-11.5T603-160H180q-24.75 0-42.37-17.63Q120-195.25 120-220v-520q0-24.75 17.63-42.38Q155.25-800 180-800h423q6-17 21.39-28.5T660-840h120q24.75 0 42.38 17.62Q840-804.75 840-780v600q0 24.75-17.62 42.37Q804.75-120 780-120H660ZM180-220v-520 520Z"/></svg>
                <p className="my-[1rem] capitalize text-[1.5rem] font-[500]">apply for loan</p>
                <p className="text-[1.1rem] text-[#757585]">Looking to buy a car or home loan? then apply for loan now.</p>
                <div className="mt-6">
                  <Link href='#' className="underline underline-offset-4 text-[#624bff] text-[1.2rem] font-[600] transition duration-200 hover:text-[#2f285e]">Get Appointment</Link>
                </div>
              </div>
              <div className=" bg-white shadow-sm text-center border-[4px] rounded-lg p-[4rem]">
              <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#0000F5"><path d="M795-120q-116 0-236.5-56T335-335Q232-438 176-558.5T120-795q0-19.29 12.86-32.14Q145.71-840 165-840h140q14 0 24 10t14 25l26.93 125.64Q372-665 369.5-653.5t-10.73 19.73L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23.15-15 13.15-4 25.85-2l119 26q15 4 25 16.04 10 12.05 10 26.96v135q0 19.29-12.86 32.14Q814.29-120 795-120ZM229-588l81-82-23-110H180q2 42 13.5 88.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z"/></svg>
                <p className="my-[1rem] capitalize text-[1.5rem] font-[500]">call us at</p>
                <p className="text-[1.5rem] font-[700]">800-123-456 / 789</p>
                <div>
                  <Link href='' className="text-[#624bff] transition duration-200 hover:text-[#2f285e]">lnfo@loanadvisor.com</Link>
                </div>
                <div className="mt-6">
                  <Link href='#' className="underline underline-offset-4 text-[#624bff] text-[1.2rem] font-[600] transition duration-200 hover:text-[#2f285e]">Get Appointment</Link>
                </div>
              </div>
              <div className="bg-white shadow-sm text-center border-[4px] rounded-lg p-[4rem]">
              <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#0000F5"><path d="M684-381q-39.48 0-66.74-27.26Q590-435.52 590-475q0-39.48 27.26-66.74Q644.52-569 684-569q39.48 0 66.74 27.26Q778-514.48 778-475q0 39.48-27.26 66.74Q723.48-381 684-381ZM488-160v-51q0-26 11-44.5t31-28.5q37-19 75-28t79-9q41 0 79 8.5t75 28.5q20 9 31 28t11 45v51H488Zm-88-321q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm0-150ZM80-160v-94q0-34 17-62.5t50.67-43.5Q215-390 276.5-405q61.5-15 123.25-15 32.25 0 57.25 3t54 9l-25.5 25.5L460-357q-13-2-28-2.5t-32-.5q-56.63 0-110.81 11.5Q235-337 172-306q-14 7-23 22t-9 30v34h288v60H80Zm348-60Zm-28-321q39 0 64.5-25.5T490-631q0-39-25.5-64.5T400-721q-39 0-64.5 25.5T310-631q0 39 25.5 64.5T400-541Z"/></svg>
                <p className="my-[1rem] capitalize text-[1.5rem] font-[500]">TALK TO ADVISOR</p>
                <p className="text-[1.1rem] text-[#757585]">Need to loan advise? Talk to our Loan advisors.</p>
                <div className="mt-6">
                  <Link href='#' className="underline underline-offset-4 text-[#624bff] text-[1.2rem] font-[600] transition duration-200 hover:text-[#2f285e]">Get Appointment</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

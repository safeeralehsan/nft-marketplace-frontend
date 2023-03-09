import Navbar from "../common/navbar";
import HeroSection from "./heroSection";


export default function Home() {
    return (
        <>
            <Navbar />

            <HeroSection />

            <div className="bg-[#D9E0EC] flex justify-center bg-opacity-30">
                <div className="lg:max-w-[70%] max-w-[80%] w-full py-16 grid md:grid-cols-3 grid-cols-1">
                    <div className="col-span-1 flex items-center max-md:my-5">
                        <span className="font-IntegralCF text-2xl max-md:text-center">THE AMAZING NFT ART OF THE WORLD IS HERE</span>
                    </div>
                    <div className="col-span-1 flex justify-center max-md:my-5">
                        <div className="grid grid-cols-5 gap-4">
                            <div className="col-span-1 flex justify-end">
                                <img src="./images/icons/card-tick.png" alt="card_tick" className="h-8" />
                            </div>
                            <div className="col-span-4">
                                <p className="font-DMSans text-lg font-bold">Fast Transation</p>
                                <p className="font-DMSans text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 flex justify-center max-md:my-5">
                        <div className="grid grid-cols-5 gap-4">
                            <div className="col-span-1 flex justify-end">
                                <img src="./images/icons/chart-square.png" alt="chart_square" className="h-8" />
                            </div>
                            <div className="col-span-4">
                                <p className="font-DMSans text-lg font-bold ">Growth Transation</p>
                                <p className="font-DMSans text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


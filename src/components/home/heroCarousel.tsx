import { useState } from "react"
import { FaEthereum } from "react-icons/fa"
import { featuredLiveAuctionNFT } from "../common/types/home"


export default function HeroCarousel() {
    const [liveNFT, setLiveNFT] = useState<number>(1)

    const featuredLiveAuctionNFT: featuredLiveAuctionNFT = [
        {
            name: "Abstr Gradient NFT",
            user: "Arkhan17",
            userImage: "./src/assets/images/users/arkhan17.png",
            NFTImage: "./src/assets/images/live_auction/live_auction1.png",
            CurrentBid: "0.30 ETH",
            theme: "light",
        },
        {
            name: "Bubble NFT",
            user: "Arkhan17",
            userImage: "./src/assets/images/users/arkhan17.png",
            NFTImage: "./src/assets/images/live_auction/live_auction2.png",
            CurrentBid: "0.25 ETH",
            theme: "light",
        },
        {
            name: "Abstr Gradient NFT",
            user: "Arkhan17",
            userImage: "./src/assets/images/users/arkhan17.png",
            NFTImage: "./src/assets/images/live_auction/live_auction3.png",
            CurrentBid: "0.40 ETH",
            theme: "dark",
        },
    ]

    const featuredLiveAuctionCardJSXArray = generatefeaturedLiveAuctionCardJSXArray(featuredLiveAuctionNFT)

    return (
        <>
            <div className="relative lg:h-[26rem] h-80 max-sm:h-72 aspect-[10/11] max-md:mt-10">
                <div
                    className={`absolute left-0 top-0 w-full h-full bg-amber-200 transition-transform ease-in duration-200 cursor-pointer rounded-3xl overflow-hidden  
                            ${liveNFT === 1 ?
                            'z-30 hover:scale-[1.03]' :
                            liveNFT === 2 ?
                                'z-10 translate-x-[30%] scale-[0.8] hover:scale-[0.83]' :
                                'z-20 translate-x-[15%] scale-[0.9] hover:scale-[0.93]'
                        }
                        `}
                    onClick={() => setLiveNFT(1)}
                >
                    {featuredLiveAuctionCardJSXArray[0]}
                </div>
                <div
                    className={`absolute left-0 top-0 w-full h-full bg-amber-500 transition-transform ease-in duration-200 cursor-pointer rounded-3xl overflow-hidden
                            ${liveNFT === 2 ?
                            'z-30 hover:scale-[1.03]' :
                            liveNFT === 3 ?
                                'z-10 translate-x-[30%] scale-[0.8] hover:scale-[0.83]' :
                                'z-20 translate-x-[15%] scale-[0.9] hover:scale-[0.93]'
                        }
                        `}
                    onClick={() => setLiveNFT(2)}
                >
                    {featuredLiveAuctionCardJSXArray[1]}
                </div>
                <div
                    className={`absolute left-0 top-0 w-full h-full bg-amber-700 transition-transform ease-in duration-200 cursor-pointer rounded-3xl overflow-hidden 
                            ${liveNFT === 3 ?
                            'z-30 hover:scale-[1.03]' :
                            liveNFT === 1 ?
                                'z-10 translate-x-[30%] scale-[0.8] hover:scale-[0.83]' :
                                'z-20 translate-x-[15%] scale-[0.9] hover:scale-[0.93]'
                        }
                        `}
                    onClick={() => setLiveNFT(3)}
                >
                    {featuredLiveAuctionCardJSXArray[2]}
                </div>
                <div className="absolute top-[50%] h-1/4 w-fit z-30 -translate-x-[50%]">
                    <img
                        src="./src/assets/images/home/live_auction.png"
                        className="h-full aspect-square animate-spin-slow"
                    />
                </div>
            </div>
        </>
    )
}


function generatefeaturedLiveAuctionCardJSXArray(featuredLiveAuctionNFT: featuredLiveAuctionNFT) {
    return featuredLiveAuctionNFT.map((NFT) => {
        return (
            <>
                <div className="relative h-full w-full">
                    <img src={NFT.NFTImage} className="h-full w-full object-cover" />
                    <div className="absolute top-0 h-full w-full p-6 flex flex-col">
                        <div className="text-white font-DMSans text-2xl font-bold">
                            {NFT.name}
                        </div>
                        <div className="mt-4">
                            <img src={NFT.userImage} className="inline-block h-9 rounded-full" />
                            <span className="inline-block text-lg font-DMSans text-white ml-3 font-bold tracking-wider">{NFT.user}</span>
                        </div>
                        <div className="relative flex-grow">
                            <div className={`absolute py-2 px-5 bottom-0 h-16 w-full rounded-xl backdrop-blur-lg ${NFT.theme === "light" ? 'bg-white/30' : 'bg-gray-600/20'} grid grid-cols-3`}>
                                <div className="h-full col-span-1 flex flex-col justify-around">
                                    <p className="text-white font-DMSans text-xs tracking-tight">Current Bid</p>
                                    <span className="text-white font-DMSans tracking-tight flex items-center whitespace-nowrap">
                                        <FaEthereum className="inline-block text-xl mr-2" />
                                        {NFT.CurrentBid}
                                    </span>
                                </div>
                                <div className="h-full col-start-3 flex flex-col justify-around">
                                    <p className="text-white font-DMSans text-xs tracking-tight">Ends In</p>
                                    <span className="text-white font-DMSans tracking-tight flex items-center whitespace-nowrap">
                                        12h 42m 42s
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })
}
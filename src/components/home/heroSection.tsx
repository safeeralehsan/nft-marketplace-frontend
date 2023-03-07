export default function HeroSection() {

    const liveStats = [
        {
            statName: "Artwork",
            count: 98
        },
        {
            statName: "Auction",
            count: 12
        },
        {
            statName: "Artist",
            count: 15
        },
    ]

    return (
        <>
            <div className="flex justify-center">
                <div className="py-16 max-w-[90%] h-fit w-full grid md:grid-cols-7 grid-cols-1">
                    <div className="md:col-span-4 col-span-1 flex flex-col justify-center">
                        <span className="text-5xl font-IntegralCF">
                            DISCOVER, AND COLLECT DIGITAL ART NFTS
                        </span>
                        <span className="my-8 text-xl text-gray-700 font-DMSans w-3/5">
                            Digital marketplace for crypto collectibles and non-fungible tokens (NFTSs). Buy, Sell, and discover exclusive digital assets.
                        </span>
                        <button className='py-3 px-8 mx-2 w-fit bg-purple-900 border-2 border-purple-900 text-white font-DMSans rounded-full font-bold text-xl tracking-wider hover:bg-purple-800 transition-colors duration-300'>
                            Explore Now
                        </button>
                        <span className="w-full flex justify-start mt-8">
                            {liveStats.map((stat) => {
                                return (
                                    <>
                                        <span className="flex flex-col mr-5">
                                            <span className="text-3xl font-IntegralCF tracking-wider">{stat.count.toString()}K+</span>
                                            <span className="text-xl text-gray-700 font-DMSans">{stat.statName}</span>
                                        </span>
                                    </>
                                )
                            })}
                        </span>
                    </div>
                    <div className="md:col-span-3 col-span-1"></div>
                </div>
            </div>
        </>
    )
}
import { CiSearch } from 'react-icons/ci'

export default function Navbar() {
    return (
        <div className="h-28 border-b-slate-100 border-b-[1px] flex items-center justify-center">
            <div className="max-w-[90%] h-full w-full grid md:grid-cols-12 grid-cols-5">
                <span className="col-span-2 font-IntegralCF text-purple-900 text-2xl h-full flex items-center">NFTERS</span>
                <span className="col-span-4 font-DMSans font-bold text-base h-full w-full hidden lg:flex items-center justify-around">
                    <p className='cursor-pointer hover:text-purple-700 transition-colors duration-200'>Marketplace</p>
                    <p className='cursor-pointer hover:text-purple-700 transition-colors duration-200'>Resource</p>
                    <p className='cursor-pointer hover:text-purple-700 transition-colors duration-200'>About</p>
                </span>
                <span className="lg:col-span-6 col-span-8 hidden md:flex items-center justify-end">
                    <span className='mx-3 flex items-center border-2 px-3 py-2 rounded-full focus-within:border-purple-700 transition-colors duration-300'>
                        <input placeholder="Search" className="font-DMSans focus:outline-none" />
                        <CiSearch className='text-2xl text-gray-500' />
                    </span>
                    <button className='py-3 px-8 mx-2 bg-purple-900 border-2 border-purple-900 text-white font-DMSans rounded-full font-bold text-xs tracking-wider hover:bg-purple-800 transition-colors duration-300'>
                        Upload
                    </button>
                    <button className='py-3 px-8 mx-2 bg-white text-purple-900 border-2 border-purple-900 font-DMSans rounded-full font-bold text-xs tracking-wider whitespace-nowrap hover:bg-purple-100 transition-colors duration-300'>
                        Connect Wallet
                    </button>
                </span>
                <span className='lg:hidden md:col-span-1 col-start-5 col-end-5'>
                    sup
                </span>
            </div>
        </div>
    )
}
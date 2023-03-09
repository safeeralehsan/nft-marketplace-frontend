import { useState, useEffect } from 'react';
import { CiSearch } from 'react-icons/ci'
import { AiOutlineMenu } from 'react-icons/ai'

type Props = {
    openMenuDrawer: boolean,
    setOpenMenuDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navbar({ openMenuDrawer, setOpenMenuDrawer }: Props) {
    const [searchInput, setSearchInput] = useState('')

    return (
        <div className="relative h-28 border-b-slate-100 border-b-[1px] flex items-center justify-center">
            <div className="lg:max-w-[70%] max-w-[80%] h-full w-full grid md:grid-cols-12 grid-cols-5">
                <span className="col-span-2 font-IntegralCF text-purple-900 text-2xl h-full flex items-center">NFTERS</span>
                <span className="col-span-4 font-DMSans font-bold text-base h-full w-full hidden xl:flex items-center justify-around">
                    <p className='cursor-pointer hover:text-purple-700 transition-colors duration-200'>Marketplace</p>
                    <p className='cursor-pointer hover:text-purple-700 transition-colors duration-200'>Resource</p>
                    <p className='cursor-pointer hover:text-purple-700 transition-colors duration-200'>About</p>
                </span>
                <span className="xl:col-span-6 col-span-9 hidden md:flex md:flex-row items-center justify-end w-full">
                    <span className='mr-3 max-lg:hidden flex flex-row items-center justify-around border-2 px-3 py-2 rounded-full focus-within:border-purple-700 transition-colors duration-300'>
                        <input
                            placeholder="Search"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            className="font-DMSans focus:outline-none" />
                        <CiSearch className='text-2xl text-gray-500' />
                    </span>
                    <button className='py-3 px-8 mr-3 bg-purple-900 border-2 border-purple-900 text-white font-DMSans rounded-full font-bold text-xs tracking-wider hover:bg-white hover:text-purple-900 transition-colors duration-300'>
                        Upload
                    </button>
                    <button className='py-3 px-8 mr-3 bg-purple-900 text-white border-2 border-purple-900 font-DMSans rounded-full font-bold text-xs tracking-wider whitespace-nowrap hover:bg-white hover:text-purple-900 transition-colors duration-300'>
                        Connect Wallet
                    </button>
                </span>
                <span
                    onClick={() => setOpenMenuDrawer(!openMenuDrawer)}
                    className={`relative z-50 xl:hidden max-md:col-span-1 max-md:col-start-5 flex items-center justify-center cursor-pointer transition-transform duration-200 ${openMenuDrawer ? 'rotate-90' : ''}`}
                >
                    <AiOutlineMenu className={`text-xl transition-all duration-500 ${openMenuDrawer ? 'text-white' : 'text-black'}`} />
                </span>
            </div>

            <div className={`xl:hidden absolute z-40 right-0 top-0 w-[75vw] md:w-[50vw] h-screen bg-purple-900 flex flex-col justify-center overflow-hidden
                    transition-transform duration-500 ${openMenuDrawer ? '' : 'translate-x-[100%]'}`}
            >
                <span className='mx-auto my-5 w-9/12 flex flex-row items-center justify-around border-2 px-3 py-2 rounded-full focus-within:border-purple-700 transition-colors duration-300'>
                    <input
                        placeholder="Search"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className="font-DMSans focus:outline-none bg-purple-900 text-white" />
                    <CiSearch className='text-2xl text-white' />
                </span>
                <p className='cursor-pointer text-white text-center bg-purple-600 hover:text-purple-900 hover:bg-white font-DMSans max-md:text-2xl text-3xl font-bold my-2 transition-colors duration-200'>Upload</p>
                <p className='cursor-pointer text-white text-center bg-purple-600 hover:text-purple-900 hover:bg-white font-DMSans max-md:text-2xl text-3xl font-bold my-2 transition-colors duration-200'>Connect Wallet</p>
                <p className='cursor-pointer text-white hover:text-purple-900 hover:bg-white font-DMSans max-md:text-xl text-2xl font-bold my-1 pl-10 transition-colors duration-200'>Marketplace</p>
                <p className='cursor-pointer text-white hover:text-purple-900 hover:bg-white font-DMSans max-md:text-xl text-2xl font-bold my-1 pl-10 transition-colors duration-200'>Resource</p>
                <p className='cursor-pointer text-white hover:text-purple-900 hover:bg-white font-DMSans max-md:text-xl text-2xl font-bold my-1 pl-10 transition-colors duration-200'>About</p>
            </div>
        </div>
    )
}
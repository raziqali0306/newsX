import { useCallback, useEffect, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import debounce from 'lodash.debounce';

function Navbar({setSelectedTopic}) {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    
    const updateTime = () => {  
        setTime(new Date().toLocaleTimeString());
        setTimeout(() => {
            updateTime();
        }, 1000);
    }

    
  const updateSearchText = useCallback(
    debounce((value) => setSelectedTopic(value), 500),
    []
  );

    const toggleSearchBox = () => {
        let panel = document.getElementsByClassName('search-box')[0];
        if(panel.classList.contains('block')) {
            panel.classList.replace('block', 'hidden');
        }
        else {
            panel.classList.replace('hidden', 'block');
        }
    }

    useEffect(() => {
        updateTime();
    }, [])

    return (
        <div className="fixed top-0 bg-primaryGray shadow-lg w-full z-50" > 
            <div className='flex relative items-center px-4 sm:px-12 md:px-24 lg:px-36 xl:px-40 py-4 tracking-wider h-[92px] w-full'>
                {/* small screen search */}
                <div className='md:hidden h-full flex items-center' onClick={() => {
                    toggleSearchBox();
                }}>
                    <BiSearchAlt className='w-8 h-8 text-darkBlue'/>
                </div>

                <div className='search-box hidden md:hidden absolute w-full top-full left-0 shadow-lg border-t'>
                    <input type="text" placeholder='Search for News...' className='bg-secondaryBlue focus:outline-none w-full px-4 py-2' onChange={(e) => updateSearchText(e.target.value)} />  
                </div>

                {/* Branding */}
                <div className='grid mx-auto md:mx-0 md:mr-4 cursor-pointer text-center md:text-left text-darkBlue'
                    onClick={() => {
                        window.location.href = '/';
                    }}
                >
                    <div className="text-3xl uppercase font-medium">news<span className="text-4xl font-extrabold text-primaryOrange ml-1">x</span></div>
                    <div className='-mt-1 text-sm'>{new Date().toLocaleDateString('zh-Hans-CN')} <span className='font-extrabold text-xl'>|</span> {time}</div>
                </div>

                {/* Search Box */}
                <div className='hidden md:flex gap-1 items-center bg-secondaryBlue px-4 py-3 rounded-sm mx-auto w-1/4'>
                    <div className='w-full'>
                        <input type="text" placeholder='Search for News...' className='bg-secondaryBlue focus:outline-none w-full' onChange={(e) => updateSearchText(e.target.value)} />
                    </div>
                    <BiSearchAlt className='w-8 h-8 text-[#0b1121]'/>
                </div>

                {/* Login info */}
                {
                    localStorage.getItem('newsx-details') ? 
                        <Link to='/profile' >
                            <div className='flex gap-1 items-center h-full text-darkBlue'>
                                <BiUser className="h-6 w-6" />
                                <p className='hidden md:block'>My Profile</p>
                                <AiOutlineRight className='h-6 w-6 rotate-90 ml-4'/>
                            </div>
                        </Link>
                        : 
                        <div className='px-4 py-2 bg-primaryBlue text-white'>
                            <Link to="/login">Login</Link>
                        </div>
                }
            </div>
        </div>
    );
}

export default Navbar;
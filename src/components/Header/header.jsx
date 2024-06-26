//import React from 'react';
import Subtract from '../../../public/img/Header/Subtract.png'; // Utilisez le chemin réel ici
import './Header.css'; // Importation du fichier CSS pour le composant Header

const pragraph = { color: '#909090' };


export const Header = () => {
    return (
       <>
            <div className=' px-4'>
                <div className='container mx-auto flex py-14'>
                    <div className='w-1/2  mt-14 '>
                        <h1 className="text-left text-7xl font-bold pt-20">Discover your favorite place <br />with us</h1>
                        <p className='mt-6 text-left text-gray-300'>
                            Your journey begins here with our curated travel experiences. <br />
                            Discover new horizons, create lasting memories, and explore 
                            the <br /> world with our expertly crafted itineraries.
                        </p >

                        <div className='flex justify-between rounded-2xl  border border-gray-400 mt-10 w-auto  px-2 pt-4 pb-4'>

                            <div className='grid place-content-center w-1/3 pl-5'>
                                 
                                <div className='flex items-center justify-center gap-3'>
                                    <div className='pb-4'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.63004 3.57005C7.80942 3.47221 8.00004 3.62274 8.00004 3.82707V17.3829C8.00004 17.6061 7.84762 17.7949 7.65024 17.8992C7.64347 17.9028 7.63673 17.9064 7.63004 17.9101L5.28004 19.2501C3.64004 20.1901 2.29004 19.4101 2.29004 17.5101V7.78005C2.29004 7.15005 2.74004 6.37005 3.30004 6.05005L7.63004 3.57005Z" fill="#35AFF4"/>
                                        <path d="M14.7219 6.10235C14.8922 6.1867 15 6.36034 15 6.55041V19.7036C15 20.072 14.615 20.3139 14.283 20.154L10.033 18.1064C9.85998 18.0231 9.75 17.848 9.75 17.656V4.44565C9.75 4.07479 10.1396 3.833 10.4719 3.99759L14.7219 6.10235Z" fill="#35AFF4"/>
                                        <path d="M22 6.49006V16.2201C22 16.8501 21.55 17.6301 20.99 17.9501L17.4986 19.951C17.1653 20.1421 16.75 19.9014 16.75 19.5172V6.33038C16.75 6.15087 16.8462 5.98513 17.0021 5.89615L19.01 4.75006C20.65 3.81006 22 4.59006 22 6.49006Z" fill="#35AFF4"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <span>Locations</span>
                                        <span style={pragraph}>e.g Bali, Indonesia</span>
                                    </div>
                                </div>
                                

                            </div>

                            <div className=' grid place-content-center w-1/3 pl-5 '>
                                
                                <div className='flex items-center justify-center gap-3'>
                                    <div className='pb-4'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.75 3.56006V2.00006C16.75 1.59006 16.41 1.25006 16 1.25006C15.59 1.25006 15.25 1.59006 15.25 2.00006V3.50006H8.74999V2.00006C8.74999 1.59006 8.40999 1.25006 7.99999 1.25006C7.58999 1.25006 7.24999 1.59006 7.24999 2.00006V3.56006C4.54999 3.81006 3.23999 5.42006 3.03999 7.81006C3.01999 8.10006 3.25999 8.34006 3.53999 8.34006H20.46C20.75 8.34006 20.99 8.09006 20.96 7.81006C20.76 5.42006 19.45 3.81006 16.75 3.56006Z" fill="#35AFF4"/>
                                        <path d="M20 9.84009H4C3.45 9.84009 3 10.2901 3 10.8401V17.0001C3 20.0001 4.5 22.0001 8 22.0001H16C19.5 22.0001 21 20.0001 21 17.0001V10.8401C21 10.2901 20.55 9.84009 20 9.84009ZM9.21 18.2101C9.11 18.3001 9 18.3701 8.88 18.4201C8.76 18.4701 8.63 18.5001 8.5 18.5001C8.37 18.5001 8.24 18.4701 8.12 18.4201C8 18.3701 7.89 18.3001 7.79 18.2101C7.61 18.0201 7.5 17.7601 7.5 17.5001C7.5 17.2401 7.61 16.9801 7.79 16.7901C7.89 16.7001 8 16.6301 8.12 16.5801C8.36 16.4801 8.64 16.4801 8.88 16.5801C9 16.6301 9.11 16.7001 9.21 16.7901C9.39 16.9801 9.5 17.2401 9.5 17.5001C9.5 17.7601 9.39 18.0201 9.21 18.2101ZM9.42 14.3801C9.37 14.5001 9.3 14.6101 9.21 14.7101C9.11 14.8001 9 14.8701 8.88 14.9201C8.76 14.9701 8.63 15.0001 8.5 15.0001C8.37 15.0001 8.24 14.9701 8.12 14.9201C8 14.8701 7.89 14.8001 7.79 14.7101C7.7 14.6101 7.63 14.5001 7.58 14.3801C7.53 14.2601 7.5 14.1301 7.5 14.0001C7.5 13.8701 7.53 13.7401 7.58 13.6201C7.63 13.5001 7.7 13.3901 7.79 13.2901C7.89 13.2001 8 13.1301 8.12 13.0801C8.36 12.9801 8.64 12.9801 8.88 13.0801C9 13.1301 9.11 13.2001 9.21 13.2901C9.3 13.3901 9.37 13.5001 9.42 13.6201C9.47 13.7401 9.5 13.8701 9.5 14.0001C9.5 14.1301 9.47 14.2601 9.42 14.3801ZM12.71 14.7101C12.61 14.8001 12.5 14.8701 12.38 14.9201C12.26 14.9701 12.13 15.0001 12 15.0001C11.87 15.0001 11.74 14.9701 11.62 14.9201C11.5 14.8701 11.39 14.8001 11.29 14.7101C11.11 14.5201 11 14.2601 11 14.0001C11 13.7401 11.11 13.4801 11.29 13.2901C11.39 13.2001 11.5 13.1301 11.62 13.0801C11.86 12.9701 12.14 12.9701 12.38 13.0801C12.5 13.1301 12.61 13.2001 12.71 13.2901C12.89 13.4801 13 13.7401 13 14.0001C13 14.2601 12.89 14.5201 12.71 14.7101Z" fill="#35AFF4"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <span>Date and time</span>
                                        <p className='text-gray-300'>MM/DD/YYYY</p>
                                    </div>
                                </div>
                                
                            </div>

                            <div className='flex justify-center items-center mr-3 w-12 rounded-lg bg-blue-400'>
                                <img src="/public/img/Header/search.png" alt="" className=''/>
                            </div>
                        </div>

                    </div>

                    <div className='w-1/2 pl-20'>
                        <img src={Subtract} alt="Subtract image" className='' />
                    </div>
                </div>
            </div>

       </>
    );
}

export default Header;

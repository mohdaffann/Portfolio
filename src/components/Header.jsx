import React from "react";

function Header() {
    const handleScroll = (e, target) => {
        e.preventDefault();
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }
    }
    return (
        <>
            <header className="hidden md:block fixed top-1 left-0 right-0 z-50">
                <div className="mx-4 lg:mx-8 xl:mx-72">
                    <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-full shadow-lg">
                        <nav className="flex items-center justify-between py-3 px-4">
                            <span className="font-extrabold font-serif text-base">&lt;Affan/&gt;</span>
                            <ul className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8 xl:space-x-12">
                                <li>
                                    <a
                                        href="#about"
                                        className="text-gray-800 hover:text-gray-500 font-medium transition-colors duration-200 text-sm lg:text-base whitespace-nowrap"
                                        onClick={(e) => handleScroll(e, 'about')}

                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#skills"
                                        className="text-gray-800 hover:text-gray-500 font-medium transition-colors duration-200 text-sm lg:text-base whitespace-nowrap"
                                        onClick={(e) => handleScroll(e, 'skills')}
                                    >
                                        Skills
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#projects"
                                        className="text-gray-800 hover:text-gray-500 font-medium transition-colors duration-200 text-sm lg:text-base whitespace-nowrap"
                                        onClick={(e) => handleScroll(e, 'projects')}
                                    >
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        className="text-gray-800 hover:text-gray-500 font-medium transition-colors duration-200 text-sm lg:text-base whitespace-nowrap"
                                        onClick={(e) => handleScroll(e, 'contact')}
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <header className="md:hidden fixed bottom-1 left-4 right-4 z-50">
                <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg">
                    <nav className="py-3 px-2">
                        <ul className="flex items-center justify-around">
                            <li onClick={(e) => handleScroll(e, 'about')} className="cursor-pointer">
                                <img src="https://cdn-icons-png.freepik.com/512/44/44428.png?uid=R206061452&ga=GA1.1.27171285.1750180696" className="w-6 h-6" />
                            </li>
                            <li onClick={(e) => handleScroll(e, 'skills')} className="cursor-pointer">
                                <img src="https://cdn-icons-png.freepik.com/512/1979/1979375.png?uid=R206061452&ga=GA1.1.27171285.1750180696" className="w-6 h-6" />
                            </li>
                            <li onClick={(e) => handleScroll(e, 'projects')} className="cursor-pointer">
                                <img src="https://cdn-icons-png.freepik.com/512/9828/9828664.png?uid=R206061452&ga=GA1.1.27171285.1750180696" className="w-6 h-6" />
                            </li>
                            <li onClick={(e) => handleScroll(e, 'contact')} className="cursor-pointer ">
                                <img src="https://cdn-icons-png.freepik.com/512/1250/1250973.png?uid=R206061452&ga=GA1.1.27171285.1750180696" className="w-6 h-6" />
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;

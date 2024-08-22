import React from 'react'

const About = () => {
    return (
        <nav>
            <div className="bg-smarter7 h-[46px] flex justify-between">
                <div className="flex justify-center items-center">
                    <div>
                        <ul className="flex gap-[33px] text-white">
                            <li>Home</li>
                            <li>Belajar</li>
                            <li>Tentang Kami</li>
                            <a href={route('logout')} method="post"><li>Logout</li></a>
                        </ul>
                    </div>
                </div>
                <div></div>
            </div>
        </nav>
    );
};

export default About

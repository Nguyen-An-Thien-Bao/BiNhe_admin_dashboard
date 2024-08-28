'use client';
import React from 'react';
import webRoutes from '@/routes/webRoutes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DarkMode from '../Sidebar/DarkMode';

function Sidebar(): React.ReactElement {
    const pathname = usePathname();
    return (
        <aside className="fixed top-0 left-0 bottom-0 min-w-40 min-h-full bg-[#232528]">
            <div className="px-12 py-4">
                <div>
                    <svg viewBox="0 0 100 143.41987535931196">
                        <g
                            transform="matrix(2.879678637425496,0,0,2.879678637425496,-10.518888993125303,-5.625451625015186)"
                            fill="#ffffff"
                        >
                            <path d="M18.809 25.098 c3.1836 0.87891 5.3125 2.9688 5.3125 6.9922 c0 4.7656 -2.8906 7.9102 -8.8477 7.9102 l-11.621 0 l0 -28.223 l9.1406 0 c6.0938 0 9.2969 2.9297 9.2969 7.7344 c0 2.4805 -1.0742 4.5117 -3.2813 5.5859 z M12.852 16.641 l-3.5547 0 l0 6.6406 l3.8086 0 c2.5 0 3.5938 -1.4844 3.5938 -3.3984 c0 -1.875 -1.2305 -3.2422 -3.8477 -3.2422 z M14.18 34.9805 c3.1641 0 4.2578 -1.6992 4.2578 -3.5352 c0 -1.875 -1.0742 -3.6523 -4.375 -3.6523 l-4.7656 0 l0 7.1875 l4.8828 0 z M30.48829375 9.140999999999998 l5.1172 -7.1875 l2.7734 1.9727 l-4.4336 5.2148 l-3.457 0 z M29.33589375 40 l0 -28.223 l5.8594 0 l0 28.223 l-5.8594 0 z"></path>
                        </g>
                        <g transform="matrix(0.9510087762179603,0,0,0.9510087762179603,5.2631720813855765,124.39950982837372)">
                            <path
                                d="M11.465 5.888999999999999 l2.9199 0 l0 14.111 l-3.3887 0 l-6.25 -10.088 l0 10.088 l-2.9199 0 l0 -14.111 l3.3496 0 l6.2891 10.029 l0 -10.029 z M49.0579609375 5.888999999999999 l2.9297 0 l0 14.111 l-2.9297 0 l0 -5.8008 l-5.9668 0 l0 5.8008 l-2.9297 0 l0 -14.111 l2.9297 0 l0 5.7617 l5.9668 0 l0 -5.7617 z M85.9475 8.467 l-5.2344 0 l0 3.2031 l4.6387 0 l0 2.5488 l-4.6387 0 l0 3.1934 l5.2344 0 l0 2.5879 l-8.1836 0 l0 -14.111 l8.1836 0 l0 2.5781 z"
                                fill="#ffffff"
                            ></path>
                        </g>
                    </svg>
                </div>
            </div>
            {webRoutes.map((ele, idx) => {
                const Icon = ele.Icon;
                return (
                    <Link
                        key={idx}
                        href={ele.path}
                        className={`${
                            pathname === ele.path ? 'bg-green-600' : 'bg-[#232528]'
                        } w-full capitalize flex items-center py-2 px-4 my-4 transition-colors duration-75`}
                    >
                        <Icon className="mr-3" />
                        <span>{ele.title}</span>
                    </Link>
                );
            })}
            <DarkMode />
        </aside>
    );
}

export default Sidebar;

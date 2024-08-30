import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Breadcrumbs } from '@mui/material';
import Link from 'next/link';

function BreadCrumb({ title }: { title: string }): React.ReactNode {
    return (
        <div className="py-8 md:grid md:grid-cols-12 md:py-10 lg:py-12 font-bold">
            <div className="md:col-span-6 w-full ">
                <h3 className="uppercase text-[22px] md:text-[24px]">{title}</h3>
                <small className="mt-3 text-[12px] tracking-wide">BiNhe Admin Panel</small>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-6 md:flex md:justify-end md:items-center">
                <Breadcrumbs aria-label="breadcrumb" className="dark:text-white text-black">
                    <Link href="/" className="hover-effect">
                        <FaHome />
                    </Link>
                    <Link href="/" aria-current="page" className="capitalize hover-effect">
                        {title}
                    </Link>
                </Breadcrumbs>
            </div>
        </div>
    );
}

export default BreadCrumb;

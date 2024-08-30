import CardBox from '@/components/CardBox';
import React from 'react';
import BreadCrumb from '@/components/BreadCrumb';

export type cardTypes = {
    field: string;
    profit: number;
};

const mockData = [
    {
        field: 'Earnings',
        profit: 6659,
    },
    {
        field: 'Products',
        profit: 9856,
    },
    {
        field: 'New Vendors',
        profit: 5631,
    },
    {
        field: 'Messages',
        profit: 893,
    },
];

function Home() {
    return (
        <div>
            <BreadCrumb title="dashboard" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {mockData.map((ele, idx) => {
                    let boxType;
                    switch (idx) {
                        case 0:
                            boxType = 'primary';
                        case 1:
                            boxType = 'secondary';
                        case 2:
                            boxType = 'danger';
                        case 3:
                            boxType = 'warning';
                    }
                    return <CardBox boxType={boxType} data={ele} key={idx} />;
                })}
            </div>
        </div>
    );
}

export default Home;

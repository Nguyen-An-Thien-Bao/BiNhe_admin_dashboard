import React from 'react';
import { IoChatboxOutline } from 'react-icons/io5';

const mockData = {
    field: 'Earnings',
    profit: 8000,
};

function CardBox(): React.ReactElement {
    return (
        <div className="flex h-[90px] p-[20px] bg-white shadow-md rounded-lg shadow-black">
            <div className="w-[50px] aspect-square rounded-full bg-[#F5BF69] relative">
                <IoChatboxOutline className="absolute text-2xl left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4" />
            </div>
            <div className="ml-8 text-black">
                <span className="text-sm">{mockData.field}</span>
                <h3>
                    <span className="text-3xl">$ </span>
                    <span className="text-3xl">{mockData.profit}</span>
                    <span style={{ fontVariant: 'small-caps' }}> this month</span>
                </h3>
            </div>
        </div>
    );
}

export default CardBox;

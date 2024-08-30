import React from 'react';
import { IoChatboxOutline } from 'react-icons/io5';
import { cardTypes } from '@/app/page';

function CardBox({ data, boxType = 'primary' }: { data: cardTypes; boxType?: string }): React.ReactElement {
    let textBoxColor = '';
    let bgBoxColor = '';

    switch (boxType) {
        case 'primary':
            textBoxColor = 'text-[#5DC6C8]';
            bgBoxColor = 'bg-[#5DC6C8]';
        case 'danger':
            textBoxColor = 'text-[#A5A5A5]';
            bgBoxColor = 'bg-[#A5A5A5]';
        case 'secondary':
            textBoxColor = 'text-[#EC5A46]';
            bgBoxColor = 'bg-[#EC5A46]';
        case 'warning':
            textBoxColor = 'text-[#F5BF69]';
            bgBoxColor = 'bg-[#F5BF69]';
    }

    return (
        <div
            className={`flex h-[90px] lg:h-full p-[20px] bg-white dark:bg-primary-black shadow-md rounded-lg shadow-customize`}
        >
            <div className={`w-[50px] shrink-0 h-[50px] rounded-full relative ${bgBoxColor}`}>
                <IoChatboxOutline className="absolute text-2xl left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4" />
            </div>
            <div className={`ml-8 ${textBoxColor}`}>
                <span className="text-sm">{data.field}</span>
                <h3>
                    <span className="text-2xl text-nowrap">$ {data.profit}</span>
                    <span className="text-sm" style={{ fontVariant: 'small-caps' }}>
                        {' '}
                        this month
                    </span>
                </h3>
            </div>
        </div>
    );
}

export default CardBox;

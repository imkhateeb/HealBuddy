import React from 'react';

export default function Test() {
    return (
        <div className='w-full h-screen flex'>
            <div className='bg-black w-1/2 flex flex-col overflow-y-auto p-5'>
                <h1 className='text-lightGray'>lightGray</h1>
                <h1 className='text-primary'>primary</h1>
                <h1 className='text-secColor'>secColor</h1>
                <h1 className='text-navColor'>navColor</h1>

            </div>
            <div className='h-screen w-1/2 flex flex-col'>
                <div className='bg-mainColor h-3/4 w-full p-5'>mainColor</div>
                <div className='bg-secondaryColor h-3/4 w-full p-5'>secondaryColor</div>
                <div className='bg-blackOverlay h-3/4 w-full p-5'>blackOverlay</div>
                <div className='bg-blackOverlay2 h-3/4 w-full p-5'>blackOverlay2</div>
            </div>

        </div>
    )
}

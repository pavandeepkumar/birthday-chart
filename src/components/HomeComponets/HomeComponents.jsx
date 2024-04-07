import React from 'react'

const HomeComponents = () => {
    return (
        <div className='text-black bg-[#eaeae8] h-screen  py-20 px-40'>
            <div className='bg-[#e8dee4] w-full h-full border-[3px] rounded-2xl border-[#c3bcbe]'>
                <h2 className='text-center text-2xl text-[#533272] font-semibold mx-6 py-3 border-b-[3px] border-[#c3bcbe]'>Birth Chart</h2>
                <div className='flex justify-center items-center h-full'>
                <div className='w-[439px] absolute left-[580px] bg-white flex rotate-45  border-[1px] border-[#a39a9d]'></div>
                <div className='w-[439px] absolute left-[580px] bg-white flex -rotate-45  border-[1px] border-[#a39a9d]'></div>
                    <div className='w-80 bg-white flex items-center justify-center h-80  border-[2px] border-[#a39a9d]'>
                
                    
                        <div className='w-[225px]  h-[225px]  border-[2px] rotate-45 border-[#a39a9d]'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComponents
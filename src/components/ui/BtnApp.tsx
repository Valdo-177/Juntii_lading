import { AppStore, GooglePlay } from '@/assets/svg'
import React from 'react'

interface IBtnApp {
    title: string;
    icon: 'GooglePlay' | 'AppStore'
}

const BtnApp = ({ icon = 'AppStore' }: IBtnApp) => {
    return (
        <div className='cursor-pointer hover:bg-[#019d6f] flex items-center gap-2 bg-[#00B27D] px-[15px] py-[9px] text-white w-[max-content] rounded-[10px] shadow-lg'>
            {icon == 'AppStore' ? <GooglePlay /> : <AppStore />}
            <span>proximamente en tiendas de apps</span>
        </div>
    )
}

export default BtnApp
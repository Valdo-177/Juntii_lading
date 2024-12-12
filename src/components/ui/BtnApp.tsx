import { AppStore, GooglePlay } from '@/assets/svg'
import React from 'react'
import { Button } from './button';

interface IBtnApp {
    title: string;
    icon: 'GooglePlay' | 'AppStore',
    onClick?: () => void;
}

const BtnApp = ({ icon = 'AppStore', title = 'proximamente en tiendas de apps', onClick }: IBtnApp) => {
    return (
        <Button 
        onClick={onClick}
        className='cursor-pointer hover:bg-[#019d6f] flex items-center gap-2 bg-[#00B27D] px-[15px] py-[9px] text-white w-[max-content] rounded-[10px] shadow-lg'>
            {icon == 'AppStore' ? <GooglePlay /> : <AppStore />}
            <span>{title}</span>
        </Button>
    )
}

export default BtnApp
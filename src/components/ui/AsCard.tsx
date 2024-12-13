"use client"
import React from 'react'
import { motion } from "framer-motion";

export interface IAsCard {
    row: 'Row1' | 'Row2' | 'none';
    title: string;
    description: string;
    number: string;
}



const AsCard = ({ data }: { data: IAsCard }) => {
    const { description, row, title, number } = data

    const Row2 = () => (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width={204}
            height={43}
            fill="none"
            initial={{ strokeDashoffset: 1000 }} // Empieza "oculto"
            animate={{ strokeDashoffset: 0 }} // Aparece progresivamente
            transition={{
                duration: 1, // Duración de la animación
                ease: "easeInOut",
            }}
        >
            <motion.path
                stroke="#fff"
                strokeDasharray="5 5"
                strokeWidth={1.5}
                d="M.481 10.258s92.3 71.528 195 0"
            />
            <motion.path
                stroke="#fff"
                strokeDasharray="4 4"
                strokeWidth={1.5}
                d="M180.7 3.476s19.116-5.527 20.938.734c1.822 6.261.455 12.736-5.462 21.605"
            />
        </motion.svg>
    );

    const Row1 = () => (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width={204}
            height={43}
            fill="none"
            initial={{ strokeDashoffset: 1000 }} // Empieza "oculto"
            animate={{ strokeDashoffset: 0 }} // Aparece progresivamente
            transition={{
                duration: 1, // Duración de la animación
                ease: "easeInOut",
            }}
        >
            <motion.path
                stroke="#fff"
                strokeDasharray="5 5"
                strokeWidth={1.5}
                d="M1 32.72s92.3-71.527 195 0"
            />
            <motion.path
                stroke="#fff"
                strokeDasharray="4 4"
                strokeWidth={1.5}
                d="M181.219 39.499s19.115 5.526 20.937-.735c1.822-6.26.455-12.735-5.462-21.605"
            />
        </motion.svg>
    );
    return (
        <div
            className='w-[18rem] flex flex-col items-center'
        >
            <div className='flex items-center mb-5 gap-4 w-[max-content]'>
                <motion.div
                    initial={{
                        borderRadius: '1.5rem'
                    }}
                    whileHover={{
                        borderRadius: '3rem'
                    }}
                    transition={{
                        duration: 0.2,
                        ease: 'easeInOut'
                    }}
                    className='bg-white cursor-pointer text-primary w-[4rem] h-[4rem] flex items-center justify-center'>
                    <span className='text-2xl'>{number}</span>
                </motion.div>
                <div className='hidden sm:block'>
                    {row == 'Row1' ? <Row1 /> : row == 'Row2' ? <Row2 /> : <></>}
                </div>
            </div>
            <span className='font-bold text-xl'>{title}</span>
            <p className='text-sm font-light text-center sm:text-start'>{description}</p>
        </div>
    )
}

export default AsCard
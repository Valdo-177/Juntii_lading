"use client"
import React from 'react'
import BtnApp from './BtnApp'
import Image from 'next/image'
import juntiiApp from '@/assets/img/PhoneMockupHero.png'
import { HeroBg, Patter } from '@/assets/svg'
import { motion } from "motion/react"


const HeroSection = () => {
    return (
        <section className='px-4 sm:px-0 bg-primary relative w-full h-[70pc] sm:h-[58pc] flex sm:items-end items-center justify-center text-white overflow-hidden rounded-br-[15pc]'>
            <div className='absolute scale-[0.89] -top-[17rem] left-0 -z-[3px]'>
                <HeroBg />
            </div>
            <div className='flex flex-col sm:flex-row absolute z-10 items-start sm:max-w-[80rem] w-[21rem] sm:min-w-[80rem] sm:h-[790px]'>
                <motion.div
                    initial={{
                        opacity: 0,
                        translateY: -10
                    }}
                    animate={{
                        opacity: 1,
                        translateY: 0
                    }}
                    transition={{
                        delay: 0, 
                        duration: 0.5, 
                        ease: "easeOut",
                    }}
                    className='flex flex-col gap-3 mt-12'>
                    <h1 id='GetApp' className='font-bold sm:text-[70px] text-4xl leading-[40px] text-center sm:text-start sm:leading-[80px] w-full sm:w-[762px]'>¡Transforma tu forma de pedir comida a domicilio con Juntii!</h1>
                    <p className='text-lg text-center sm:text-start'>Pide en comunidad, ahorra más, y cuida el planeta.</p>
                    <div className='flex items-center gap-3 flex-col sm:flex-row'>
                        <BtnApp icon='AppStore' title='Descargar en App Store' />
                        <BtnApp icon='GooglePlay' title='Disponible en Google Play' />
                    </div>
                </motion.div>
                <div className='relative'>
                    <motion.div
                        initial={{
                            opacity: 0,
                            translateX: 10,
                        }}
                        animate={{
                            opacity: 1,
                            translateX: 0,
                        }}
                    >
                        <motion.div
                            className="absolute right-0 -top-[6rem] rotate-12 -z-20 opacity-[0.4]"
                            animate={{
                                rotate: [12, 15, 10, 12], // Keyframes para rotar
                            }}
                            transition={{
                                duration: 4, // Duración del ciclo
                                repeat: Infinity, // Repetición infinita
                                ease: "easeInOut", // Suavidad
                            }}
                        >
                            <Patter />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            translateX: -10
                        }}
                        animate={{
                            opacity: 1,
                            translateX: 0
                        }}
                    >
                        <Image src={juntiiApp} alt='Imagen de precentacion de la aplicacion de Juntii' className='h-full ' />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
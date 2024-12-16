"use client"
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AsCard from './AsCard';
import DataSource from '@/source/DataSource';
import Image from 'next/image';
import movil from '@/assets/img/PhoneMockup1.png';
import { HeroBg } from '@/assets/svg';

const AsSection = () => {
    const { scrollY } = useScroll(); 
    const yMovement = useTransform(scrollY, [1000, 1558], ['10rem', '0rem']); 
    const {DataAsSection} = DataSource()

    
    return (
        <section className="pb-[12rem] overflow-hidden text-white w-full flex flex-col items-center">
            <div className="flex flex-col relative py-16 gap-7 items-center h-[77rem] sm:h-[65rem] bg-primary w-full">
                <HeroBg className="absolute" />
                <div className="px-4 sm:px-0 absolute flex flex-col items-center gap-7">
                    <span className="uppercase text-white font-normal tracking-[0.1rem]">
                        Cómo Funciona
                    </span>
                    <h2 className="sm:w-[510px] font-bold text-3xl text-center">
                        Así de fácil es usar Juntii
                    </h2>
                    <div className="flex items-center flex-col sm:flex-row gap-4 justify-center">
                        {DataAsSection.map((item, index) => (
                            <AsCard data={item} key={index} />
                        ))}
                    </div>
                </div>
                <motion.div
                    style={{ y: yMovement }} // Aplica el movimiento vertical
                    className="absolute -bottom-[12rem]"
                >
                    <Image src={movil} alt="" />
                </motion.div>
            </div>
        </section>
    );
};

export default AsSection;

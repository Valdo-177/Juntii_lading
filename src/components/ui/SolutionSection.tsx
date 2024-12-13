"use client"
import React from 'react'
import SolutionCard from './SolutionCard'
import { motion } from "motion/react"
import DataSource from '@/source/DataSource'

const SolutionSection = () => {

    const {DataSolutionSection} = DataSource()
    return (
        <section className='px-6 sm:px-4 flex flex-col items-center my-20'>
            <span className='uppercase text-primary font-semibold tracking-[0.1rem]'>Solución</span>
            <h2 className='sm:w-[510px] font-bold text-3xl text-center'>Con Juntii, pedir comida es más fácil, económico y sostenible.</h2>
            <motion.div
                initial={{
                    opacity: 0,
                    translateX: 10,
                }}
                whileInView={{
                    opacity: 1,
                    translateX: 0,
                }}
                viewport={{ once: true, amount: 0.3 }} // Activa animación al estar en vista
                className="flex items-start gap-4 mt-6 flex-col sm:flex-row"
            >
                {DataSolutionSection.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            translateY: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            translateY: 0,
                        }}
                        transition={{
                            delay: index * 0.2, // Escalonar animación
                            duration: 0.5, // Duración de cada animación
                            ease: "easeOut",
                        }}
                    >
                        <SolutionCard data={item} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default SolutionSection
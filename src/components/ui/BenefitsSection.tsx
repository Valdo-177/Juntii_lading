"use client"
import Image from 'next/image'
import React from 'react'
import movil from '@/assets/img/PhoneMockupHero.png'
import movil1 from '@/assets/img/PhoneMockup3.png'
import movil2 from '@/assets/img/PhoneMockup2.png'
import { motion } from 'framer-motion';


const BenefitsSection = () => {
    return (
        <section className='px-4 sm:px-0 hidden sm:flex flex-col items-center mb-10 '>
            <div className='sm:max-w-[80rem] sm:min-w-[80rem]'>
                <div className='flex items-center my-10 flex-col sm:flex-row'>
                    <div>
                        <span className='uppercase text-primary font-semibold tracking-[0.1rem]'>Beneficios</span>
                        <h2 className='sm:w-[510px] font-bold text-3xl text-start'>Simplifica, Ahorra y Cuida el Planeta con Juntii</h2>
                    </div>
                    <p>Con Juntii, transformar la experiencia de los pedidos a domicilio es más que una promesa: es una realidad. Pide junto a tu comunidad, reduce costos, gana cashback, y contribuye a un mundo más sostenible. Descubre cómo Juntii hace que cada pedido sea más inteligente.</p>
                </div>
                <div className='flex items-center gap-5 flex-col sm:flex-row'>
                    <div className='bg-[#C4F5FC] overflow-hidden flex flex-col items-start w-[22rem] p-6 gap-2 h-[41rem]'>
                        <h4 className='text-2xl font-bold'>Pedidos Comunitarios</h4>
                        <p>
                            ¿Cuántas veces has pedido comida solo, pagando altos costos de envío?
                            <br />
                            Con Juntii, eso es cosa del pasado. Únete a pedidos grupales con vecinos de tu edificio y comparte los costos de entrega.
                        </p>
                        <motion.div
                            initial={{
                                rotateX: 20,
                                rotateY: 20,
                                x: 50
                            }}
                            whileHover={{
                                rotateX: 0,
                                rotateY: 0,
                                x: -7
                            }}
                            transition={{
                                ease: 'easeInOut'
                            }}
                        >
                            <Image src={movil1} alt='' className='-rotate-12 translate-x-[8rem]' />
                        </motion.div>
                    </div>
                    <div className='flex flex-col gap-5 items-center'>
                        <div className='bg-[#C4F5FC] flex-col sm:flex-row flex items-center sm:w-[55rem] sm:h-[20rem] h-[41rem] p-6 gap-2 overflow-hidden'>
                            <div className='flex flex-col items-start sm:w-[30rem]'>
                                <h4 className='text-2xl font-bold'>Cashback Automático</h4>
                                <p>
                                    Con Juntii, ahorrar nunca fue tan fácil. Por cada pedido grupal, todos los participantes reciben un porcentaje de su dinero de vuelta, ¡hasta un 30%! Cuantas más personas se unan, mayor será el ahorro para todos.
                                </p>
                            </div>
                            <motion.div
                                initial={{
                                    y: 140,
                                }}
                                whileHover={{
                                    y: 0,
                                }}
                                transition={{
                                    ease: 'easeInOut'
                                }}
                            >
                                <Image src={movil2} alt='' className='w-[20rem] sm:translate-y-36 translate-y-10' />
                            </motion.div>
                        </div>
                        <div className='bg-[#C4F5FC] flex-col sm:flex-row flex items-center sm:w-[55rem] sm:h-[20rem] h-[41rem] p-6 gap-2 overflow-hidden'>
                            <div className='flex flex-col items-start sm:w-[30rem]'>
                                <h4 className='text-2xl font-bold'>Impacto Ambiental Reducido</h4>
                                <p>
                                    En Juntii no solo pensamos en tu comodidad, también nos importa el planeta. Al consolidar pedidos en un solo viaje, reducimos el uso innecesario de repartidores y vehículos, lo que disminuye significativamente las emisiones de carbono.
                                </p>
                            </div>
                            <motion.div
                                initial={{
                                    y: 140,
                                }}
                                whileHover={{
                                    y: 0,
                                }}
                                transition={{
                                    ease: 'easeInOut'
                                }}
                            >
                                <Image src={movil} alt='' className='w-[20rem] sm:translate-y-36 translate-y-10' />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BenefitsSection
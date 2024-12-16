"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import movil from '@/assets/img/PhoneMockupHero.png'
import movil1 from '@/assets/img/PhoneMockup3.png'
import movil2 from '@/assets/img/PhoneMockup2.png'
import { motion } from 'framer-motion';


const BenefitsSection = () => {
    const [hover, setHover] = useState(0)
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
                    <div
                        onMouseOver={() => setHover(1)}
                        onMouseOut={() => setHover(0)}
                        className='bg-[#C4F5FC] overflow-hidden flex flex-col items-start w-[22rem] p-6 gap-2 h-[41rem]'>
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
                            animate={hover == 1 ? {
                                rotateX: 0,
                                rotateY: 0,
                                x: -7
                            } : {
                                rotateX: 20,
                                rotateY: 20,
                                x: 50
                            }}
                            transition={{
                                ease: 'easeInOut'
                            }}
                        >
                            <Image src={movil1} alt='' className='-rotate-12 translate-x-[8rem]' />
                        </motion.div>
                    </div>
                    <div className='flex flex-col gap-5 items-center'>
                        <div
                            onMouseOver={() => setHover(2)}
                            onMouseOut={() => setHover(0)}
                            className='bg-[#C4F5FC] flex-col sm:flex-row flex items-center sm:w-[55rem] sm:h-[20rem] h-[41rem] p-6 gap-2 overflow-hidden'>
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
                                animate={hover == 2 ? {
                                    y: 0,
                                } : {
                                    y: 140
                                }}
                                transition={{
                                    ease: 'easeInOut'
                                }}
                            >
                                <Image src={movil2} alt='' className='w-[20rem] sm:translate-y-36 translate-y-10' />
                            </motion.div>
                        </div>
                        <div
                            onMouseOver={() => setHover(3)}
                            onMouseOut={() => setHover(0)}
                            className='bg-[#C4F5FC] flex-col sm:flex-row flex items-center sm:w-[55rem] sm:h-[20rem] h-[41rem] p-6 gap-2 overflow-hidden'>
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
                                animate={hover == 3 ? {
                                    y: 0,
                                } : {
                                    y: 140
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
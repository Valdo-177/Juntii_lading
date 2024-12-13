"use client"
import Image from 'next/image'
import React from 'react'
import movil1 from '@/assets/img/movil1.png'
import movil2 from '@/assets/img/movil2.png'
import BtnApp from './BtnApp'
import { HeroBg2 } from '@/assets/svg'
import { motion, useScroll, useTransform } from 'framer-motion';


const DischargeSection = () => {
    const { scrollY } = useScroll(); // Obtén el valor del scroll
    const XMovement = useTransform(scrollY, [2699, 3389], ['-29rem', '-2rem']);
    const XMovement2 = useTransform(scrollY, [2699, 3389], ['29rem', '2rem']);

    const downloadAPK = () => {
        // URL del archivo APK
        const apkUrl = 'https://github.com/Valdo-177/Juntii_lading/raw/refs/heads/main/src/assets/juntii-app.apk'; // Cambia esta URL por la ubicación de tu archivo APK
        
        // Crear un enlace temporal
        const link = document.createElement('a');
        link.href = apkUrl;
        link.download = 'Juntii.apk';  // Nombre del archivo con el que se descargará
      
        // Simular un clic en el enlace para iniciar la descarga
        link.click();
      };

    return (
        <section className='relative overflow-hidden w-full'>
            <HeroBg2 className='absolute -left-[10rem] -z-10' />
            <div className='px-6 sm:px-4 sm:w-[70rem] mb-10 flex flex-col mx-auto items-center gap-3'>
                <div className='flex items-center relative'>
                    <motion.div
                        style={{ x: XMovement }} // Aplica el movimiento vertical
                        className='sm:w-[26rem] w-[20rem]'
                    >
                        <Image src={movil1} alt='' />
                    </motion.div>
                    <motion.div
                        style={{ x: XMovement2 }} // Aplica el movimiento vertical
                        className='sm:w-[26rem] w-[20rem] absolute'
                    >
                        <Image src={movil2} alt='' />
                    </motion.div>
                </div>
                <h2 className='sm:w-[400px] font-bold text-3xl text-center mt-9'>Empieza a ahorrar y pedir como nunca antes.</h2>
                <p className='sm:w-[50rem] text-center'>Ya no tienes que elegir entre comodidad, precio y sostenibilidad. Con Juntii, transformar tu experiencia de delivery es tan fácil como unirte a tu comunidad. Descubre cómo pedir en grupo te permite ahorrar más, recibir cashback, disfrutar de tus comidas en su punto ideal y, al mismo tiempo, reducir el impacto ambiental. Únete al movimiento Juntii y sé parte de la revolución de los pedidos inteligentes.</p>
                <div className='flex items-center gap-3 mt-10 flex-col sm:flex-row'>
                    <BtnApp icon='AppStore' title='Disponible aqui' onClick={downloadAPK}/>
                </div>
            </div>
        </section>
    )
}

export default DischargeSection
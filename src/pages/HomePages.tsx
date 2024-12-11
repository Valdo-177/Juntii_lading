import AsSection from '@/components/ui/AsSection'
import BenefitsSection from '@/components/ui/BenefitsSection'
import DischargeSection from '@/components/ui/DischargeSection'
import HeroSection from '@/components/ui/HeroSection'
import SolutionSection from '@/components/ui/SolutionSection'
import React from 'react'

const HomePages = () => {
  return (
    <main className='flex flex-col items-center'>
        <HeroSection/>
        <SolutionSection/>
        <AsSection/>
        <BenefitsSection/>
        <DischargeSection/>
    </main>
  )
}

export default HomePages
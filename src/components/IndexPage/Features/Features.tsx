import Button from '@/components/UI/Button/Button'
import React from 'react'
import FeatureCard from './Elements/FeatureCard'
import { features, features2 } from '@/assets/data/features'
import useOpenModal from '@/hooks/useOpenModal'

const Features = () => {
        
    const {
        openCTAModal
    } = useOpenModal()

    return (
        <>
            <section className='feat container'>
                <h3 className="feat-title">Features</h3>

                <div className="feat-wrapper">
                    {features.map((item, index) => <FeatureCard key={index} title={item.title} description={item.description} icon={item.icon}/>)}
                </div>

                <Button onClick={openCTAModal} variant="contained" color="violet" size="large" className='feat-btn'>Get Started</Button>

            </section>

            <section className='feat container'>

                <h3 className="feat-title">Supercharge your productivity</h3>
                <h5 className="feat-subtitle">Integrating GPT chat into iMessage could be an interesting
                    and useful solution</h5>
                
                <div className="feat-wrapper">
                    {features2.map((item, index) => <FeatureCard key={index} title={item.title} description={item.description} icon={item.icon}/>)}
                </div>

                <Button onClick={openCTAModal} variant="contained" color="violet" size="large" className='feat-btn'>Get Started</Button>

            </section>
        </>
    )
}

export default Features
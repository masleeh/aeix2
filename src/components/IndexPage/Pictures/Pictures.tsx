import Button from '@/components/UI/Button/Button'
import Image from 'next/image'
import React from 'react'
import Chat1Pict from '@/assets/images/chat1.png'
import Chat2Pict from '@/assets/images/chat2.png'
import PictIcons from "@/assets/images/pict-icons.png"
import useOpenModal from '@/hooks/useOpenModal'

const Pictures = () => {
    
    const {
        openCTAModal
    } = useOpenModal()

    return (
        <section className='pict container'>
            <h2 className="pict-title">One service for all yours projects</h2>
            <h3 className="pict-subtitle">Run, message, analyze. It’s easy with AEIX</h3>

            <div className="pict-row">
                <Image src={Chat1Pict} alt="" className='pict-img'/>
                <Image src={Chat2Pict} alt="" className='pict-img'/>
            </div>

            <div className="pict-grid">
                <h2 className="pict-grid-title">Integrates with your work prosecces</h2>
                <Button onClick={openCTAModal} size="large" variant="contained" color="violet" className='pict-grid-btn'>Sign up</Button>

                <Image src={PictIcons} alt="" className='pict-grid-img'/>
            </div>
        </section>
    )
}

export default Pictures
import Image from 'next/image'
import React from 'react'

const Description = () => {
    return (
        <section className='desc container'>

            <p className='desc-text'>
                Learn and interact with a revolutionary Al-powered system that understands context and meaning in human language.
                <br /> <br />
                Ask questions and get meaningful responses with our cutting-edge natural language understanding capabilities. 
                <br /> <br />
                Step into the future of Al interaction with the Text to Al chat app AEIX today!
            </p>

            <div className='desc-block'>
                <img src="/icons/arrow_click_icon.svg" alt="" className='desc-block-img' width={48} height={48}/>
                <h4 className='desc-block-title'>Doesn’t require internet connection</h4>
            </div>

            <div className='desc-block'>
                <Image src="/icons/rocket_icon.svg" alt="" className='desc-block-img' width={48} height={48}/>
                <h4 className='desc-block-title'>Easier to use</h4>
            </div>

        </section>
    )
}

export default Description
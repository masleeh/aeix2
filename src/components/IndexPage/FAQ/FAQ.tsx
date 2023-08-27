import { faq } from '@/assets/data/faq'
import React from 'react'
import FAQElement from './Elements/FAQElement'

const FAQ = () => {
    return (
        <section className='faq'>
            <h3 className="faq-title">FAQ</h3>

            <div className="faq-wrapper">
                {faq.map((item, index) => (
                    <FAQElement title={item.title} description={item.description} />
                ))}
            </div>
        </section>
    )
}

export default FAQ
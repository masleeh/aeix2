import React from 'react'
import PlanElement from './Elements/PlanElement'
import Button from '@/components/UI/Button/Button'

const Plan = () => {
    return (
        <section className='plan'>
            <h3 className='plan-title'>Plan</h3>

            <div className="plan-box">
                <h2 className='plan-box-title'>30$ / month</h2>

                <div className="plan-box-grid">
                    <PlanElement title="Access to GPT-3" />
                    <PlanElement title="Expert-level knowledge" />
                    <PlanElement title="Personalized responses" />
                    <PlanElement title="High-quality responses" />
                    <PlanElement title="24/7 availability" />
                    <PlanElement title="Competitive pricing" />
                    <PlanElement title="Natural language understanding" />
                    <PlanElement title="User privacy and data security" />
                </div>

                <Button variant="contained" color="violet" size="large" className='plan-box-btn'>Get Started</Button>
            </div>
        </section>
    )
}

export default Plan
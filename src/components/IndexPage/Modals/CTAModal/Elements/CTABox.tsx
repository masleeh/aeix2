import React from 'react'

const CTABox = ({formatDate}: {formatDate: any}) => {
    return (
        <div className="cta-box">
            <div className="cta-row">
                <h5 className="cta-box-title">Start billing date</h5>
                <h5 className='cta-box-date'>{formatDate(Date.now())}</h5>
            </div>
            <div className="cta-box-list">
                <h5 className="cta-box-list-title">Only 30 usd / month</h5>
                <h5 className="cta-box-list-title">Cancel anytime. Offer terms apply</h5>
            </div>
        </div>
    )
}

export default CTABox
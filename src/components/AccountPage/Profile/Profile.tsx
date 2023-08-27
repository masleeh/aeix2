import Button from '@/components/UI/Button/Button'
import React from 'react'
import avatar from '@/assets/images/avatar.jpg';
import Image from 'next/image';
import ProfInput from './Element/ProfInput/ProfInput';
import ProfText from './Element/ProfText/ProfText';

const Profile = () => {
    return (
        <section className='prof'>
            <div className="prof-row">
                <h3 className="prof-title">Profile</h3>
                <h5 className="prof-edit">Edit profile</h5>
            </div>

            <div className="prof-box">
                <Image src={avatar} alt="" width={100} height={100} className='prof-box-img'/>

                <div className="prof-box-form">
                    <ProfInput title="Name" placeholder='Your name' />
                    <ProfText title="Phone number" text="+7 980 304 34 11"/>
                    <ProfInput title="Email" placeholder='Your email' />
                    <ProfText title="Expiring date" text="28 October, 2023"/>

                    <h4 className='prof-box-status'>Subscription status: <span className='prof-box-status-span'>Active</span></h4>
                </div>
            </div>

            <Button variant="outlined" color="white" className='prof-btn'>Cancel Subscription</Button>
        </section>
    )
}

export default Profile
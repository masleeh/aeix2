import Button from '@/components/UI/Button/Button'
import React from 'react'
import avatar from '@/assets/images/avatar.jpg';
import Image from 'next/image';
import ProfInput from './Element/ProfInput/ProfInput';
import ProfText from './Element/ProfText/ProfText';
import { TProfile } from './Profile.types';
import useProfile from './Profile.utils';
import WarnModal from '@/components/IndexPage/Modals/WarnModal/WarnModal';

const Profile = ({
    userData,
    auth,
    setAuth
}: TProfile) => {
    const {
        loading,
        cancelSubscription,
        handleCloseModal,
        showModal
    } = useProfile(auth, setAuth)

    return (
        <section className='prof'>
            <div className="prof-row">
                <h3 className="prof-title">Profile</h3>
                {/* <h5 className="prof-edit">Edit profile</h5> */}
            </div>

            <div className="prof-box">
                <Image src={avatar} alt="" width={100} height={100} className='prof-box-img'/>

                <div className="prof-box-form">
                    <ProfText title="Name" text={userData.user_name} />
                    <ProfText title="Phone number" text={userData.phone}/>
                    {/* <ProfText title="Email" text={userData.} /> */}
                    <ProfText title="Expiring date" text={userData.paid_till}/>

                    <h4 className='prof-box-status'>Subscription status: <span className='prof-box-status-span'>Active</span></h4>
                </div>
            </div>

            <Button onClick={cancelSubscription} variant="outlined" color="white" className='prof-btn' loading={loading ? true : false}>Cancel Subscription</Button>

            {showModal && <WarnModal handleCloseModal={handleCloseModal} />}
        </section>
    )
}

export default Profile
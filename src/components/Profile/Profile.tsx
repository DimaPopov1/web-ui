import React, {useState} from "react";

import s from './Profile.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileImage from "./ProfileImage";

export interface IUser {
    user: {
        email: string
        firstName?: string
        lastName?: string
        address?: string
    }
}
const Profile = ({user}: IUser) => {

    const [isDisabled, setIsDisabled] = useState(true);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [address, setAddressName] = useState(user.address);

    const enableInput = () => {
        setIsDisabled(!isDisabled)
    };

    const handleFirstName = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setFirstName(target.value)
    }
    const handleLastName = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setLastName(target.value)
    }
    const handleAddressName = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setAddressName(target.value)
    }


    return (
        <div className={s.ProfileContainer}>
            <div className="border-end">
                <ProfileImage email={user.email}/>
            </div>
            <div className="mt-4 m-3">
                <div><label className="labels">First Name</label><input type="text"
                                                                        className="form-control"
                                                                        placeholder="Your first name"
                                                                        value={firstName}
                                                                        onChange={handleFirstName}
                                                                        disabled={isDisabled}/></div>
                <div><label className="labels">Last Name</label><input type="text"
                                                                       className="form-control"
                                                                       placeholder="Your last name"
                                                                       value={lastName}
                                                                       onChange={handleLastName}
                                                                       disabled={isDisabled}/></div>
                <div><label className="labels">Address</label><input type="text"
                                                                     className="form-control"
                                                                     placeholder="Your address"
                                                                     value={address}
                                                                     onChange={handleAddressName}
                                                                     disabled={isDisabled}/></div>

                <div className="mt-5 text-center">
                    <button className={['btn btn-primary ', s.profileButton].join('')} type="button"
                            onClick={enableInput}>Update Profile
                    </button>
                </div>
            </div>
        </div>
    );

}
export default Profile;

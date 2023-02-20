import React, {useEffect, useState} from "react";

import style from './Profile.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileImage from "./ProfileImage";
import {IUser} from "../../types/types";
import {profileSlice} from "../../redux/reducers/ProfileSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import state from "../../redux/state";
import {fetchProfile} from "../../redux/reducers/ActionCreater";


const Profile = () => {

    const dispatch = useAppDispatch();
    const  {user, isLoading, error} = useAppSelector(state => state.profileReducer)

    useEffect(() => {
        dispatch(fetchProfile())
    }, [])


    //let firstName = user.user.firstName;
    const [isDisabled, setIsDisabled] = useState(true);

    /* const [firstName, setFirstName] = useState(user.user.firstName);
     const [lastName, setLastName] = useState(user.user.lastName);
     const [address, setAddressName] = useState(user.user.address);*/

    const enableInput = () => {
        setIsDisabled(!isDisabled)
    };

    const handleFirstName = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        //setFirstName(target.value)
    }
    const handleLastName = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        //setLastName(target.value)
    }
    const handleAddressName = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
       // setAddressName(target.value)
    }

    return (
        <div className={style.ProfileContainer}>
            <div className="border-end">
                <ProfileImage email={user?.email}/>
            </div>
            <div className="mt-4 m-3">
                {isLoading && <h2>Loading ...</h2>}
                {error && <h2>{error}</h2> }
                <div><label className="labels">First Name</label><input type="text"
                                                                        className="form-control"
                                                                        placeholder="Your first name"
                                                                        //value={firstName}
                                                                        onChange={handleFirstName}
                                                                        disabled={isDisabled}/></div>
               {/* <div><label className="labels">Last Name</label><input type="text"
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
                                                                     disabled={isDisabled}/></div>*/}

                <div className="mt-5 text-center">
                    <button className={['btn btn-primary ', style.profileButton].join('')} type="button"
                            onClick={enableInput}>Update Profile
                    </button>
                </div>
            </div>
        </div>
    );

}
export default Profile;

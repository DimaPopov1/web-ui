import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import ProfileImage from "./ProfileImage";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchProfile} from "../../redux/reducers/thunks/ProfileThunk";
import style from './Profile.module.css';
import axios from "../../routes/userApi";
import {IUser} from "../../types/types";
import {connect, TypedUseSelectorHook} from "react-redux";

const UPDATE_USER_PROFILE_API_URL = "updateuserprofile";

const Profile = (props:IUser) => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfile());

    }, [])

    useEffect(() => {
        setFirstName(firstName ?? props.firstName);
        setLastName(lastName ?? props.lastName);
        setAddressName(address ?? props.address);
    })

    const  {user, isLoading, error} = useAppSelector(state => state.profileReducer)

    const [isDisabled, setIsDisabled] = useState(true);

     const [firstName, setFirstName] = useState(props.firstName);
     const [lastName, setLastName] = useState(props?.lastName);
     const [address, setAddressName] = useState(props?.address);

    const enableInput = () => {
        if(isDisabled == true){
            setIsDisabled(!isDisabled)
        }
        else {
            try {
                const response = axios.post(UPDATE_USER_PROFILE_API_URL,
                    JSON.stringify({firstName: firstName, lastName: lastName,address:address})
                );
                dispatch(fetchProfile());
                setIsDisabled(!isDisabled);
            } catch (e:any){
                console.log(e.message)
            }
        }
    };

    const cancelChange = () =>{
        setFirstName(user.firstName ?? "");
        setLastName(user.lastName ?? "")
        setAddressName(user.address ?? "")
        setIsDisabled(!isDisabled);
    }
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
                    <button className={['btn btn-primary ', style.profileButton].join('')} type="button"
                            onClick={enableInput}>Update Profile
                    </button>
                    <button className={['btn btn-primary ', style.profileButton].join('')} type="button"
                            onClick={cancelChange}  disabled={isDisabled}>Cancel
                    </button>
                </div>
            </div>
        </div>
    );

}
function mapStateToProps(state: any) {
    return {
       id: state.profileReducer.user.id,
        email:  state.profileReducer.user.email,
        firstName:  state.profileReducer.user.firstName,
        lastName:  state.profileReducer.user.lastName,
        address:  state.profileReducer.user.address
    }
}
export default  connect(mapStateToProps)(Profile);

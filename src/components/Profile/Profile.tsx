import React from "react";

import s from './Profile.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileImage from "./ProfileImage";
interface IUser {
    user: {
        email: string
        firstName?: string
        lastName?: string
        address?: string
    }
}

const Profile = ({user}: IUser) => {
    return (
        <div className={s.ProfileContainer}>
            <div className="border-end">
                <ProfileImage email={user.email}/>
            </div>
            <div className="mt-4 m-3">
                <div><label className="labels">First Name</label><input type="text"
                    className="form-control"  placeholder="Your first name"  value={user.firstName} disabled /></div>
                <div><label className="labels">Last Name</label><input type="text"
                    className="form-control"  placeholder="Your last name"  value={user.lastName} disabled /></div>
                <div><label className="labels">Address</label><input type="text"
                    className="form-control"  placeholder="Your address"  value={user.address} disabled /></div>
            </div>
        </div>
    );

}
export default Profile;

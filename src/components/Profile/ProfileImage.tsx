import React from "react";

interface IEmail{
    email:string

}
const ProfileImage = (props:IEmail) => {
    return(
        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img
            className="rounded-circle mt-4" width="150px"
            src={require("./../../images/profile/person-silhouette-glasses-profile.jpg")}/><span
            className="font-weight-bold">Edogaru</span><span
            className="text-black-50">{props.email}</span><span> </span></div>
    );
}
export default ProfileImage;
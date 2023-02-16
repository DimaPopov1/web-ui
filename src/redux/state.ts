let state = {
        user : {
        email : "User@mail.ru",
        firstName: "Igor",
        lastName: "",
        address : "Downton,25"
    }
}
export interface IState {
        state: {
                user:{
                        email : string,
                        firstName: string,
                        lastName: string,
                        address : string
                }
        }
}

export default  state;
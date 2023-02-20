let state = {
        user : {
        id:"1",
        email : "User@mail.ru",
        firstName: "Igor",
        lastName: "",
        address : "Downton,25"
    }
}
export interface IState {
        state: {
                user:{
                        id: string;
                        email : string,
                        firstName: string,
                        lastName: string,
                        address : string
                }
        }
}

export default  state;
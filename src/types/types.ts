export interface IUser {
        id:string
        email: string
        firstName?: string
        lastName?: string
        address?: string
    
}

export interface Catalogue{
       cars:  []
        pageViewModel: IPageViewModel,
}

export interface IPageViewModel {
        PageNumber : number,
        TotalPages: number,
        HasPreviousPage: boolean
        HasNextPage:boolean
}

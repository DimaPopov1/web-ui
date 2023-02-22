export interface IUser {
        id:string
        email: string
        firstName?: string
        lastName?: string
        address?: string
    
}

export interface ICatalogue {
        cars:  ICar[],
        pageViewModel: IPageViewModel,
        filterViewModel: IFilterViewModel,
        sortViewModel : ISortViewModel
}

export interface ICar  {
        id: string,
        name: string,
        price: number,
        image: string,
        yearOfProduction: number,
        description:string,
        dealerId:string
}

export interface IPageViewModel {
        PageNumber : number,
        TotalPages: number,
        HasPreviousPage: boolean
        HasNextPage:boolean
}
export interface IFilterViewModel {
        selectedCar: string,
        selectedName: string
}
export interface ISortViewModel {
        current: number,
        isAscOrder: boolean
}
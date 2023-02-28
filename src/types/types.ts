import * as punycode from "punycode";

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
        pageNumber : number,
        totalPages: number,
        hasPreviousPage: boolean
        hasNextPage:boolean
}
export interface IFilterViewModel {
        selectedCar: string,
        selectedName: string
}
export interface ISortViewModel {
        current: SortState,
        isAscOrder: boolean
}

export interface ICarPageHandler {
        name: string,
        page: number,
        sortState: string,
        isAskOrder: boolean
}

export enum  SortState
{
        OrderByName ="OrderByName" ,
        OrderByPrice = "OrderByPrice"
}
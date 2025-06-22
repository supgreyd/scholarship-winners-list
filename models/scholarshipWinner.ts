import type { IJsonApiResource, IJsonApiResponse } from "@models/jsonApi"

export interface IScholarshipWinnerResource extends IJsonApiResource<IScholarshipWinnerAttributes> {}

export interface IScholarshipWinnerAttributes {
    amountWon: number
    winnerName: string
    wonAt: string
    winnerPhoto: string
    published: boolean
    scholarshipTitle: string
    testimonialVideo: string
    testimonialText: string
}

export interface IScholarshipWinnerApiResponse extends IJsonApiResponse<IScholarshipWinnerResource> {}

export enum EWinnersTableHeaders {
    ID = 'ID',
    NAME = 'Name',
    PHOTO = 'Photo',
    DATE = 'Date',
    PRICE = 'Price',
    ACTIONS = '',
}

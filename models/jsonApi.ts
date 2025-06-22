export interface IJsonApiResponse<T> {
    data: T[]
    meta?: IJsonApiMeta
    links?: IJsonApiLinks
}

export interface IJsonApiResource<A = IJsonApiAttribute> {
    type: string;
    id: string;
    attributes: A;
    relationships?: { [key: string]: IJsonApiRelationship }
    links?: IJsonApiLinks;
}

export interface IJsonApiAttribute {
    [key: string]: unknown | IJsonApiAttribute
}

export interface IJsonApiRelationship {
    data: { type: string; id: string } | { type: string; id: string }[]
    links?: IJsonApiLinks
}


export interface IJsonApiMeta {
    [key: string]: unknown
    pagination?: { [key: string]: unknown }
}

export interface IJsonApiLinks {
    self?: string
    first?: string
    next?: string
    last?: string
    related?: string
}


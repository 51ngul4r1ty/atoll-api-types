import { ServerCollectionResponse } from "./common";

export type ApiResourceItemLink = {
    type: string;
    rel: string;
    uri: string;
};

export type ApiMapRootResourceItem = {
    id: string;
    name: string;
    description: string;
    displayIndex: number;
    notes?: string;
    links: ApiResourceItemLink[];
};

export type ApiMapItem = {
    id: string;
    name: string;
    description: string;
    displayIndex: number;
    links: ApiResourceItemLink[];
};

export type ApiMapServerResponse = ServerCollectionResponse<ApiMapItem>;

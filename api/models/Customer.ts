/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Customer_Address } from './Customer_Address';
import type { CustomerType } from './CustomerType';
import type { User } from './User';
export type Customer = {
    id?: number;
    name?: string | null;
    customerType?: CustomerType;
    companyName?: string | null;
    taxID?: string | null;
    phone?: string | null;
    mobile?: string | null;
    email?: string | null;
    website?: string | null;
    tags?: string | null;
    internalNotes?: string | null;
    sellerId?: number | null;
    customerAddress?: Customer_Address;
    user?: User;
};


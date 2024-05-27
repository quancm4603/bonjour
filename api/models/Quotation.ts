/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Customer } from './Customer';
import type { User } from './User';
export type Quotation = {
    id?: number;
    total: number;
    status: string;
    createdAt: string;
    customerId?: number;
    customer?: Customer;
    userId?: number;
    user?: User;
};


/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Customer } from './Customer';
import type { Quotation } from './Quotation';
export type User = {
    id?: number;
    name: string;
    role: boolean;
    email: string;
    password: string;
    phoneNumber?: string | null;
    customers?: Array<Customer> | null;
    quotations?: Array<Quotation> | null;
};


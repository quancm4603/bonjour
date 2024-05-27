/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Product } from './Product';
import type { Quotation } from './Quotation';
export type QuotationDetail = {
    productId?: number;
    quotationId?: number;
    subTotal?: number;
    quantity?: number;
    product?: Product;
    quotation?: Quotation;
};


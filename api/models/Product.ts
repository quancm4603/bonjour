/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Category } from './Category';
import type { ProductImage } from './ProductImage';
import type { User } from './User';
export type Product = {
    id?: number;
    name: string;
    type?: string | null;
    price?: number;
    tax?: number | null;
    note?: string | null;
    categoryId?: number | null;
    category?: Category;
    userId?: number | null;
    user?: User;
    images?: Array<ProductImage> | null;
};


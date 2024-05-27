/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductImage } from '../models/ProductImage';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProductImageService {
    /**
     * @returns ProductImage Success
     * @throws ApiError
     */
    public static getApiProductImage(): CancelablePromise<Array<ProductImage>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ProductImage',
        });
    }
    /**
     * @param requestBody
     * @returns number Success
     * @throws ApiError
     */
    public static postApiProductImage(
        requestBody?: ProductImage,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ProductImage',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns ProductImage Success
     * @throws ApiError
     */
    public static getApiProductImage1(
        id: number,
    ): CancelablePromise<ProductImage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ProductImage/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static putApiProductImage(
        id: number,
        requestBody?: ProductImage,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/ProductImage/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiProductImage(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/ProductImage/{id}',
            path: {
                'id': id,
            },
        });
    }
}

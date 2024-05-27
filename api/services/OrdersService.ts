/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuotationDetail } from '../models/QuotationDetail';
import type { QuotationViewModel } from '../models/QuotationViewModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrdersService {
    /**
     * @returns QuotationViewModel Success
     * @throws ApiError
     */
    public static getApiOrdersOrders(): CancelablePromise<Array<QuotationViewModel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Orders/orders',
        });
    }
    /**
     * @param id
     * @returns QuotationDetail Success
     * @throws ApiError
     */
    public static getApiOrders(
        id: number,
    ): CancelablePromise<Array<QuotationDetail>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Orders/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public static deleteApiOrders(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Orders/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postApiOrders(
        requestBody?: QuotationViewModel,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Orders',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public static putApiOrdersConfirm(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Orders/{id}/confirm',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public static putApiOrdersCancel(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Orders/{id}/cancel',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public static postApiOrdersSendOrderEmail(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Orders/{id}/SendOrderEmail',
            path: {
                'id': id,
            },
        });
    }
}

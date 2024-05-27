/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Quotation } from '../models/Quotation';
import type { QuotationDetail } from '../models/QuotationDetail';
import type { QuotationViewModel } from '../models/QuotationViewModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QuotationService {
    /**
     * @returns Quotation Success
     * @throws ApiError
     */
    public static getApiQuotation(): CancelablePromise<Array<Quotation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Quotation',
        });
    }
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postApiQuotation(
        requestBody?: QuotationViewModel,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Quotation',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param id
     * @returns QuotationDetail Success
     * @throws ApiError
     */
    public static getApiQuotation1(
        id: number,
    ): CancelablePromise<Array<QuotationDetail>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Quotation/{id}',
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
    public static deleteApiQuotation(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Quotation/{id}',
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
    public static putApiQuotationConfirm(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Quotation/{id}/confirm',
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
    public static putApiQuotationCancel(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Quotation/{id}/cancel',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param page
     * @param pageSize
     * @returns Quotation Success
     * @throws ApiError
     */
    public static getApiQuotationQuotationsPerPage(
        page: number = 1,
        pageSize: number = 10,
    ): CancelablePromise<Array<Quotation>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Quotation/quotationsPerPage',
            query: {
                'page': page,
                'pageSize': pageSize,
            },
        });
    }
    /**
     * @param id
     * @returns any Success
     * @throws ApiError
     */
    public static postApiQuotationSendQuotationEmail(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Quotation/{id}/SendQuotationEmail',
            path: {
                'id': id,
            },
        });
    }
}

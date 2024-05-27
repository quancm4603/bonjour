/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerDto } from '../models/CustomerDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CustomerService {
    /**
     * @returns CustomerDto Success
     * @throws ApiError
     */
    public static getApiCustomerGetCustomer(): CancelablePromise<Array<CustomerDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Customer/GetCustomer',
        });
    }
    /**
     * @param id
     * @returns CustomerDto Success
     * @throws ApiError
     */
    public static getApiCustomerDetailCustomer(
        id: number,
    ): CancelablePromise<CustomerDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Customer/DetailCustomer/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param customerId
     * @returns any Success
     * @throws ApiError
     */
    public static getApiCustomerQuotations(
        customerId: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Customer/{customerId}/quotations',
            path: {
                'customerId': customerId,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postApiCustomerAddCustomer(
        requestBody?: CustomerDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Customer/AddCustomer',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any Success
     * @throws ApiError
     */
    public static postApiCustomerUpdateCustomer(
        requestBody?: CustomerDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Customer/UpdateCustomer',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param customerId
     * @param year
     * @param quarter
     * @returns any Success
     * @throws ApiError
     */
    public static putApiCustomerTotalOrderQuarter(
        customerId?: number,
        year?: number,
        quarter?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/Customer/TotalOrderQuarter',
            query: {
                'customerId': customerId,
                'year': year,
                'quarter': quarter,
            },
        });
    }
    /**
     * @param id
     * @returns boolean Success
     * @throws ApiError
     */
    public static deleteApiCustomerDeleteCustomer(
        id: number,
    ): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Customer/DeleteCustomer/{id}',
            path: {
                'id': id,
            },
        });
    }
}

/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FirebaseConfigService {
    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getApiFirebaseConfigConfig(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/FirebaseConfig/config',
        });
    }
}

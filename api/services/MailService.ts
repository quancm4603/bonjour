/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MailService {
    /**
     * @param formData
     * @returns any Success
     * @throws ApiError
     */
    public static postApiMailForget(
        formData?: {
            ToEmail?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Mail/forget',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * @param formData
     * @returns any Success
     * @throws ApiError
     */
    public static postApiMailVerifyOtp(
        formData?: {
            UserId?: number;
            EnteredOTP?: string;
            Password?: string;
            NewPassword?: string;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Mail/verify-otp',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
}

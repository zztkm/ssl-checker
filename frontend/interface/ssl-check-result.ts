export interface IsSslResponse {
    host: string;
    valid: boolean;
    version: string;
    error: string;
}

export interface GetHostNameApiResponse {
	hostnames: Array<string>;
}
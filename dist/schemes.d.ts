export interface AuthenticateScheme {
    agent: {
        name: string;
        version: number;
    };
    username: string;
    password: string;
    requestUser: boolean;
}
export interface RefreshScheme {
    acessToken: string;
    clientToken: string;
    selectedProfile: {
        id: string;
        name: string;
    };
    requestUser: boolean;
}
export interface ValidateScheme {
    acessToken: string;
    clientToken: string;
}
export interface SignoutScheme {
    username: string;
    password: string;
}
export interface InvalidateScheme {
    acessToken: string;
    clientToken: string;
}

export interface UserToken{
    access_token: string,
    user: {
        id: string;
        name: string;
        email: string;
    };
}
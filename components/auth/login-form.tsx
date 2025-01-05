import { CardWrapper } from "./card-wrapper";

export const LoginForm = () => {
    return ( 
        <CardWrapper headerLabel="Login" backButtonLabel="Don`t have an account" backButtonHref="/auth/register" showSocial>
            Login Form!
        </CardWrapper>
     );
}

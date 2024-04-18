
import { CardWrapper } from "./auth/card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
    return (
        <CardWrapper
            headerLabel="Oops Something went wrong !"
            backButtonHref="/auth/login"
            backButtonLabel="Back to Login"


        >
            <div className="w-full flex justify-center items-center">


                <ExclamationTriangleIcon className="text-destructive" />
            </div>


        </CardWrapper>
    )
}
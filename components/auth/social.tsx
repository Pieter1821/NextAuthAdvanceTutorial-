"use client"

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"

import { Button } from "@/components/ui/button"



const Social = () => {
    const signInWithGoogle = () => {
        // call Google auth API 
    };

    const signInWithGithub = () => {
        // call GitHub auth API
    };

    return (
        <div className="flex items-center w-full gap-x-2">
            <Button
                size="lg"
                className="w-full"
                variant="outline"
                onClick={signInWithGoogle}
            >
                <FcGoogle className="h-5 w-5" />
            </Button>

            <Button
                size="lg"
                className="w-full"
                variant="outline"
                onClick={signInWithGithub}
            >
                <FaGithub className="h-5 w-5" />
            </Button>
        </div>
    )
}


export default Social

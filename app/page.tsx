import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"]
});

export default function Home() {
  return (
    <main className="flex h-full flex-col  items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500 to-blue-500">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md",
          font.className,

        )}>
          🔐 Auth
        </h1>
      </div>
      <p className="text-white text-lg">
        This is a simple authenthication service
      </p>
      <LoginButton >

        <Button variant="secondary" size="lg" >
          Sign-in

        </Button>
      </LoginButton>


    </main>
  );
}

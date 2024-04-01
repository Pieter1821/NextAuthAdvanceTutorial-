const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex justify-center items-center h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500 to-blue-500">
            {children}
        </div>
    )
}

export default AuthLayout

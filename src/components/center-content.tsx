export function CenterContent({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full max-w-8xl mx-auto">
            {children}
        </div>
    )
}
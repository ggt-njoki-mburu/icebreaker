interface HeadingProps {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
}

export function Heading({ level, children }: HeadingProps) {
    switch (level) {
        case 1:
            return <h1 className="text-2xl md:text-4xl font-bold font-heading">{children}</h1>;
        case 2:
            return <h2 className="text-xl md:text-3xl font-bold font-heading">{children}</h2>;
        case 3:
            return <h3 className="text-lg md:text-2xl font-bold font-heading">{children}</h3>;
        case 4:
            return <h4 className="text-base md:text-xl font-bold font-heading">{children}</h4>;
        case 5:
            return <h5 className="text-sm md:text-lg font-bold font-heading">{children}</h5>;
        case 6:
            return <h6 className="text-xs md:text-base font-bold font-heading">{children}</h6>;
        default:
            return <h1 className="text-2xl md:text-4xl font-bold font-heading">{children}</h1>;
    }
}

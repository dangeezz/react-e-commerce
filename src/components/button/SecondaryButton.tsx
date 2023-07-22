import { Button } from "./Button";

type SecondaryButtonTypes = {
    children: React.ReactNode;
    className?: string;
}

export const SecondaryButton = ({ className = "", children }: SecondaryButtonTypes) => {
    const buttonClassName = [className, "inline-flex items-center justify-center font-semibold text-green-900 border border-green-900 rounded-full hover:bg-green-900 hover:text-white"].join(" ")
    return (
        <Button className={buttonClassName}>
            {children}
        </Button>
    )
}
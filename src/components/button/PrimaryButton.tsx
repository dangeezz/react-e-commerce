import { Button } from "./Button";

type PrimaryButtonTypes = {
    children: React.ReactNode;
    className?: string;
}

export const PrimaryButton = ({ className = "", children }: PrimaryButtonTypes) => {
    const buttonClassName = [className, "inline-flex items-center justify-center font-semibold text-white bg-green-900 rounded-full"].join(" ")
    return (
        <Button className={buttonClassName}>
            {children}
        </Button>
    )
}
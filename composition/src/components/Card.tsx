import type {ReactNode} from "react";

interface CardProps {
    children: ReactNode;
}

const Card = ({children}: CardProps) => {
    return (
        <div className="card">
            {children}  {/*{children} tells React where to render that content. */}
        </div>
    );
};
export default Card;


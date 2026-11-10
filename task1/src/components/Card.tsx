import type { LucideIcon } from "lucide-react";

interface CardStyle{
    text1: string,
    text2: string,
    color: string,
    number: number,
    icon: LucideIcon
}

const Card = ({text1,text2,color,number,icon:Icon}: CardStyle) => {
    return (
        <div className="p-5 w-80 h-fit border-2 border-slate-300 shadow-2xl rounded-2xl space-y-4">
            <div className="flex justify-between">
                <p className="text-gray-600">{text1}</p>
                <Icon size={25} color={color}/>
            </div>
            <p className="font-bold text-3xl">{number}</p>
            <p className="text-gray-600">{text2}</p>
        </div>
    )
}
export default Card;
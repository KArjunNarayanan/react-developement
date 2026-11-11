import type { LucideIcon } from "lucide-react";

interface QuickCardProps{
    text1: string;
    text2: string;
    color: string;
    icon: LucideIcon;
}
const QuickCard = ({text1,text2,color,icon:Icon}:QuickCardProps) => {
    return (
        <div className="flex flex-col bg-white rounded-2xl border-2 border-slate-200 p-5 space-y-2">
            <Icon size={20} color={color} />
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
    )
}
export default QuickCard;
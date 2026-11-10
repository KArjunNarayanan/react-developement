import { GraduationCap, BookOpen, TrendingUp} from "lucide-react";
import Card from "./Card";
const Main = () => {
    return (
        <section className="px-15 bg-slate-100 flex flex-col gap-5 pt-10">
            <div className="flex gap-3">
                <div className="bg-white px-3 py-2 rounded-2xl shadow-xl">
                    <span className="text-sm font-medium ">Dashboard</span>
                </div>
                <div className="bg-white px-3 py-2 rounded-2xl shadow-xl">
                    <span className="text-sm font-medium">Students</span>
                </div>
                <div className="bg-white px-3 py-2 rounded-2xl shadow-xl">
                    <span className="text-sm font-medium">Add Students</span>
                </div>
            </div>
            <div className="bg-blue-600 p-7 rounded-2xl ">
                <div className="flex items-center">
                    <GraduationCap size={70} color="white" />
                    <div className="flex flex-col">
                        <p className="font-bold text-lg text-white">Student Mangement System</p>
                        <p className="text-sm text-slate-200">Welcome back! Heres your dashboard review.</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4">
                <Card text1="Total Students" text2="Registered Students" color="red" number={5} icon={GraduationCap}/>
                <Card text1="Acitve Students" text2="60% of total" color="green" number={6} icon={TrendingUp}/>
                <Card text1="Inactive Students" text2="Need Attention" color="blue" number={7} icon={GraduationCap}/>
                <Card text1="Total Course" text2="Registered Students" color="violet" number={8} icon={BookOpen}/>
            </div>
        </section>
    )
}
export default Main;
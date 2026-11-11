import { BookOpen, GraduationCap, User } from "lucide-react";
import QuickCard from "./QuickCard";


const QuickActions = () => {
    return (
        <section className="bg-white px-8 py-5 flex flex-col gap-3 rounded-2xl my-6 mx-15 border-2 border-slate-300">
            <div className="flex flex-col">
                <h3 className="font-bold text-lg">Quick Actions</h3>
                <h5 className="text-gray-400">Common tasks you might want to perform</h5>
            </div>
            <div className="grid grid-cols-3 gap-3">
                <QuickCard text1="View all students" text2="Browse and manage student records" color="blue" icon={User}/>
                <QuickCard text1="Add new student" text2="Register a new student" color="green" icon={GraduationCap}/>
                <QuickCard text1="Manage Courses" text2="View and edit course information" color="violet" icon={BookOpen}/>
            </div>
        </section>
    )
};
export default QuickActions;
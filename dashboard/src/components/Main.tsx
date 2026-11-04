import Card from "./Card";

const Main = () => {
    return (
        <>
        <section className="pt-10 px-10">
            <div className="">
                <h1 className="font-semibold text-3xl ">Your Learning Spaces</h1>
                <p className="uppercase text-sm text-slate-400 pt-2">academic control centers</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pt-4">
                <Card color="bg-green-400" text="AP Biology" />
                <Card color="bg-blue-400" text="Calculus BC"/>
                <Card color="bg-red-400" text="World History"/>
                <Card color="bg-violet-500" text="Physics 101"/>
            </div>
        </section>
        </>
    )
}
export default Main;
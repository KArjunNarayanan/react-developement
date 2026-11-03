import Card from "./Card";

const Main = () => {
    return (
        <>
        <section className="pt-10 px-10">
            <div className="">
                <h1 className="font-semibold text-3xl">Your Learning Spaces</h1>
                <p className="uppercase text-sm text-slate-400 pt-2">academic control centers</p>
            </div>
            <div className="flex gap-3">
                <Card/>
            </div>
        </section>
        </>
    )
}
export default Main;
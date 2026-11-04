interface Properties {
    color: string;
    text: string;
}
const Card = ({color, text}: Properties) => {
    return(
        <div className={`${color} rounded-3xl overflow-hidden h-60 w-80`}>
            <h1 className="text-white text-center py-20 font-extrabold text-2xl">{text}</h1>
        </div>
    )
}
export default Card;
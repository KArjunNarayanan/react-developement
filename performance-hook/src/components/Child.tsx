interface ChildProps {
    onClick: () => void;
}
function Child({onClick}: ChildProps) {
    console.log("Child rendered");
    return (
        <button onClick={onClick}>
            Child Button
        </button>
    )
}
export default Child;
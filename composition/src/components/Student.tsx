interface StudentProps {
    name: string;
    age: number;
}

const Student = ({name, age}: StudentProps) => {
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
        </div>
    );
};

export default Student;
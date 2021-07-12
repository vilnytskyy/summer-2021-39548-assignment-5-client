import campusImg from "../../imgs/campus.png";

const CampusView = (props) => {
    const { campus } = props;

    const checkStudents = () => {
        let temp =
            <ul>
                <li>There are no students at this campus.</li>
            </ul>

        if (campus.students === undefined) {
            return temp;
        }

        if (!campus.students.length) {
            return temp;
        }

        return temp =
            <ul>
                {campus.students.map(student => {
                    let name = student.firstname + " " + student.lastname;
                    return (
                        <li key={student.id}>{name}</li>
                    );
                })}
            </ul>
    }

    return (
        <div>
            <div>
                <img src={campusImg} alt="Campus by Massupa  Kaewgahya from the Noun Project" />
            </div>
            <h1>{campus.name}</h1>
            <h2>{campus.address}</h2>
            <p>{campus.description}</p>
            <h2>Students</h2>
            {checkStudents()}
        </div>
    );

};

export default CampusView;
import studentImg from "../../imgs/student.png";

const StudentView = (props) => {
    const { student } = props;

    const checkCampus = () => {
        if (student.campus === undefined || student.campus === null) {
            return student.firstname + " " + student.lastname + " is currentlty not attending any campus.";
        }

        return student.campus.name;
    }

    return (
        <div>
            <div>
                <img src={studentImg} alt="student by ProSymbols from the Noun Project" />
            </div>
            <h1>{student.firstname + " " + student.lastname}</h1>
            <h3>
                <label>Campus </label>
                : {checkCampus()}</h3>
            <h3>
                <label>Email </label>
                : {student.email}</h3>
            <h3>
                <label>GPA </label>
                : {student.gpa}</h3>
        </div>
    );

};

export default StudentView;
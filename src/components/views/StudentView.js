import { Link } from "react-router-dom";
import studentImg from "../../imgs/student.png";

const StudentView = (props) => {
    const { student } = props;

    const checkCampus = () => {
        let temp = student.firstname + " " + student.lastname + " is currentlty not attending any campus.";
        if (student.campus === undefined || student.campus === null) {
            return temp;
        }

        return temp =
        <Link className="linkTitle" to={`/campus/${student.campusId}`}>
            {student.campus.name}
        </Link>
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
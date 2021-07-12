import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
    const { students, deleteStudent } = props;

    if (!students.length) {
        return (
            <div>
                <p>There are no students.</p>
                <Link className="link" to={`student/new`}>
                    <button>Add New Student</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="AllStudentsView">
            <h1 id="CRUD">
                CRUD App
            </h1>
            
            <h1>
                All Students
            </h1>

            <nav>
                <Link className="link" to={'/'} >
                    Home
                </Link>

                <Link className="link" to={'/campuses'} >
                    All Campuses
                </Link>
            </nav>

            {students.map((student) => {
                let name = student.firstname + " " + student.lastname;
                return (
                    <div key={student.id}>
                        <Link className="linkTitle" to={`/student/${student.id}`}>
                            {name}
                        </Link>
                        <button onClick={() => deleteStudent(student.id)}>Delete</button>
                    </div>
                );
            }
            )}

            <Link className="link" to={`/newstudent`}>
                Add New Student
            </Link>
        </div>
    );
};


export default AllStudentsView;
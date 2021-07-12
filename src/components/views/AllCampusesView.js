import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import campusImg from "../../imgs/campus.png";

const AllCampusesView = (props) => {
    const { allCampuses, deleteCampus } = props;

    if (!props.allCampuses.length) {
        return <div>There are no campuses.</div>;
    }

    return (
        <div className="AllCampusesView">
            <h1 id="CRUD">
                CRUD App
            </h1>
            
            <h1>
               All Campuses
            </h1>

            <nav>
                <Link className="link" to={'/'} >
                    Home
                </Link>

                <Link className="link" to={'/students'} >
                    All Students
                </Link>
            </nav>

            {allCampuses.map((campus) => (
                <div key={campus.id}>
                    <div>
                        <img src={campusImg} alt="Campus by Massupa  Kaewgahya from the Noun Project" />
                    </div>

                    <Link className="linkTitle" to={`/campus/${campus.id}`}>
                        {campus.name}
                    </Link>
                    
                    <p>{campus.description}</p>

                    <button onClick={() => deleteCampus(campus.id)}>Delete</button>
                </div>
            ))}

            <Link className="link" to={`/newcampus`}>
                Add New Campus
            </Link>
        </div>
    );
};

AllCampusesView.propTypes = {
    allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
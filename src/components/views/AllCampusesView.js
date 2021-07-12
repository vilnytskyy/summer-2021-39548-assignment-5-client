import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import campusImg from "../../imgs/campus.png";

const AllCampusesView = (props) => {
    if (!props.allCampuses.length) {
        return <div>There are no campuses.</div>;
    }

    return (
        <div>
            {props.allCampuses.map((campus) => (
                <div key={campus.id}>
                    <img src={campusImg} alt="Campus by Massupa  Kaewgahya from the Noun Project" style={{ height: "100px", width: "auto" }} />
                    <Link to={`/campus/${campus.id}`}>
                        <h1>{campus.name}</h1>
                    </Link>
                    <p>{campus.description}</p>
                </div>
            ))}
        </div>
    );
};

AllCampusesView.propTypes = {
    allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
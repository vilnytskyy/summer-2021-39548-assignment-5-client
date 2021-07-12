import { Link } from 'react-router-dom';

const HomePageView = () => {
    return (
        <div className="HomePageView">
            <h1 id="CRUD">
                CRUD App
            </h1>

            <h1>Home Page</h1>

            <nav>
                <Link className="link" to={'/campuses'} >
                    All Campuses
                </Link>

                <Link className="link" to={'/students'} >
                    All Students
                </Link>
            </nav>
        </div>
    );
}

export default HomePageView;

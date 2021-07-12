import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";

//Components
import * as comp from "./components/containers";

// if you create separate components for adding/editing 
// a student or campus, make sure you add routes to those
// components here

const App = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={comp.HomePageContainer} />
                <Route exact path="/campuses" component={comp.AllCampusesContainer} />
                <Route exact path="/students" component={comp.AllStudentsContainer} />
                <Route exact path="/newcampus" component={comp.NewCampusContainer} />
                <Route exact path="/newstudent" component={comp.NewStudentContainer} />
                <Route exact path="/campus/:id" component={comp.CampusContainer} />
                <Route exact path="/student/:id" component={comp.StudentContainer} />
            </Switch>
        </div>
    );
}

export default App;

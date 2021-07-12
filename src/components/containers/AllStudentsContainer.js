import { Component } from 'react';
import { connect } from 'react-redux';

import {
    fetchAllStudentsThunk,
    deleteStudentThunk
} from '../../store/thunks';

import AllStudentsView from '../views/AllStudentsView';

class AllStudentsContainer extends Component {
    componentDidMount() {
        this.props.fetchAllStudents();
    }
    render() {
        return (
            <AllStudentsView
                allStudents={this.props.allStudents}
                deleteStudent={this.props.deleteStudent}
            />
        )
    }
}

// Map state to props;
const mapState = (state) => {
    return {
        allStudents: state.allStudents,
    };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
    return {
        fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
        deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId)),
    };
};

export default connect(mapState, mapDispatch)(AllStudentsContainer);
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    formContainer: {
        width: '300px',
        backgroundColor: '#f0f0f5',
        borderRadius: '5px',
        margin: 'auto',
    },
    title: {
        flexGrow: 1,
        textAlign: 'left',
        textDecoration: 'none'
    },
    customizeAppBar: {
        backgroundColor: '#11153e',
        shadows: ['none'],
    },
    formTitle: {
        backgroundColor: '#c5c8d6',
        marginBottom: '15px',
        textAlign: 'center',
        borderRadius: '5px 5px 0px 0px',
        padding: '3px'
    },

}));

const NewStudentView = (props) => {
    const { handleChange, handleSubmit } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.formContainer}>
                <div className={classes.formTitle}>
                    <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
                        New Student
                    </Typography>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label >First Name: </label>
                    <input type="text" name="firstname" onChange={(e) => handleChange(e)} />
                    <br />
                    <br />

                    <label >Last Name: </label>
                    <input type="text" name="lastname" onChange={(e) => handleChange(e)} />
                    <br />
                    <br />

                    <label >email: </label>
                    <input type="text" name="email" onChange={(e) => handleChange(e)} />
                    <br />
                    <br />

                    <label >GPA: </label>
                    <input type="text" name="gpa" onChange={(e) => handleChange(e)} />
                    <br />
                    <br />

                    <label >Campus: </label>
                    <input type="text" name="campusId" onChange={(e) => handleChange(e)} />
                    <br />
                    <br />

                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                    <br />
                    <br />
                </form>
            </div>
        </div>

    )
}

export default NewStudentView;
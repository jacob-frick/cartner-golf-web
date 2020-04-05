import { makeStyles } from '@material-ui/core/styles'
const logInStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    loginStyle: {
        backgroundColor: 'white',
        maxHeight: '50%',
        marginTop: '50%',
        marginBottom: '50%',
        paddingBottom: '2rem',
        paddingRight: '2rem',
        paddingLeft: '2rem',
        borderRadius: '.8rem',
        paddingTop: '1rem',
        display: 'inline-table'
    },
    avatar: {
        // margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '2rem'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    backgroundImage: {
        display: 'flex',
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${"../assets/images/backgroundImage.jpg"})`,
        backgroundRepeat: 'round',
    },
    textCenter: {
        textAlign: 'center',
        marginTop: '1rem'
    },
    header: {
        textAlign: 'center',
        fontFamily: 'Open Sans, sans- serif'
    },
    onLinkHover: {
        '&: hover': {
            cursor: 'pointer',
        }
    }
}))
export default logInStyles
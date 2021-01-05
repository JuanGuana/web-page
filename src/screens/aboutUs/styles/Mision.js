import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  card: {
    borderRadius: '20px',
    padding: theme.spacing(3, 2),
    margin: theme.spacing(4, 2),

    '&:first-child': {
      background: theme.palette.primary.fade,
    },
    '&:last-child': {
      background: theme.palette.secondary.fade,
    },
  },
  [theme.breakpoints.up('sm')]: {
    section: {
      display: 'flex',
      justifyContent: 'center',
    },
    card: {
      width: '320px',
      height: '264px',
    },
  },
  [theme.breakpoints.up('lg')]: {
    section: {
      margin: theme.spacing(8, 26),
    },
    card: {
      width: '496px',
      height: '260px',
    },
  },
}));

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;

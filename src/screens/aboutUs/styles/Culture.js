import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  background: {
    paddingTop: theme.spacing(4),
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(4),
    justifyContent: 'center',
  },
  card: {
    borderRadius: '20px',
    padding: theme.spacing(3, 2),
    marginBottom: theme.spacing(3),
    width: '288px',
    height: '212px',
    '&:nth-child(2n)': {
      border: `solid 1px ${theme.palette.primary.light}`,
    },
    '&:nth-child(2n-1)': {
      border: `solid 1px ${theme.palette.secondary.light}`,
    },
  },
  [theme.breakpoints.up('sm')]: {
    background: {
      paddingTop: theme.spacing(5),
    },
    cardContainer: {
      justifyContent: 'space-between',
    },
    card: {
      width: '264px',
      height: '248px',
    },
  },
  [theme.breakpoints.up('lg')]: {
    cardContainer: {
      marginBottom: theme.spacing(4),
      justifyContent: 'space-between',

    },
    card: {
      width: '320px',
      height: '212px',
    },
  },

}));

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;

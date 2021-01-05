import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  background: {
    background: theme.palette.primary.fade,
    paddingTop: theme.spacing(4),
  },

  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(4),
    justifyContent: 'center',
  },
  [theme.breakpoints.up('sm')]: {
    background: {
      paddingTop: theme.spacing(5),
    },
    cardContainer: {
      justifyContent: 'space-between',
    },
  },

}));

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;

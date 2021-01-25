import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  imagesContent: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-between',
    },
  },

  containerImage: ({ imageIsLarge }) => ({
    margin: theme.spacing(0, 1),
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: `${imageIsLarge ? '41px' : '134px'}`,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
  }),
  image: {
    objectFit: 'cover',
    maxHeight: 96,
    width: 'auto',
    margin: 'auto',
  },
  arrow: {
    color: theme.palette.grey[500],
  },
  disableArrow: {
    color: theme.palette.grey[200],
  },
  showLabel: {
    visibility: 'collapse',
  },
}));

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;

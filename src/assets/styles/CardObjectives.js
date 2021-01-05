import PropTypes from 'prop-types';

const styles = (theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    padding: `${theme.spacing(1)}px 0`,
    textAlign: 'center',
    lineHeight: '30px',
    color: theme.palette.primary.main,
  },
  description: {
    textAlign: 'center',
    color: theme.palette.common.black,
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;

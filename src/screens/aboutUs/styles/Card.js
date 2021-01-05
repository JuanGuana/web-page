import PropTypes from 'prop-types';

const styles = (theme) => ({
  card: ({ xs }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '20px',
    background: 'white',
    boxShadow: '4px 4px 8px rgba(133, 135, 137, 0.3)',
    marginBottom: theme.spacing(3),
    width: xs.width,
  }),
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
  imageStyle: ({ xs }) => ({
    width: xs.width,
    height: xs.height,
    position: 'relative',
    borderBottom: `5px solid ${theme.palette.primary.light}`,
    background: theme.palette.primary.light,
    borderRadius: '20px 20px 0 0',
    '&>div>img': {
      objectFit: 'cover',
      borderRadius: '20px 20px 0 0',
    },
  }),

  [theme.breakpoints.up('sm')]: {
    imageStyle: ({ sm }) => ({
      width: sm.width,
      height: sm.height,
    }),
    card: ({ sm }) => ({
      width: sm.width,
    }),
  },
  [theme.breakpoints.up('md')]: {
    imageStyle: ({ md }) => ({
      width: md.width,
      height: md.height,
    }),
    card: ({ md }) => ({
      width: md.width,
    }),
  },
  [theme.breakpoints.up('lg')]: {
    imageStyle: ({ lg }) => ({
      width: lg.width,
      height: lg.height,
    }),
    card: ({ lg }) => ({
      width: lg.width,
    }),
  },
});

styles.propTypes = {
  theme: PropTypes.shape(),
};

export default styles;

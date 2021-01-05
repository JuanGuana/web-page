import { Box, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../styles/CardObjectives';

const useStyles = makeStyles(styles);

const CardService = ({ image, title, description }) => {
  const classes = useStyles();
  return (
    <Box className={classes.card}>
      <Box component="figure">
        <img loading="lazy" width={100} height={100} src={image} alt={title} />
      </Box>
      <Typography
        variant="h2"
        component="h2"
        className={classes.title}
      >
        {title}
      </Typography>
      <Typography variant="body1" className={classes.description}>
        {description}
      </Typography>
    </Box>
  );
};

CardService.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardService;

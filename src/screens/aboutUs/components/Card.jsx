import { Box, Typography, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../styles/Card';

const useStyles = makeStyles(styles);

const CardService = ({ image, title, description, link, imageSizes }) => {
  const classes = useStyles({ ...imageSizes });
  return (
    <Box className={classes.card}>
      <Box component="figure" className={classes.imageStyle}>
        <Image
          quality={100}
          src={image}
          layout="fill"
          alt={title}
        />
      </Box>
      <Typography
        variant="h3"
        component="h3"
        className={classes.title}
      >
        {title}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {description}
      </Typography>
      <Box component="figure" m={1}>
        <a href={link} rel="noreferrer" target="_blank">
          <img loading="lazy" width={24} height={24} src="/assets/images/linkedin.svg" alt="Linkedin icono" />
        </a>
      </Box>
    </Box>
  );
};

CardService.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imageSizes: PropTypes.shape({
    xs: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    sm: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    md: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    lg: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
  }).isRequired,
};

export default CardService;

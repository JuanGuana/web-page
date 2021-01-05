import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../styles/Mision';
import Card from './CardObjectives';

const Mision = ({
  imageSizes,
  options,
}) => {
  const classes = styles({ ...imageSizes });

  return (
    <Box component="section" position="relative" className={classes.section}>
      {options.map((option) => (
        <Box key={option.title} className={classes.card}>
          <Card
            image={option.path}
            title={option.title}
            description={option.description}
          />
        </Box>
      ))}
    </Box>
  );
};

Mision.propTypes = {
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default Mision;

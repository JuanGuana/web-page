import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../styles/Mision';
import CustomContainer from '#Components/CustomContainer';
import CardPartnership from '#Components/CardPartnership';

const Mision = ({
  imageSizes,
  optionsShoppingOnline,
}) => {
  const classes = styles({ ...imageSizes });

  return (
    <Box component="section" position="relative">
      <CustomContainer>
        <Box className={classes.shop}>
          {optionsShoppingOnline.map((service) => (
            <Box key={service.title} className={classes.optionsShop}>
              <CardPartnership
                image={service.path}
                title={service.title}
                description={service.description}
              />
            </Box>
          ))}
        </Box>
      </CustomContainer>
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
  optionsShoppingOnline: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

Mision.defaultProps = {
  backgroundImage: '',
  heightImage: 0,
  titlePart2: '',
  titlePart3: '',
};
export default Mision;

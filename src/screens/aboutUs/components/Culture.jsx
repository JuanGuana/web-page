import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../styles/Culture';
import Card from './CardObjectives';
import Subtitle from '#Components/Subtitle';
import BackgroundImage from '#Components/BackgroundImage';
import CustomContainer from '#Components/CustomContainer';

const Culture = ({
  options,
  titlePart1,
  backgroundImage,
  heightImage,
}) => {
  const classes = styles();

  return (
    <Box component="section" position="relative" className={classes.background}>
      <BackgroundImage image={backgroundImage} height={heightImage} />
      <CustomContainer>
        <Box component="article">
          <Subtitle
            head={titlePart1}
            align="center"
            component="h2"
            variant="h2"
          />
          <Box className={classes.cardContainer}>
            {options.map((culture) => (
              <Box key={culture.description} className={classes.card}>
                <Card
                  image={culture.path}
                  title=""
                  description={culture.description}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

Culture.propTypes = {
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
  titlePart1: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};
Culture.defaultProps = {
  backgroundImage: '',
  heightImage: 0,
  titlePart1: '',
};
export default Culture;

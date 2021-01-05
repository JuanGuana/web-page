import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../styles/MemberCards';
import Subtitle from '#Components/Subtitle';
import CustomContainer from '#Components/CustomContainer';
import BackgroundImage from '#Components/BackgroundImage';
import Card from './Card';

const Members = ({
  titlePart1,
  backgroundImage,
  heightImage,
  imageSizes,
  options,
}) => {
  const classes = styles({ ...imageSizes });

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
            {options.map((member) => (
              <Box key={member.name} className={classes.card}>
                <Card
                  image={member.path}
                  title={member.name}
                  description={member.position}
                  link={member.linkedin}
                  imageSizes={imageSizes}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

Members.propTypes = {
  backgroundImage: PropTypes.string,
  heightImage: PropTypes.number,
  titlePart1: PropTypes.string.isRequired,
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

Members.defaultProps = {
  backgroundImage: '',
  heightImage: 0,
};
export default Members;

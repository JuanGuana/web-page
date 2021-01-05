import TeamSection from '../components/MemberCards';
import { optionTeam } from '#app/constants/aboutUs';

const Team = () => (
  <TeamSection
    titlePart1={optionTeam.title}
    backgroundImage={optionTeam.backgroundImage}
    heightImage={optionTeam.heightImage}
    imageSizes={optionTeam.imageSizes}
    options={optionTeam.members}
  />
);

export default Team;

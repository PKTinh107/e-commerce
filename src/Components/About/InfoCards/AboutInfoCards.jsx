import { aboutCardsInfo } from "src/Data/staticData";
import InfoCard from "../../Shared/MiniComponents/InfoCard/InfoCard";
import s from "./AboutInfoCards.module.scss";
import enTranslation from '../../../../public/locale/en/translation.json';

const AboutInfoCards = () => {
  return (
    <section className={s.infoCardsSection}>
      {aboutCardsInfo.map((cardInfo, index) => (
        <InfoCard key={cardInfo.id} data={cardInfo} index={index} />
      ))}
    </section>
  );
};
export default AboutInfoCards;

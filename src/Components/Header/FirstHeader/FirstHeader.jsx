import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import s from "./FirstHeader.module.scss";
import LanguageSelector from "./LanguageSelector";
import enTranslation from '../../../../public/locale/en/translation.json';

const FirstHeader = () => {
  const { t } = useTranslation();

  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.space} />

        <div className={s.headerContent}>
          <p className={s.discount}>
            <span>{enTranslation.firstHeader.saleMessage}</span>
            <Link to="/products">{enTranslation.firstHeader.shopNow}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstHeader;

import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";
import AccountMenuSection from "./AccountMenuSection/AccountMenuSection";
import s from "./AccountPage.module.scss";
import EditProfileForm from "./EditProfileForm/EditProfileForm";
import enTranslation from '../../../public/locale/en/translation.json';

const AccountPage = () => {
  const { loginInfo } = useSelector((state) => state.user);
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Profile</title>
        <meta
          name="description"
          content="Update yours personal information easily on Exclusive. Manage your account details, shipping addresses, and preferences for a personalized shopping experience."
        />
      </Helmet>

      <div className="container">
        <main className={s.accountPage} id="account-page">
          <div className={s.wrapper}>
            <PagesHistory history={["/", t("nav.profile")]} />

            <p className={s.welcomeMessage}>
              {enTranslation.common.welcome}
              {"! "}
              <Link to="/profile">{loginInfo.username}</Link>
            </p>
          </div>

          <div className={s.accountPageContent}>
            <AccountMenuSection />
            <EditProfileForm />
          </div>
        </main>
      </div>
    </>
  );
};
export default AccountPage;

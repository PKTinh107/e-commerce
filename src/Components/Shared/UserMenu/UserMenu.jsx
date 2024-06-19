import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import useSignOut from "src/Hooks/App/useSignOut";
import SvgIcon from "../MiniComponents/SvgIcon";
import s from "./UserMenu.module.scss";
import UserMenuItemWithCount from "./UserMenuItemWithCount";
import enTranslation from '../../../../public/locale/en/translation.json';

const UserMenu = ({ isActive, toggler }) => {
  const { wishList } = useSelector((state) => state.products);
  const wishListLength = wishList.length;
  const activeClass = isActive ? s.active : "";
  const navigateTo = useNavigate();
  const { t } = useTranslation();
  const signOut = useSignOut();

  function handleSignOut() {
    signOut();
    navigateTo("/", { replace: true });
  }

  return (
    <div className={`${s.userMenu} ${activeClass}`}>
      <NavLink to="/profile" aria-label="Profile page">
        <SvgIcon name="user" />
        <span>{enTranslation.userMenuItems.profile}</span>
      </NavLink>

      <NavLink to="/cart" aria-label="Cart page">
        <SvgIcon name="cart" />
        <span>{enTranslation.userMenuItems.cart}</span>
      </NavLink>

      <NavLink to="/cancellations" aria-label="Cancellations page">
        <SvgIcon name="cancel" />
        <span>{enTranslation.userMenuItems.cancellations}</span>
      </NavLink>

      <NavLink to="/reviews" aria-label="Reviews page">
        <SvgIcon name="solidStar" />
        <span>{enTranslation.userMenuItems.reviews}</span>
      </NavLink>

      <NavLink to="/wishlist" aria-label="Wishlist page">
        <UserMenuItemWithCount
          props={{
            iconName: "save",
            title: enTranslation.userMenuItems.wishlist,
            countLength: wishListLength,
          }}
        />
      </NavLink>

      <a
        href="#"
        onClick={handleSignOut}
        onBlur={() => toggler()}
        aria-label="Logout"
      >
        <SvgIcon name="boxArrowLeft" />
        <span>{enTranslation.userMenuItems.logout}</span>
      </a>
    </div>
  );
};
export default UserMenu;

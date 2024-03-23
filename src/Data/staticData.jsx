import { v4 as uuid } from "uuid";
import {
  appleLogo,
  bkashCard,
  canonLogo,
  mastercard,
  member1Img,
  member2Img,
  member3Img,
  nagadCard,
  productImg1,
  productImg2,
  productImg3,
  visaCard,
} from "../Assets/Images/Images";

export const introductionSliderData = [
  {
    productName: "Iphone 14 Series",
    productImg: productImg1,
    logoImg: appleLogo,
    discountText: "Up to 10% off Voucher",
    id: uuid(),
  },
  {
    productName: "Canon EOS 5D MkII",
    productImg: productImg2,
    logoImg: canonLogo,
    discountText: "Up to 30% off Voucher",
    id: uuid(),
  },
  {
    productName: "MacBook Pro 16",
    productImg: productImg3,
    logoImg: appleLogo,
    discountText: "Up to 15% off Voucher",
    id: uuid(),
  },
  // {
  //   productName: "",
  //   productImg: "",
  //   logoImg: "",
  //   discountText: "Up to 10% off Voucher",
  //   id: uuid(),
  // },
];

export const categoriesData = [
  {
    iconName: "mobile",
    title: "Phones",
    id: uuid(),
  },
  {
    iconName: "computer",
    title: "Computers",
    id: uuid(),
  },
  {
    iconName: "smartWatch",
    title: "SmartWatch",
    id: uuid(),
  },
  {
    iconName: "camera",
    title: "Camera",
    id: uuid(),
  },
  {
    iconName: "headphone",
    title: "HeadPhones",
    id: uuid(),
  },
  {
    iconName: "gamepad",
    title: "Gaming",
    id: uuid(),
  },
  {
    iconName: "",
    title: "Furniture",
    id: uuid(),
  },
  {
    iconName: "",
    title: "Clothes",
    id: uuid(),
  },
  {
    iconName: "",
    title: "Animal",
    id: uuid(),
  },
  {
    iconName: "",
    title: "Curologies",
    id: uuid(),
  },
];

export const aboutCardsInfo = [
  {
    iconName: "shop",
    number: "10.5k",
    text: "Sallers active our site",
    id: uuid(),
  },
  {
    iconName: "dollarSign",
    number: "33k",
    text: "Mopnthly Produduct Sale",
    id: uuid(),
  },
  {
    iconName: "shoppingBag",
    number: "45.5k",
    text: "Customer active in our site",
    id: uuid(),
  },
  {
    iconName: "moneyBag",
    number: "25k",
    text: "Anual gross sale in our site",
    id: uuid(),
  },
];

export const ourMembersData = [
  {
    name: "Tom Cruise",
    jobTitle: "Founder & Chairman",
    img: member1Img,
    socialMedia: {
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
    id: uuid(),
  },

  {
    name: "Emma Watson",
    jobTitle: "Managing Director",
    img: member2Img,
    socialMedia: {
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
    id: uuid(),
  },

  {
    name: "Will Smith",
    jobTitle: "Product Designer",
    img: member3Img,
    socialMedia: {
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
    id: uuid(),
  },
];

export const paymentCards = [
  {
    img: bkashCard,
    alt: "Bkash card",
    link: "https://www.bkash.com/en/products-services/visa-card-to-bkash",
    id: uuid(),
  },
  {
    img: visaCard,
    alt: "Visa card",
    link: "https://usa.visa.com/pay-with-visa/find-card/apply-credit-card",
    id: uuid(),
  },
  {
    img: mastercard,
    alt: "Mastercard",
    link: "https://www.mastercard.us/en-us.html",
    id: uuid(),
  },
  {
    img: nagadCard,
    alt: "Nagad card",
    link: "https://www.nagad.com.bd/services/?service=add-money-from-card",
    id: uuid(),
  },
];

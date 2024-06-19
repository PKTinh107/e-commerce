import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { SIMPLE_DELAYS } from "src/Data/globalVariables";
import { productsData } from "src/Data/productsData";
import { updateGlobalState } from "src/Features/globalSlice";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import useUpdateLoadingOnSamePage from "src/Hooks/App/useUpdateLoadingOnSamePage";
import useGetSearchParam from "src/Hooks/Helper/useGetSearchParam";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";
import ProductDetails from "./ProductDetails/ProductDetails";
import s from "./ProductDetailsPage.module.scss";
import RelatedItemsSection from "./RelatedItemsSection/RelatedItemsSection";
import enTranslation from '../../../public/locale/en/translation.json';

const ProductDetailsPage = () => {
  const { t } = useTranslation();
  const PRODUCT_NAME = useGetSearchParam("product");
  const PRODUCT_DATA = productsData.find(
    (product) => product?.name?.toLowerCase() === PRODUCT_NAME?.toLowerCase()
  );
  const productCategory = PRODUCT_DATA?.category.toLowerCase();
  const productCategoryTrans = enTranslation.categoriesData[productCategory]
  const productName = PRODUCT_DATA?.shortName.replaceAll(" ", "");
  const productNameTrans = enTranslation.products[productName].name;
  const history = [
    enTranslation.history.account,
    productCategoryTrans,
    productNameTrans,
  ];
  const historyPaths = [
    {
      index: 0,
      path: "/profile",
    },
    {
      index: 1,
      path: `/category?type=${PRODUCT_DATA?.category}`,
    },
  ];

  useUpdateLoadingOnSamePage({
    loadingKey: "loadingProductDetails",
    actionMethod: updateGlobalState,
    delays: SIMPLE_DELAYS,
    dependencies: [PRODUCT_NAME],
  });
  useScrollOnMount(200);

  return (
    <>
      <Helmet>
        <title>{PRODUCT_DATA?.shortName}</title>
        <meta
          name="description"
          content="Explore the details and specifications of your favorite products on Exclusive. Find everything you need to know, from features to customer reviews, before making your purchase."
        />
      </Helmet>

      <div className="container">
        <main className={s.detailsPage}>
          <PagesHistory history={history} historyPaths={historyPaths} />
          <ProductDetails data={PRODUCT_DATA} />
          <RelatedItemsSection
            productType={PRODUCT_DATA?.category}
            currentProduct={PRODUCT_DATA}
          />
        </main>
      </div>
    </>
  );
};
export default ProductDetailsPage;

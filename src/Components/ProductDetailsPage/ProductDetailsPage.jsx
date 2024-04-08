import { Helmet } from "react-helmet-async";
import { SIMPLE_DELAYS } from "src/Data/globalVariables";
import { productsData } from "src/Data/productsData";
import { capitalize } from "src/Functions/helper";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import useGetSearchParam from "src/Hooks/Helper/useGetSearchParam";
import { updateGlobalState } from "../../Features/globalSlice";
import useUpdateLoadingOnSamePage from "../../Hooks/App/useUpdateLoadingOnSamePage";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import ProductDetails from "./ProductDetails/ProductDetails";
import s from "./ProductDetailsPage.module.scss";
import RelatedItemsSection from "./RelatedItemsSection/RelatedItemsSection";

const ProductDetailsPage = () => {
  useScrollOnMount(200);
  const PRODUCT_NAME = useGetSearchParam("product");
  const PRODUCT_DATA = productsData.filter(
    (product) => product.name.toLowerCase() === PRODUCT_NAME.toLowerCase()
  )?.[0];
  const { name, category, shortName } = PRODUCT_DATA;
  const history = ["Account", capitalize(category), name.toUpperCase()];
  const historyPaths = [
    {
      index: 0,
      path: "/profile",
    },
    {
      index: 1,
      path: `/category?type=${category}`,
    },
  ];
  useUpdateLoadingOnSamePage({
    loadingKey: "loadingProductDetails",
    actionMethod: updateGlobalState,
    delays: SIMPLE_DELAYS,
    dependencies: [PRODUCT_NAME],
  });

  return (
    <>
      <Helmet>
        <title>{shortName}</title>
      </Helmet>

      <div className="container">
        <main className={s.detailsPage}>
          <PagesHistory history={history} historyPaths={historyPaths} />
          <ProductDetails data={PRODUCT_DATA} />
          <RelatedItemsSection
            productType={category}
            currentProduct={PRODUCT_DATA}
          />
        </main>
      </div>
    </>
  );
};
export default ProductDetailsPage;

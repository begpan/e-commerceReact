// bir context yapısına abone olmamızı saglaar
import { useContext } from "react";
// 2) abone olmak istegimiz contexti cagırcaz
import { ProductContext } from "../context/ProductContext";
import Loader from "../components/Loader";
import Card from "../components/Card";

const HomePage = () => {
  // context yapısıdna tutulan bir veriye projedeki bileşen içerisinde erişmek
  // istiyorsak bileşenden ilgili context yapısında abone oluruz
  const { products, category } = useContext(ProductContext);
  return (
    <>
      <div className="container d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-4 my-5">
        {/* veriler gelmediyse ekrana yukşeniyor bas */}
        {!products && <Loader />}

        {/* veriler geldiyse her biri için kart bas */}

        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default HomePage;

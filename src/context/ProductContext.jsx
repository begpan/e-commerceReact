import axios from "axios";
import { createContext, useEffect, useState } from "react";
/*context apı
// uygulamada birden cok bşleşenin ihtiyacı olan verşlerli
bileşenden bagımsız bir sekilde konumlanan merkezkerde yonetmeye yarar

context yapısı içlerinde verilelerin statini ve verşlerş değşitirmeye yarayan 
fonsksipyonlar tutabilir. 

context tuttugumuz degıskenleri bileşenler dogrudan aktarım yapan merkezi state
yonetim aracıdır
*/
// !context yapısının temelini oluşturma
export const ProductContext = createContext();

// ! sağlayıcı ve onun tuttugu verileri tanımlama

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    setProducts(null);

    const url =
      category === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`;
    axios
      .get(url)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, [category]);

  //   context yapsıınıda tuttugmuz verileri b,leşenlere saglayacagız

  return (
    <ProductContext.Provider value={{ products, category, setCategory }}>
      {children}
    </ProductContext.Provider>
  );
}

// context yapısı tanımlama

import { useLocalStorage } from "@uidotdev/usehooks";
import { createContext, useState } from "react";

// 1) context yapısı tanımlama

export const BasketContext = createContext();

// 2) contexte tuttulan veriyi uygulamaya aktaraacak bşr saglaycı bileşeni tanıma
export function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);

  //   sepete urun ekle

  const addToBasket = (newProduct) => {
    // 1) bu urunden sepette var mı kontrol et
    const found = basket.find((i) => i.id === newProduct.id);
    if (found) {
      // 2 ) urun sepette varsa miktarı bir arttır
      //   a)bulunan urunun miktarını 1 arttır
      const updated = { ...found, amount: found.amount + 1 };
      //   b) sepet dizisindeki eski ürünün yerine güncel halini koy

      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );

      //   c) statei guncelle
      setBasket(newBasket);
    }
    // 3) ürün spette yoksa ürünü sepete ekle miktarı 1 e eşitle
    else setBasket([...basket, { ...newProduct, amount: 1 }]);
  };
  console.log(basket);

  // urunu sepetten kaldır

  const removeFromBasket = (delete_id) => {
    const found = basket.find((i) => i.id === delete_id);
    if (found.amount > 1) {
      // miktarı birden fazlaysa miktarı 1 eksilt
      const updated = { ...found, amount: found.amount - 1 };

      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));
      setBasket(newBasket);
    } else {
      // miktarı 1 e esıtse urunu dızıden kaldır
      const filtered = basket.filter((i) => i.id !== delete_id);
      setBasket(filtered);
    }
  };
  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

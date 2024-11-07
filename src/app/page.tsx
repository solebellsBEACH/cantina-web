"use client"
import { useState } from "react";
import { LibComponents } from "./core/components";

export default function Home() {

  const [isOpenProductModal, setIsOpenProductModal] = useState(false)


  return (
    <>
      <div>
        <LibComponents.CommonComponents.Header />
        <LibComponents.HomeComponents.ImageFliper />
        <LibComponents.HomeComponents.DescriptionContent />
        <LibComponents.HomeComponents.ItemList />
      </div>
      <LibComponents.ProductComponents.ProductModal />
    </>

  );
}

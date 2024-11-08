"use client"
import { LibComponents } from "./core/components";

export default function Home() {

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

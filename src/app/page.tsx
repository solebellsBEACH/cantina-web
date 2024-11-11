"use client"
import { useEffect } from "react";
import { LibComponents } from "./core/components";
import { LocalStorageUtils } from "./core/shared/utils/localStorage";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const user = LocalStorageUtils.getUser()
    console.log(user)
    if (!user) router.push('/login');
  }, [])

  return (
    <>
      <ToastContainer />
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

/* eslint-disable react-hooks/rules-of-hooks */
import Header from '@/components/Layout/Header';
import CardComp from '@/components/UI/CardComp';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react'

const index = ({products}) => {
    const searchParams=useSearchParams();
    const categoryName=searchParams.get("categoryName");
    const router=useRouter()
  return (
    <>
    <Header/>
    <div className="container mx-auto">
        <h1 onClick={()=>router.push("/")} className='my-10 text-2xl cursor-pointer'>{`< ${categoryName}`}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((prodcut)=>(<CardComp key={prodcut.id} product={prodcut}/>))}
        </div>
    </div>
    </>
  )
}

export async function getServerSideProps({ req, params }) {
    try {
      const product = await axios.get(
        `https://assign-api.piton.com.tr/api/rest/products/${params.id}`
      );
      if(product.data.product.length>0){
        return {
            props: {
              products: product ? product.data.product : null,
            },
          };
      }
    
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    } catch (err) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  }
export default index
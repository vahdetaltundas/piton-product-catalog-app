import { fetchProductByCategoryId } from "@/pages/api/hello";
import { useEffect, useState } from "react";
import MiniCard from "./MiniCard";
import { useRouter } from "next/router";

const CategoryComponent = ({ category }) => {
  const router=useRouter();
  const [products, setProducts] = useState([]);
  const getProduct = async () => {
    try {
      const allProducts = await fetchProductByCategoryId(category.id);
      setProducts(allProducts);
    } catch (error) {
      console.error("Api isteği sırasında hata alındı", error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  const firstThreeProducts = products.slice(0, 3);
  return (
    <div className="container mx-auto mt-10">
      <div className="w-full flex justify-between mb-5">
        <h2 className="text-3xl font-bold">{category.name}</h2>
        <button onClick={()=>router.push(`/category/${category.id}?categoryName=${category.name}`)} className="text-[#ef6b4a] text-2xl">View All</button>
      </div>
      <div className="grid  lg:grid-cols-3  gap-4">
        {firstThreeProducts?.map((product) => {
          return <MiniCard key={product.id} product={product} categoryId={category.id} />;
        })}
      </div>
    </div>
  );
};

export default CategoryComponent;

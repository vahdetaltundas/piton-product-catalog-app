import Carousel from "@/components/UI/ImageSlider";
import Header from "../components/Layout/Header";
import { useDispatch, useSelector } from "react-redux";
import CategoryComponent from "@/components/UI/CategoryComponent";
import { useEffect } from "react";
import { fetchCategories } from "@/store/categoriesSlice";
// import { removeAll } from "@/store/productByCategoryId";


export default function Home() {
  
  const dispatch = useDispatch();
  const { categories,productsWithCategoryId} = useSelector(
    (state) => state.categories
  );
  
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Carousel />
      {categories.map((category) => (
        <CategoryComponent key={category.id} category={category}/>
      ))}
    </>
  );
}

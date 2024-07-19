// librerias
import { useState } from "react";

// Componentes
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "DragonBall"]);

  const onAddCategory = (newValue) => {
    if (!categories.includes(newValue)) {
      setCategories([newValue, ...categories]);
    }
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory onNewValue={onAddCategory} />

      {/* Listado de gifs */}
      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  );
};

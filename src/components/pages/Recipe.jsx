import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Image, Button, Spin } from "antd";
import { ArrowLeft } from "lucide-react";
import { data } from "autoprefixer";

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        if (!response.ok) {
          throw new Error("Recipe not found");
        }
        const data = await response.json();
        setRecipe(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="medium" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold text-red-600">{error}</h2>
          <Button onClick={handleGoBack} className="mt-4">
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className=" container bg-gradient-to-r from-red-600 via-red-900 to-yellow-600 min-w-full mx-auto  max-w-screen-lg px-4 ">
      <Button
        onClick={handleGoBack}
        icon={<ArrowLeft className="h-4 w-10" />}
        className="m-4 p-1  "
      ></Button>
      <div className="flex flex-col bg-white mx-auto  max-w-max  items-center rounded-lg shadow-md h-auto p-5 w-full">
        <h1 className="text-4xl font-sans font-bold mb-4">{recipe?.name}</h1>
        <Image
          preview={false}
          src={recipe?.image}
          alt={recipe?.name}
          height={500}
          width="100%"
          className="object-cover rounded-lg flex mb-6"
        />
        <hr />
        <p className="text-gray-600 mb-4">{recipe?.description}</p>
        <div className="mb-6">
          <h2 className="text-2xl font-mono font-semibold mb-2">
            Ingredients:
          </h2>
          <ul className="list-disc font-mono ">
            {recipe?.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold  font-mono mb-2 ">
            Instructions:
          </h2>
          <ol className="list-decimal pl-6 mx-auto mb-10  font-mono ">
            {recipe?.instructions.map((instruction, index) => (
              <li key={index} className="mb-2">
                {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;

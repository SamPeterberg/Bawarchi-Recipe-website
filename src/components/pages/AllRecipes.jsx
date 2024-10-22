import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination, Spin, Alert } from "antd";
import { AlertCircle } from "lucide-react";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const pageSize = 12;

  useEffect(() => {
    fetchRecipes();
  }, [currentPage]);

  const fetchRecipes = async () => {
    setLoading(true);
    try {
      const skip = (currentPage - 1) * pageSize;
      const response = await fetch(
        `https://dummyjson.com/recipes?limit=${pageSize}&skip=${skip}&select=id,name,image`
      );
      const data = await response.json();
      setRecipes(data.recipes);
      setTotal(data.total);
    } catch (err) {
      setError("Failed to fetch recipes. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <div className=" bg-gradient-to-r from-red-600 via-red-900 to-yellow-600  px-10 py-10">
      {error && (
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
          icon={<AlertCircle className="h-4 w-4" />}
          className="mb-4"
        />
      )}

      {loading ? (
        <div className="flex justify-center items-center h-full p-5">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10">
            {recipes.map((recipe, index) => (
              <Link
                to={`/Recipe/${recipe.id}`}
                key={recipe.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-lg hover:scale-105"
              >
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-120 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{recipe.name}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <span> KARACHI</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-1">★</span>
                    <span className="mr-4">
                      {(Math.random() * (5 - 4) + 4).toFixed(1)}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Pagination
              current={currentPage}
              total={total}
              pageSize={pageSize}
              onChange={handlePageChange}
              showSizeChanger={false}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AllRecipes;

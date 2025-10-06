import { useState } from "react";
import { useUser } from "../hooks/useUser.jsx";

const Category = () => {
  useUser();
  const [loading, setLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [openAddCategoryModal, setOpenAddCategoryModal] = useState(false);
  const [openEditCategoryModal, setOpenEditCategoryModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleAddCategory = async (category) => {};

  const handelEditCategory = (category) => {};

  const handleUpdateCategory = async (updateCategory) => {};

  return (
    <Dashboard className="category">
      <div className="my-5 mx-auto">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-semibold">All Categoties</h2>
          <button
            onClick={() => setOpenCategoryModal(true)}
            className="add-btn flex items-center gap-1"
          >
            Add Category
          </button>
        </div>
        <CategoryList
          categories={categoryData}
          onEditCategory={handelEditCategory}
        />

        <Modal
          isOpen={openAddCategoryModal}
          onClose={() => setOpenAddCategoryModal(false)}
          title="Add Category"
        >
          <AddCategoryForm onAddCategory={handleAddCategory} />
        </Modal>

        <Modal
          onClose={() => {
            setOpenAddCategoryModal(false);
            setSelectedCategory(null);
          }}
          isOpen={openEditCategoryModal}
          title="Edit Category"
        >
          <AddCategoryForm
            initialCategoryData={setSelectedCategory}
            onAddCategory={handleUpdateCategory}
            isEditing={true}
          />
        </Modal>
      </div>
    </Dashboard>
  );
};

export default Category;

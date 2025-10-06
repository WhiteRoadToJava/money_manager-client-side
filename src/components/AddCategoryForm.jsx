import EmojiPickerPopup from "./EmojiPickerPopup.jsx";
import { useEffect, useState } from "react";
import Input from "./Input.jsx";
import { LoaderCircle } from "lucide-react";

const AddCategoryForm = ({ onAddCategory, initialCategoryDate, isEditing }) => {
  const [category, setCategory] = useState({
    name: "",
    type: "income",
    icon: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isEditing && initialCategoryDate) {
      setCategory(initialCategoryDate);
    } else {
      setCategory({ name: "", type: "income", icon: "" });
    }
  }, [isEditing, initialCategoryDate]);

  const categoryTypeOptions = [
    { value: "income", label: "Income" },
    { value: "expense", label: "Expense" },
  ];

  const handleChange = (key, value) => {
    setCategory({ ...category, [key]: value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await onAddCategory(category);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-4">
      <EmojiPickerPopup
        icon={category.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />

      <Input
        value={category.name}
        onChange={({ target }) => handleSubmit("name", target.value)}
        label={"Category Name"}
        placeholder="e.g., Freelance, Salary, Groceries"
        type="text"
      />

      <Input
        value={category.type}
        options={categoryTypeOptions}
        onChange={({ target }) => handleChange("type", target.value)}
        label={"Category Type"}
        isSelect={true}
      />

      <div className="flex justify-end mt-4">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="add-btn add-btn-fill"
        >
          {isEditing ? (
            <>
              <LoaderCircle className="w-4 h-4 animate-spin" />
              {isEditing ? "Updating..." : "Adding..."}
            </>
          ) : (
            <>{isEditing ? "Update" : "Add"}</>
          )}
        </button>
      </div>
    </div>
  );
};

export default AddCategoryForm;

import { Layers2, Pencil } from "lucide-react";

const CategoryList = ({categories, onEditCategory, onDeleteCategory}) => {

        return (
                <div className="card p-4">
                        <div className="flex items-center justify-between mb-4">
                                <h4 className="test-lg font-semibold">Category Source</h4>
                        </div>

                        {/* Category list items*/}
                        {categories.length == 0?(
                                <p className="text-center text-gray-500">
                                        No categories found
                                        </p>
                        ):(
                                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {categories.map((category) => (
                                                <div
                                                 key={category.id}
                                                className="group relative flex items-center gap-4 p-3 rounded-lg-hover:bg-gray-100">
                                                        {/* Category icon/emoji  display */}
                                                        <div className="w-12 h-12 flex items-center-justify-center text-xl text-gray-800 rounded-full">
                                                                {category.icon ? (
                                                                        <span className="text-2xl">
                                                                                <img src={category.icon} alt={category.name}
                                                                                className="h-5 w-5" />
                                                                        </span>
                                                                ):(
                                                                        <Layers2 className="text-purple800" />)
                                                                }
                                                        </div>
                                                        {/* Category Details*/}
                                                        <div className="flex-1 flex items-center justify-between">
                                                        </div>
                                                        { /* Category name and type*/}
                                                        <div>
                                                                <p className="text-sm text-gray-400 mt-1 capitalize">
                                                                        {category.name}
                                                                </p>
                                                        </div>
                                                        {/* Action buttons */}
                                                        
                                                        
                                                </div>
                                                ))}
                                        </div>
                        )}
                </div>
    )
}

export default CategoryList;
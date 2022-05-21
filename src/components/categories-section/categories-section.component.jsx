import CategoryItem from "../category-item/category-item.component";
import "./categories-section.styles.scss";

const CategoriesSection = ({categories}) => {    
    return (
        <div className="categories-section-container">
            {categories.map((category) => {
                return (
                    <CategoryItem key={category.id} category={category}/>          
                );
            })}
        </div>
    );
}

export default CategoriesSection;
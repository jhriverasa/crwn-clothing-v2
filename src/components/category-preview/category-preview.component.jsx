import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="nav-link" to={`${title}`}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, index) => {
            return index < 4;
          })
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;

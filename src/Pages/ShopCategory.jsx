

import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/arrow-down-sign-to-navigate.png';
import Item from '../Components/Item/Item';

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  // State for managing the number of products to show
  const [visibleProducts, setVisibleProducts] = useState(12);

  // Handler to load more products
  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 12);

  };

  // Filter products based on category
  const filteredProducts = all_product.filter(item => item.category === props.category);

  return (
    <div className='shop-category'>
      <img className='shopcategary-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{Math.min(filteredProducts.length > visibleProducts ? visibleProducts : filteredProducts.length)}</span> out of {all_product.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img className='dropdown_icon' src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.slice(0, visibleProducts).map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
      {visibleProducts < filteredProducts.length && (
        <div className="shopcategory-loadmore" onClick={handleLoadMore}>
          Explore More
        </div>
      )}
    </div>
  );
};

export default ShopCategory;



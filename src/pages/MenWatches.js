import React from 'react';
import './MenWatches.css';

const MenWatches = () => {
  
  
  const watchCategories = [
    {
      id: 1,
      name: 'Luxury Watches',
      watches: [
        {
          id: 'l1',
          name: 'Classic Automatic',
          price: '$1,299.99',
          image: 'watch-m1.jpg',
          padding: '2px'
        },
        {
          id: 'l2',
          name: 'Premium Gold',
          price: '$2,499.99',
          image: 'watch-m2.avif'
        },
      {
          id: 's1',
          name: 'Digital Sport',
          price: '$299.99',
          image: 'watch-m3.avif'
        },
        {
          id: 's2',
          name: 'Chronograph',
          price: '$399.99',
          image: 'watch-m4.avif'
        },
        {
            id: 's2',
            name: 'Chronograph',
            price: '$399.99',
            image: 'watch-m5.avif'
          },{
            id: 's2',
            name: 'Chronograph',
            price: '$399.99',
            image: 'watch-m6.avif'
          },
          {
            id: 's2',
            name: 'Chronograph',
            price: '$399.99',
            image: 'watch-m7.avif'
          },
          {
            id: 's2',
            name: 'Chronograph',
            price: '$399.99',
            image: 'watch-m8.avif'
          },
          {
            id: 's2',
            name: 'Chronograph',
            price: '$399.99',
            image: 'watch-m9.avif'
          },
          {
            id: 's2',
            name: 'Chronograph',
            price: '$399.99',
            image: 'watch-m10.avif'
          }
      ]
    }
  ];

  const handleAddToCart = (watch) => {
   
    alert('Item added to cart!');
  };

  return (
    <div className="men-watches-container">
      <h1>Men's Watches</h1>
      
      {watchCategories.map(category => (
        <div key={category.id} className="watch-category">
          <h2>{category.name}</h2>
          <div className="watches-grid">
            {category.watches.map(watch => (
              <div key={watch.id} className="watch-card">
                <img src={watch.image} alt={watch.name} />
                <div className="watch-details">
                  <h3>{watch.name}</h3>
                  <p className="price">{watch.price}</p>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(watch)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenWatches; 
import React from 'react'

const foodProducts = [
  {
    name: 'Big Mac',
    price: 1.99,
    stock: 10,
    imageUrl: '/burger-1.jpg',
  },
  {
    name: 'Big Mac',
    price: 1.99,
    stock: 10,
    imageUrl: '/burger-1.jpg',
  },
  {
    name: 'Big Mac',
    price: 1.99,
    stock: 10,
    imageUrl: '/burger-1.jpg',
  },
  {
    name: 'Big Mac',
    price: 1.99,
    stock: 10,
    imageUrl: '/burger-1.jpg',
  },
  {
    name: 'Big Mac',
    price: 1.99,
    stock: 10,
    imageUrl: '/burger-1.jpg',
  },
  {
    name: 'Big Mac',
    price: 1.99,
    stock: 10,
    imageUrl: '/burger-1.jpg',
  },
]

const Products = () => {
  return (
    <div className='container text-center p-3'>
      <h1>Menu</h1>
      <div className='product-list'>
        {
          foodProducts.map((product, index) => (
            <div key={index} className="product-item bg-white rounded shadow-sm">
              <img src={product.imageUrl} alt={product.name + index} className="rounded" height={300} width={300} />
              <div className='p-3 d-flex justify-content-between'>
                <div className='text-start'>
                  <p className='fs-4 m-0 fw-bold'>{product.name}</p>
                  <p className='fs-6 m-0 fw-semibold text-danger'>${product.price}</p>
                </div>
                <button className='btn btn-danger'>Add to Cart</button>
                {/* <button className='btn btn-primary'>Manage</button> */}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Products
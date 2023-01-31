import React from 'react'

const ProductItem = ({index, product, onClickManageProduct}) => {

  return (
    <div>
      <div className="product-item bg-white rounded shadow-sm">
        <img src={product.imageUrl} alt={product.name + index} className="rounded" height={300} width={300} />
        <div className='p-3 d-flex justify-content-between'>
          <div className='text-start'>
            <p className='fs-4 m-0 fw-bold'>{product.name}</p>
            <p className='fs-6 m-0 fw-semibold text-danger'>${product.price}</p>
          </div>
          {/* <button className='btn btn-danger'>Add to Cart</button> */}
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#manageProduct" onClick={() => onClickManageProduct(product)}>Manage</button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
import React, { useState } from 'react'
import ProductItem from './ProductItem'

const foodProducts = [
  {
    name: 'Big Mac',
    price: 1.99,
    stock: 10,
    imageUrl: '/burger-1.jpg',
  },
  {
    name: 'Big Mac Cheese',
    price: 2.99,
    stock: 10,
    imageUrl: '/burger-1.jpg',
  },
  {
    name: 'Beef Burger',
    price: 1.59,
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
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [stock, setStock] = useState("");

  const [modalForm, setModalForm] = useState({
    name: '',
    price: '',
    stock: ''
  })

  const handleClickManageProduct = (product) => {
    setModalForm({
      name: product.name,
      price: product.price,
      stock: product.stock
    })
  }

  return (
    <div className='container text-center p-3'>
      <h1>Menu</h1>
      <div className='product-list'>
        {
          foodProducts.map((product, index) => (
            <ProductItem index={index} product={product} key={index} onClickManageProduct={handleClickManageProduct}/>
          ))
        }
      </div>

      {/* Modal */}
      <div className="modal fade" id="manageProduct" aria-labelledby="manageProductLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="manageProductLabel">Edit Product</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 text-start">
                <label htmlFor="productName" className="form-label">Product Name</label>
                <input type="text" className="form-control" id="productName" placeholder="Enter product name..." value={modalForm.name} onChange={(e) => {setModalForm({...modalForm, name: e.target.value})}} />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="productPrice" className="form-label">Product Price</label>
                <input type="text" className="form-control" id="productPrice" placeholder="Enter product price..." value={modalForm.price} onChange={(e) => {setModalForm({...modalForm, price: e.target.value})}} />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="productStock" className="form-label">Product Stock</label>
                <input type="text" className="form-control" id="productStock" placeholder="Enter product stock..." value={modalForm.stock} onChange={(e) => {setModalForm({...modalForm, stock: e.target.value})}} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
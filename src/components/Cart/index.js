import React from 'react'

const cartItems = [
  {
    name: 'Big Mac',
    price: 1.99,
    stock: 10,
    imageUrl: '/burger-1.jpg',
    quantity: 2,
  },
  {
    name: 'Big Mac',
    price: 1.99,
    stock: 10,
    imageUrl: '/burger-1.jpg',
    quantity: 2,
  },
]

const subtotal = cartItems.reduce((acc, current) => acc + current.price * current.quantity, 0);
const tax = 0.1 * subtotal;
const total = subtotal + tax;

const Cart = () => {
  return (
    <div className='container text-center p-3'>
      <h1>Cart</h1>
      <div className='cart-item-list'>
        {
          cartItems.map((product, index) => (
            <div key={index} className="d-flex align-items-center mb-2 cart-item">
              <img src={product.imageUrl} alt={product.name + index} className="rounded shadow-sm" />
              <div className='text-start m-3 flex-grow-1'>
                <p className='fs-4 m-0 fw-bold'>{product.name}</p>
                <p className='fs-6 m-0 fw-semibold text-danger'>${product.price}</p>
              </div>
              <div className='d-flex align-items-center'>
                <button className='btn btn-danger'>+</button>
                <p className='mt-0 mb-0 m-2'>{product.quantity}</p>
                <button className='btn btn-danger'>-</button>
              </div>
            </div>
          ))
        }
      </div>

      <div className='text-start mt-3'>
        <div className='d-flex justify-content-between'>
          <p className='fw-semibold'>Subtotal</p>
          <p className='fw-semibold'>${subtotal}</p>
        </div>
        <div className='d-flex justify-content-between'>
          <p className='fw-semibold'>Tax (10%)</p>
          <p className='fw-semibold'>${tax}</p>
        </div>
        <div className='d-flex justify-content-between'>
          <p className='fw-semibold'>Total</p>
          <p className='fw-semibold'>${total}</p>
        </div>
      </div>

      <div className='d-grid'>
        <button type='button' className='btn btn-danger btn-block'>Checkout</button>
      </div>
    </div>

  )
}

export default Cart
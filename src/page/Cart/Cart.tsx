import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import './Cart.scss';
import './media.cart.scss';
import { addToCart, removeFromCart } from "@/api/cart/cartSlice";


export interface ICartProps {}

const Cart: FC<ICartProps> = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();



  return (
    <section className="section">
      <div className="wrapper__cart">
        <h2 className='cart__title-page'>Товары</h2>
        <div className="options__name">
               
                <p className='options__name-title'>Название</p>
                <p className='options__name-option'>Описание: </p>
                <p className='options__name-price'>Цена</p>
                <p className='options__name-quantity Quantity'>Количество </p>
            </div>
          {Object.entries(cartItems).map(([productId, quantity]) => {
            const product = cartProducts[Number(productId)];

            return (
              <div key={productId} className="product__cart">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product__cart-img"
                />
                <p className='product__cart-text'>Title: {product.title}</p>
                <p className='product__cart-text Description'>Description: {product.description}</p>
                <p className='product__cart-text'>Price: ${product.price}</p>
                <p className='product__cart-text '> {quantity}</p>
                <div className="product__cart-btn">
                <button onClick={() => dispatch(addToCart(product))}>➕</button>
                <button onClick={() => dispatch(removeFromCart(product.id))}>➖</button>
                </div>
              </div>
            );
          })}
<button className='order'>Засказать</button>
      </div>
      
    </section>
  );
};

export default Cart;

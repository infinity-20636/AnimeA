import { FC } from "react";
import { useGetProductsQuery } from "@/api/product/productsApi";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/api/cart/cartSlice";
import "./Shop.scss";
import './media.shop.scss'

export interface IShopProps {}

const Shop: FC<IShopProps> = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const dispatch = useDispatch();

  if (isLoading) return <div>Подожди брат от души!</div>;
  if (error) return <div>Api накрылся!!!</div>;

  return (
    <section className="section">
      <div className="wrapper__shops">
        {products?.map((product) => (
          <div className="card" key={product.id}>
            <img 
              src={product.image}
              alt={product.title}
              className="card__img"
            />
            <p className="card__title">{product.title}</p>
            <p className="card__price">стоит: ${product.price}</p>
            <div className="card__btn">
              <button className="card__btn-plus" onClick={() => dispatch(addToCart(product))}>
                Добавить
              </button>
              <button className="card__btn-minus" onClick={() => dispatch(removeFromCart(product.id))}>
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;

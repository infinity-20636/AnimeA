import { type FC } from "react";
import "./AcumProduct.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export interface IAcumProductProps {}
export const AcumProduct: FC<IAcumProductProps> = ({}) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = Object.values(cartItems).reduce(
    (acc, quantity) => acc + quantity,
    0
  );
  return (
    <>
      <span className="span__acum">
        {totalItems > 0 && <span className="span__acum-text">{totalItems}</span>}
      </span>
    </>
  );
};

// import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { Navigate } from "react-router-dom";
import Menu from "../components/Menu";

const stripePromise = loadStripe(
  "pk_test_51M4OKmK5zmiWGRgKKp80bkAZIoUypvxKBAV8JYKyy4Ykqc1Xkw3WdBw6IGKEnX2vCVwqZI5PJGg6jJhj8GH6IDeJ00llz7vc7l"
);

const Payment = ({ token, menu, setMenu, handleToken }) => {
  return (
    <>
      {token ? (
        <div>
          <Menu
            menu={menu}
            setMenu={setMenu}
            token={token}
            handleToken={handleToken}
          />
          <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm token={token} />
            </Elements>
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Payment;

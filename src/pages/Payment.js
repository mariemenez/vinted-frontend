// import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51M4OKmK5zmiWGRgKKp80bkAZIoUypvxKBAV8JYKyy4Ykqc1Xkw3WdBw6IGKEnX2vCVwqZI5PJGg6jJhj8GH6IDeJ00llz7vc7l"
);

const Payment = ({ token }) => {
  const location = useLocation();
  return (
    <>
      {token ? (
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Payment;

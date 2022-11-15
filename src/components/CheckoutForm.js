import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

import axios from "axios";

const CheckoutForm = ({ token }) => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const { price, description, id, title } = location.state;
  const [completed, setCompleted] = useState(false);

  console.log(id);

  const priceTotal = price + 0.4 + 0.8;
  const handleSubmit = async (event) => {
    event.preventDefault();

    const cardElement = elements.getElement(CardElement);
    const stripeResponse = await stripe.createToken(cardElement, {
      name: token,
    });
    // console.log(stripeResponse);

    const stripeToken = stripeResponse.token.id;
    const newPrice = price * 100;

    const response = await axios.post(
      "https://site--backend-vinted--6gc2xpkgkrgz.code.run/payment",
      {
        stripeToken,
        description,
        newPrice,
        id,
      }
    );
    console.log(response.data);

    if (response.data.status === "succeeded") {
      setCompleted(true);
    }
  };
  return (
    <>
      {!completed ? (
        <div className="paiement">
          <div className="content">
            <></>
            <div className="resume">
              <h4>Resumé de la commande</h4>
              <div>
                <p>Commande</p>
                <p>{price} €</p>
              </div>
              <div>
                <p>Frais de protection</p>
                <p>0,40 €</p>
              </div>
              <div>
                <p>Frais de port</p>
                <p>0,80 €</p>
              </div>
            </div>
            <div className="conclusion">
              <div className="total-price">
                <p>Total</p>
                <p>{priceTotal.toFixed(2)} €</p>
              </div>
              <div>
                <p>
                  Il ne vous reste plus qu'une étape pour vous offrir {title}.
                  <br /> Vous allez payer {priceTotal} €. Frais de protection et
                  frais de port inclus.
                </p>
              </div>
            </div>
            <div className="stripe">
              <form onSubmit={handleSubmit} className="payment-form">
                <CardElement />
                <button type="submit">valider</button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="succeeded">
          <div className="succeeded-content">
            <p>Paiement effectué.</p>
            <p>Merci, à bientôt !</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;

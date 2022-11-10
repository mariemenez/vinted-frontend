<div key={index}>
  {offer.product_pictures.length > 0 ? (
    <div className="article">
      {offer.owner ? (
        <p>{offer.owner.account.username}</p>
      ) : (
        <p>vendeur anonyme</p>
      )}
      <img src={offer.product_pictures[0].secure_url} alt="image-clothes" />
      <p>{offer.product_price} €</p>
      {offer.product_details.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.TAILLE}</p>
            <p>{item.MARQUE}</p>
          </div>
        );
      })}
    </div>
  ) : null}
</div>;

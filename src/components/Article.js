const Article = ({ offer }) => {
  return (
    <div className="article">
      <div className="owner-infos">
        {offer.owner !== undefined &&
        offer.owner.account !== undefined &&
        offer.owner.account.avatar !== undefined ? (
          <img src={offer.owner.account.avatar.secure_url} />
        ) : null}
        {offer.owner ? (
          <p>{offer.owner.account.username}</p>
        ) : (
          <p>vendeur anonyme</p>
        )}
      </div>
      <img
        className="clothes"
        src={offer.product_image.secure_url}
        alt="clothes"
      />
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
  );
};
export default Article;

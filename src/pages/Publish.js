const Publish = (token) => {
  return (
    <div>
      {token ? (
        <p>c'est la route publish</p>
      ) : (
        <p>vous devez vous connecter </p>
      )}
    </div>
  );
};

export default Publish;

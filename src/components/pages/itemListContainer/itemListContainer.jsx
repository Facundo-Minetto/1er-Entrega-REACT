export const ItemListContainer = () => {
  return (
    <div>
      <div>
        <h1>Bienvenidos a mi tienda</h1>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            backgroundColor: "steelblue",
          }}
        ></div>

        <div>
          <h3>Titulo 1</h3>
          <h4>Descripcion 1</h4>
          <h4>Precio 1</h4>
        </div>
        <div>
          <h3>Titulo 2</h3>
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { BounceLoader } from "react-spinners";
import { Skeleton } from "@mui/material";
import { useParams } from "react-router-dom";

import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const productsCollection = collection(db, "products");

    let consulta = productsCollection;
    if (name) {
      consulta = query(productsCollection, where("category", "==", name));
    }

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setItems(newArray);
    });
  }, [name]);

  if (items.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          gap: "100px",
          marginLeft: "100px",
          marginTop: "50px",
        }}
      >
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={250}
            width={320}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            height={40}
            width={320}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={20}
            width={160}
          />
        </div>
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={250}
            width={320}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            height={40}
            width={320}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={20}
            width={160}
          />
        </div>
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={250}
            width={320}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            height={40}
            width={320}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={20}
            width={160}
          />
        </div>
        <div>
          <Skeleton
            variant="rectangular"
            sx={{ fontSize: "1rem" }}
            height={250}
            width={320}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            height={40}
            width={320}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "0.5rem" }}
            height={20}
            width={160}
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "20px" }}>Bienvenidos</h1>

      {items.length > 0 ? (
        <ItemList items={items} error={error} />
      ) : (
        <BounceLoader color="#36d7b7" />
      )}
    </>
  );
};

export default ItemListContainer;

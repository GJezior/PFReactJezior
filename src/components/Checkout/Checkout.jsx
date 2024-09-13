import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext/CartProvider';
import { collection, addDoc, updateDoc, doc, getDoc, getFirestore } from 'firebase/firestore';

const Checkout = () => {

  const { cart, getTotal, getTotalProducts, clearCart } = useContext(CartContext);
  
  const [nombre, setNombre] = useState("");
  const [apellido,setApellido] = useState("");
  const [movil, setMovil] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const handleForm = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !movil || !email || !emailConfirmacion) {
      setError("Por favor complete todos los campos");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los emails no coinciden");
      return;
    }

    const db = getFirestore();

    const order = {
      items: cart.map((product) => ({
          id: product.product.id,
          name: product.product.name,
          quantity: product.quantity,
          stock: product.product.stock,
      })),
      total: getTotal(),
      date: new Date(),
      nombre,
      apellido,
      movil,
      email,
    };

    Promise.all(
      order.items.map(async (productOrder) => {
        const productRef = doc(db,"item",productOrder.id);
        const productDoc = await getDoc(productRef);
        const stock = productDoc.data().stock;

        await updateDoc(productRef, {
          stock: stock - productOrder.quantity,
        });
      })
    ).then(() => {
        addDoc(collection(db,"orders"),order)
        .then((docRef) => {
          setOrderId(docRef.id);
          clearCart();
        })
        .catch((error) => {
          console.log("Error adding document:", error);
          setError("No se pudo generar la orden, intentelo nuevamente");
        })
    })
    .catch((error) => {
      console.log("Error updating stock", error);
      setError("No se puede actualizar el stock, intentelo nuevamente")
    });
  };

  return (
    <div>
      <h2>Ingresa tus datos:</h2>

        <div>
        {cart.map((product) => (
          <div key={product.product.id}>
            <p>
              {""} {product.product.name}
            </p>
            <p>Cantidad: {product.quantity}</p>
            <p>$ {product.product.price}</p>
            <hr />
          </div>
        ))}
        </div>

      <form onSubmit={handleForm}>
          <div>
            <label htmlFor="">Nombre: </label>
            <input type="text" onChange={(e) => setNombre(e.target.value)}/>
          </div>

          <div>
            <label htmlFor="">Apellido: </label>
            <input type="text" onChange={(e) => setApellido(e.target.value)}/>
          </div>

          <div>
            <label htmlFor="">Movil: </label>
            <input type="number" onChange={(e) => setMovil(e.target.value)}/>
          </div>

          <div>
            <label htmlFor="">Email: </label>
            <input type="email" onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div>
            <label htmlFor="">Email de confirmacion: </label>
            <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)}/>
          </div>

          <button type="submit">Generar orden de compra</button>

          {error && <p>{error}</p>}

          {orderId && (
            <p>Gracias por tu compra. Tu numero de orden es: {orderId}
            {""}
            </p>
          )}
      </form>
    </div>
  );
};

export default Checkout;
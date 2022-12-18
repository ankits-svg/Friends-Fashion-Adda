import "./CartItems.css";
import React,{useState , useEffect} from "react";
import { ProductList } from "./ProductList";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CartItems = () => {

  
  
  const [cart ,setCart] = useState([])

  const [actualPrice,setActualPrice]=useState(0)
  const [strikedPrice,setStrikedPrice]=useState(0)

  const [count,setCount]=useState(0)

  const toPayment=useNavigate()

  const getUser = async () => {

    const res = await fetch("http://localhost:8080/cart");

    const data = await res.json();

    setCart(data);

   
    var sum=0
    var s=0
    var counting=0
    data.map((e)=>{
      counting++
      s=s+ (e.productcancelprice)
     console.log("s",s)
     sum=sum+s;
    })
    setCount(count+counting)
    
    setStrikedPrice(strikedPrice+sum)
    
  };
  
  useEffect(() => {
    getUser();
  }, []);

const handleSubmit=()=>{
  toPayment('/cart/payment')
}
  function remove(id) {
    fetch(`http://localhost:8080/cart/${id}`, {
      method: "DELETE",
    }).then((res) => {
        res.json().then((res) => {
         
          
          getUser();
         
        });
      }).catch((error) => {
        console.log(error);
      });
  }



  return (
    <div className="cartItems">
      <div className="mainDiv">
        <h1>My Bag</h1>

        <div className="yaydiv">
          <LocalShippingIcon
            sx={{ color: "teal", fontSize: 30 }}
            className="text-yaydiv"
          ></LocalShippingIcon>
          <div className="text-yaydiv2">
            <h5>Yay! you get Free delivery on this order.</h5>
          </div>
        </div>
        {cart.map((e,id)=>{
     return (
      <div>
        <ProductList
          cart_image={e.productimage_url}
          cart_title={e.productname}
          cart_price={e.productprice}
          cart_canclprice={e.productcancelprice}
        />

        <div>
          <button className="remove-btn"    onClick={() => {
                  remove(e.id);
                }}>Remove</button>
          {/* <button className="wishlist-btn">Pay</button> */}
          <Button colorScheme='blue' bg={'#FEC304'} onClick={handleSubmit}>Proceed For Payment</Button>
        </div>
      </div>
    );
    })}
      </div>
    </div>
  );
};

export default CartItems;
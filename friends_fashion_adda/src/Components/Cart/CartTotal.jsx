import { useState, useEffect } from "react";
import "./CartTotal.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";


const CartTotal=()=>{
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);
  const [actualPrice, setActualPrice] = useState(0);
  const [strikedPrice, setStrikedPrice] = useState(0);
  const [discount, setDiscount] = useState(30 / 100);
  const [redeem, setRedeem] = useState({
    couponCode: "",
  });
  const [check, setCheck] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    setRedeem({ ...redeem, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    // console.log("check",redeem.couponCode)
    if (redeem.couponCode.couponCode === "Masai30") {
      setCheck(true);
      setActualPrice(Math.floor(actualPrice -( discount * actualPrice)));
    } else {
      setCheck(false);
    }
  };

  const Proceed = () => {
    navigate("/Cart/payment");
  };
  console.log("redeem", redeem);
  const getUser = async () => {
    const response = await fetch("http://localhost:8080/cart");
    const data = await response.json();
    setCartData(data);
    // console.log("cart", data);
    var sum = 0;
    var s = 0;
    var a = 0;
    var add = 0;
    data.map((e) => {
      s = +e.productcancelprice;
      a = +e.productprice;
      console.log("s", s);
      sum += s;
      add += a;
    });

    console.log("sum", sum);
    setStrikedPrice(strikedPrice + sum);
    setActualPrice(actualPrice + add);
    console.log("striked", strikedPrice);
    getUser();
  };

  useEffect(() => {
    getUser();
    return function clean() {
      console.log("cleaned");
    };
    // setCartData(data);
  }, []);

  return (
    <div className="cartTotal">
      <div className="saveExtradiv">
        <div className="inside-saveExtra">Save Extra Rs.40 with Tribe</div>
      </div>
      <div className="text1">
        <div className="inside-text1">
          Wohoo! Get a free gift worth Rs.549 on all prepaid orders above
          Rs.999. Coupon Code- GETFREEGIFT. Not applicable on combo offers!
        </div>
      </div>
      <div className="wholeprice-box">
        <div className="redeem-box">
          <div className="inside-redeem">
            <input
              type="text"
              placeholder="Enter Coupon Code"
              className="redeem-input"
              value={redeem.couponCode}
              onChange={handleChange}
              name="couponCode"
            />
            <button className="redeem-btn" onClick={handleClick}>
              Redeem
            </button>
          </div>
        </div>
        <div className="price-summary">
          <div className="inside-ps">PRICE SUMMARY</div>
        </div>
        <div className="total-price">
          <br />
          <div className="pricedes-box">
            <div className="inside-pdb">
              <div className="price-des">Total MRP (Incl. of taxes) </div>
              <div className="actual-price">₹ 1400</div>
            </div>
          </div>
          <div className="pricedes-box">
            <div className="inside-pdb">
              <div className="price-des">Delivery Fee </div>
              <div className="actual-price">FREE</div>
            </div>
          </div>
          <div className="pricedes-box">
            <div className="inside-pdb">
              <div className="price-des">Bag Discount</div>
              <div className="actual-price">{`-₹ ${Math.abs(
                strikedPrice - actualPrice
              )}`}</div>
            </div>
          </div>
          <div className="pricedes-box">
            <div className="inside-pdb">
              <div className="price-des">Subtotal </div>
              <div className="actual-price">{`₹ ${actualPrice}`}</div>
            </div>
          </div>
          <div className="saving">
            <div className="inside-saving">{`You are saving ₹ ${Math.abs(
              strikedPrice - actualPrice
            )} on this order`}</div>
          </div>
        </div>
        <div className="proceed-payment">
          <div className="inside-pp">
            <div className="Total-p">
              <div>Total</div>
              <div>{`₹ ${actualPrice}`}</div>
            </div>
            {actualPrice ? (
              <button className="p-to-p-btn" onClick={Proceed}>
                Proceed to Payment
              </button>
            ) : (
              <Button
                sx={{
                  width: 600,
                }}
                variant="contained"
                disabled
              >
                Proceed to Payment
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default CartTotal
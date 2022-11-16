import React from "react";
import "../../src/styles/PaidPage.css";
import { useNavigate } from "react-router-dom";

const PaidPage = () => {
  const navigate = useNavigate();
  return (
    <body>
      <div
        style={{
          height: "100vh",
        }}>
        <div class="container">
          <form action="">
            <div class="row">
              <div class="col">
                <h3 class="title">billing address</h3>

                <div class="inputBox">
                  <span>full name :</span>
                  <input type="text" placeholder="Full name" />
                </div>
                <div class="inputBox">
                  <span>email :</span>
                  <input type="email" placeholder="makers@gmailcom" />
                </div>
                <div class="inputBox">
                  <span>address :</span>
                  <input type="text" placeholder="Tabyshalieva 29" />
                </div>
                <div class="inputBox">
                  <span>city :</span>
                  <input type="text" placeholder="Bishkek" />
                </div>

                {/* <div class="flex">
                  <div class="inputBox">
                    <span>state :</span>
                    <input type="text" placeholder="Kyrgyzstan" />
                  </div>
                  <div class="inputBox">
                    <span>zip code :</span>
                    <input type="text" placeholder="123 456" />
                  </div>
                </div> */}
              </div>

              <div class="col">
                <h3 class="title">payment</h3>

                <div class="inputBox">
                  <span>cards accepted :</span>
                  <img
                    src="https://percenta-nanoproducts.com/wp-content/uploads/2021/07/paypal-visa-mastercard.png"
                    alt=""
                  />
                </div>
                <div class="inputBox">
                  <span>name on card :</span>
                  <input type="text" placeholder="Full name" />
                </div>
                <div class="inputBox">
                  <span>credit card number :</span>
                  <input type="number" placeholder="1111-2222-3333-4444" />
                </div>
                <div class="inputBox">
                  <span>state :</span>
                  <input type="text" placeholder="Kyrgyzstan" />
                </div>
              </div>
            </div>

            <input
              onClick={() => {
                alert("You've successfully paid!");
                navigate("/");
              }}
              type="submit"
              value="PAY NOW"
              class="submit-btn"
            />
          </form>
        </div>
      </div>
    </body>
  );
};

export default PaidPage;

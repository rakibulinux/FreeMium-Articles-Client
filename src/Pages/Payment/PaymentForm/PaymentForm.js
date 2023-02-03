import React, { useContext, useState } from "react";
import { APIContext } from "../../../contexts/APIProvider";
import { AuthContext } from "../../../contexts/AuthProvider";

const PaymentForm = () => {
  const { user } = useContext(AuthContext);
  const [priceTk, setPriceTk] = useState(400);
  // console.log(priceTk);
  // console.log(user, user?.email, user?.displayName);

  const { isDarkMode } = useContext(APIContext);
  const handlePayment = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const price = priceTk;

    const paymentUser = {
      email,
      name,
      phone,
      price,
    };
    // console.log(paymentUser);

    fetch(`${process.env.REACT_APP_API_URL}/payment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(paymentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.replace(data.url);

        localStorage.setItem("freeMiumToken", data.token);
      });
  };
  return (
    <div>
      <div
        className={
          isDarkMode ? "grid justify-center" : "bg-base-100 grid justify-center"
        }
      >
        <p
          className={
            isDarkMode
              ? "py-6 font-bold text-center text-4xl text-gray-200"
              : "py-6 font-bold text-center text-4xl text-gray-900"
          }
        >
          Get unlimited access to <br /> everything on FreeMium
        </p>
        <p
          className={
            isDarkMode
              ? "text-center text-gray-200"
              : "text-center text-gray-900"
          }
        >
          Plans starting at less than 100 Tk/week. Cancel anytime.
        </p>
        <p
          className={
            isDarkMode
              ? "text-center text-gray-200"
              : "text-center text-gray-900"
          }
        >
          No ads
        </p>
        <p
          className={
            isDarkMode
              ? "text-center text-gray-200"
              : "text-center text-gray-900"
          }
        >
          Access on any device
        </p>
      </div>
      <div
        className={
          isDarkMode ? "hero min-h-screen" : "hero min-h-screen bg-base-100"
        }
      >
        <div className="flex-col lg:flex-row-reverse">
          <div></div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-9 mx-2 my-5">
            <div
              className={
                isDarkMode
                  ? "card  bg-gray-900 shadow-xl"
                  : "card  bg-base-100 shadow-xl"
              }
            >
              <div className="card-body">
                <h2
                  className={
                    isDarkMode
                      ? "text-gray-100 card-title"
                      : "text-gray-900 card-title"
                  }
                >
                  Weekly
                </h2>
                <p className={isDarkMode ? "text-gray-100" : "text-gray-900"}>
                  100 Tk/week
                </p>
                <div className="card-actions">
                  <button
                    className={
                      isDarkMode
                        ? "btn btn-outline btn-success text-gray-100"
                        : "btn btn-outline btn-success text-gray-900"
                    }
                    onClick={() => {
                      setPriceTk(100);
                    }}
                  >
                    100 Tk{" "}
                  </button>
                </div>
              </div>
            </div>

            <div
              className={
                isDarkMode
                  ? "card  bg-gray-900 shadow-xl"
                  : "card  bg-base-100 shadow-xl"
              }
            >
              <div className="card-body">
                <h2
                  className={
                    isDarkMode
                      ? "text-gray-100 card-title"
                      : "text-gray-900 card-title"
                  }
                >
                  Monthly
                </h2>
                <p className={isDarkMode ? "text-gray-100" : "text-gray-900"}>
                  400 Tk/Month
                </p>
                <div
                  className={
                    isDarkMode
                      ? "text-gray-100 card-title"
                      : "text-gray-900 card-title"
                  }
                >
                  <button
                    className={
                      isDarkMode
                        ? "btn btn-outline btn-success text-gray-100"
                        : "btn btn-outline btn-success text-gray-900"
                    }
                    onClick={() => {
                      setPriceTk(400);
                    }}
                  >
                    400 Tk
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <h1 className="text-5xl font-bold">Payment now</h1> */}

          <div
            className={
              isDarkMode
                ? "card flex-shrink-0 w-full max-w-sm shadow-2xl mb-10 bg-gray-900-100"
                : "card flex-shrink-0 w-full max-w-sm shadow-2xl mb-10 bg-base-100"
            }
          >
            <form onSubmit={handlePayment} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span
                    className={
                      isDarkMode ? "label-text text-gray-100" : "label-text"
                    }
                  >
                    Email
                  </span>
                </label>
                <input
                  defaultValue={user?.email}
                  name="email"
                  type="email"
                  required
                  placeholder="email"
                  className="input input-bordered text-gray-900"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span
                    className={
                      isDarkMode ? "label-text text-gray-100" : "label-text"
                    }
                  >
                    Name
                  </span>
                </label>
                <input
                  defaultValue={user?.displayName}
                  name="name"
                  required
                  type="text"
                  placeholder="email"
                  className="input input-bordered text-gray-900"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span
                    className={
                      isDarkMode
                        ? "label-text text-gray-100"
                        : "label-text text-gray-900"
                    }
                  >
                    Phone Number
                  </span>
                </label>
                <input
                  name="phone"
                  required
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span
                    className={
                      isDarkMode ? "label-text text-gray-100" : "label-text"
                    }
                  >
                    Price
                  </span>
                </label>
                <input
                  name="price"
                  type="text"
                  placeholder="price"
                  readOnly
                  value={priceTk}
                  className="input input-bordered text-gray-900"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary text-lg">
                  Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;

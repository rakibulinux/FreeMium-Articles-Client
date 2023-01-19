import React, { useContext }from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const PaymentForm = () => {
    const { user} = useContext(AuthContext);
    
    // console.log(user, user?.email, user?.displayName);

        const handlePayment = (e) => {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const name = form.name.value;
            const phone = form.phone.value;
            const price = form.price.value;
           

            const paymentUser = {
                email,
                name,
                phone,
                price
            }
            console.log(email,name,phone,price);

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
        }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Payment now</h1>
      <p className="py-6 text-xl">If you went unlimited access for one week then pay 100TK</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form 
      onSubmit={handlePayment}
      className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input defaultValue={user?.email} 
          name="email"
          type="email" required placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input defaultValue={user?.displayName}
          name="name" required
          type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input 
          name="phone" required
          type="text" placeholder="Phone Number" className="input input-bordered" />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input 
          name="price"
          type="text" placeholder="price"
          readOnly required
          defaultValue={100}
          className="input input-bordered" />
         
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary text-lg">Pay</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default PaymentForm;
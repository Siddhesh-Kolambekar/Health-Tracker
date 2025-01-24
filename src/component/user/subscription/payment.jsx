import { useState } from "react";

const PaymentPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsProcessing(true);
    setTimeout(() => {
      if (cardNumber === "4242424244") {
        setPaymentSuccess(true);
        setIsProcessing(false);
      } else {
        setError("Payment failed. Please check your card details.");
        setIsProcessing(false);
      }
    }, 2000);
  };

  return (
    <div className="payment-container">
      <div className="payment-form">
        <h1>Complete Your Payment</h1>
        <p>Enter your details below to finalize your subscription.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter your card number"
              required
              maxLength={16}
            />
          </div>

          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM/YY"
              required
              maxLength={5}
            />
          </div>

          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="Enter CVV"
              required
              maxLength={3}
            />
          </div>

          <button
            type="submit"
            className={`submit-btn ${isProcessing ? "processing" : ""}`}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Pay Now"}
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}
        {paymentSuccess && (
          <p className="success-message">Payment Successful! 🎉</p>
        )}
      </div>

      {/* Inline CSS Styling */}
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx>{`
        .payment-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f4f4f9;
        }

        .payment-form {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          padding: 40px;
          max-width: 400px;
          width: 100%;
        }

        h1 {
          text-align: center;
          color: #333;
          font-size: 24px;
          margin-bottom: 10px;
        }

        p {
          text-align: center;
          color: #777;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          font-size: 14px;
          color: #555;
          margin-bottom: 5px;
          display: block;
        }

        input {
          width: 100%;
          padding: 10px;
          font-size: 14px;
          border: 1px solid #ddd;
          border-radius: 5px;
          margin-top: 5px;
        }

        .submit-btn {
          width: 100%;
          padding: 12px;
          background-color: #4caf50;
          color: white;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .submit-btn.processing {
          background-color: #999;
          cursor: not-allowed;
        }

        .submit-btn:hover:not(.processing) {
          background-color: #45a049;
        }

        .error-message {
          color: red;
          text-align: center;
          margin-top: 15px;
        }

        .success-message {
          color: green;
          text-align: center;
          margin-top: 15px;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default PaymentPage;

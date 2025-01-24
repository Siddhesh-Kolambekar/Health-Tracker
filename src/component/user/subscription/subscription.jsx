import { useState } from "react";

const SubscriptionPage = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(true);
  };

  return (
    <div className="subscription-container">
      {subscribed ? (
        <div className="subscribed-message">
          <span className="checkmark">&#10003;</span> {/* Unicode checkmark */}
          <h2>Subscribed</h2>
        </div>
      ) : (
        <>
          <div className="plan-box basic">
            <h2>Basic Plan</h2>
            <p className="price">$10 / month</p>
            <ul>
              <li>Access to basic features</li>
              <li>1GB Storage</li>
              <li>Community Support</li>
            </ul>
            <button className="subscribe-btn" onClick={handleSubscribe}>
              Subscribe
            </button>
          </div>

          <div className="plan-box premium">
            <h2>Premium Plan</h2>
            <p className="price">$20 / month</p>
            <ul>
              <li>Access to premium features</li>
              <li>5GB Storage</li>
              <li>Priority Support</li>
            </ul>
            <button className="subscribe-btn" onClick={handleSubscribe}>
              Subscribe
            </button>
          </div>

          <div className="plan-box enterprise">
            <h2>Enterprise Plan</h2>
            <p className="price">$50 / month</p>
            <ul>
              <li>All features unlocked</li>
              <li>50GB Storage</li>
              <li>24/7 Dedicated Support</li>
            </ul>
            <button className="subscribe-btn" onClick={handleSubscribe}>
              Subscribe
            </button>
          </div>
        </>
      )}

      {/* Inline CSS Styling */}
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx>{`
        /* Subscription Page Container */
        .subscription-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 20px;
          background-color: #f4f4f9;
          gap: 20px;
          flex-wrap: wrap;
          height: 100vh;
          justify-content: center;
          align-items: center;
        }

        /* Plan Box Styles */
        .plan-box {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
          width: 30%;
          text-align: center;
          transition: transform 0.3s ease-in-out;
          border: 2px solid transparent; /* Default border */
        }

        .plan-box:hover {
          transform: translateY(-10px);
        }

        h2 {
          font-size: 24px;
          color: #333;
          margin-bottom: 10px;
        }

        .price {
          font-size: 22px;
          color: #4caf50;
          margin-bottom: 15px;
        }

        ul {
          list-style-type: none;
          padding: 0;
          margin-bottom: 20px;
        }

        ul li {
          font-size: 16px;
          color: #555;
          margin: 5px 0;
        }

        .subscribe-btn {
          background-color: #4caf50;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          border-radius: 5px;
          cursor: pointer;
          width: 100%;
        }

        .subscribe-btn:hover {
          background-color: #45a049;
        }

        /* Different Border Colors for Each Plan */
        .basic {
          border: 2px solid #4caf50; /* Green for Basic */
        }

        .premium {
          border: 2px solid #ffd700; /* Gold for Premium */
        }

        .enterprise {
          border: 2px solid #ff5722; /* Red-Orange for Enterprise */
        }

        /* Subscribed Message */
        .subscribed-message {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background-color: #4caf50;
          color: white;
          width: 100%;
          height: 100vh;
        }

        .checkmark {
          font-size: 100px;
          margin-bottom: 20px;
        }

        .subscribed-message h2 {
          font-size: 36px;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .subscription-container {
            flex-direction: column;
            align-items: center;
          }

          .plan-box {
            width: 80%;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default SubscriptionPage;

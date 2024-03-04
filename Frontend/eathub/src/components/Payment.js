import React, { useState } from 'react';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
    setPaymentStatus('');
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
    setPaymentStatus('');
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
    setPaymentStatus('');
  };

  const handlePaymentSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('YOUR_PAYMENT_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardNumber,
          expiryDate,
          cvv,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit payment');
      }

      // Clear form fields upon successful submission
      setCardNumber('');
      setExpiryDate('');
      setCvv('');

      // Set payment status to success
      setPaymentStatus('success');
    } catch (error) {
      console.error('Error submitting payment:', error.message);

      // Set payment status to failed
      setPaymentStatus('failed');

      // Handle error as needed
    }
  };

  return (
    <div className="container mt-5">
      <h2>Simple Payment Form</h2>
      <form onSubmit={handlePaymentSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            className="form-control"
            placeholder="Enter card number"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            className="form-control"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={handleExpiryDateChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            className="form-control"
            placeholder="Enter CVV"
            value={cvv}
            onChange={handleCvvChange}
          />
        </div>

        {paymentStatus === 'success' && (
          <p className="text-success mt-2" style={{ fontSize: '14px' }}>
            Payment successful!
          </p>
        )}

        {paymentStatus === 'failed' && (
          <p className="text-danger mt-2" style={{ fontSize: '14px' }}>
            Payment failed. Please try again.
          </p>
        )}

        <button type="submit" className="btn btn-primary mt-3">
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;
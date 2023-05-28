import Stripe from 'stripe';

import stripeConfig from '../../../../config';

const stripe = new Stripe(stripeConfig.secretKey);

export default async (req, res) => {
  const { cartItems, id } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: cartItems.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: parseInt(item.price.toFixed(2), 10) * 100,
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `http://localhost:3000/success?orderId=${id}`,
      cancel_url: 'http://localhost:3000/',
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during payment.' });
  }
};

export type Order = {
  _id: string;
  fullname: string;
  email: string;
  shippingAddress: {
    region: string;
    city: string;
    postalCode: number;
    street: string;
  };
  phoneNumber: number;
  Products: [
    {
      name: string;
      qty: number;
      item_price: number;
      image: string;
    }
  ];
  totalPrice: number;
  isDelivered: boolean;
  deliveredAt: Date;
  isPaid: boolean;
  paidAt: Date;
  coupon: number;
  finalPrice: number;
};

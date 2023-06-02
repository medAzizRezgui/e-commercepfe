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
  status: {
    value: number;
    label: string;
  };
  phoneNumber: number;
  Products: [
    {
      name: string;
      qty: number;
      item_price: number;
      image: string;
      id: string;
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

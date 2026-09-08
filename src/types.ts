export interface ProduceItem {
  id: string;
  name: string;
  hindiName: string;
  category: 'vegetables' | 'fruits' | 'herbs';
  leftKg: number;
  typeTag: string;
  description: string;
  price: number;
  unit: string;
  imageUrl: string;
}

export interface BasketItem {
  item: ProduceItem;
  quantity: number;
}

export type CategoryFilter = 'all' | 'vegetables' | 'fruits_herbs';

export interface BookingFormData {
  fullName: string;
  phone: string;
  fulfillmentType: 'visit' | 'delivery';
  deliveryAddress: string;
  itemsRequested: string;
}

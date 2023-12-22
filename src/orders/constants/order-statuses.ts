export type OrderStatusesType = {
  id: number;
  label: string;
};

// Поки статуси в такому вигляді, можливо зміниться формат
export const OrderStatuses: OrderStatusesType[] = [
  {
    id: 0,
    label: 'Created',
  },
  {
    id: 1,
    label: 'Approved Order',
  },
  {
    id: 2,
    label: 'Rejected Order',
  },
  {
    id: 3,
    label: 'Owner Paid',
  },
  {
    id: 4,
    label: 'Approved Owner Paid',
  },
  {
    id: 5,
    label: 'Rejected Owner Paid',
  },
  {
    id: 6,
    label: 'Client Paid',
  },
  {
    id: 7,
    label: 'Approved Client Paid',
  },
  {
    id: 8,
    label: 'Rejected Client Paid',
  },
  {
    id: 9,
    label: 'Close',
  },
];

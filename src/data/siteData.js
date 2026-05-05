export const services = [
  {
    id: 'signature-facial',
    name: 'Signature Facial',
    category: 'Facials',
    duration: 60,
    price: 95,
    deposit: 25,
    description: 'A customized treatment for hydration, clarity, and healthy glow.',
  },
  {
    id: 'brow-wax',
    name: 'Brow Wax & Shape',
    category: 'Waxing',
    duration: 30,
    price: 28,
    deposit: 10,
    description: 'Clean shaping with a soft finish that frames your natural features.',
  },
  {
    id: 'powder-brows',
    name: 'Powder Brows',
    category: 'Permanent Makeup',
    duration: 150,
    price: 425,
    deposit: 75,
    description: 'Soft, buildable permanent brow enhancement with a polished result.',
  },
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup',
    category: 'Makeup',
    duration: 90,
    price: 125,
    deposit: 50,
    description: 'Elegant, camera-ready makeup with optional travel coordination.',
  },
];

export const galleryItems = [
  { id: 1, category: 'Permanent Makeup', title: 'Soft powder brow result', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80' },
  { id: 2, category: 'Permanent Makeup', title: 'Natural lip blush finish', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=80' },
  { id: 3, category: 'Lifts & Tints', title: 'Lifted lashes and brow tint', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80' },
  { id: 4, category: 'Lifts & Tints', title: 'Defined natural brows', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80' },
  { id: 5, category: 'Makeup', title: 'Soft bridal glam', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80' },
  { id: 6, category: 'Makeup', title: 'Formal event makeup', image: 'https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=900&q=80' },
];

export const defaultBusinessHours = [
  { day: 'Monday', open_time: '10:00', close_time: '17:00', is_closed: false },
  { day: 'Tuesday', open_time: '10:00', close_time: '17:00', is_closed: false },
  { day: 'Wednesday', open_time: '10:00', close_time: '17:00', is_closed: false },
  { day: 'Thursday', open_time: '10:00', close_time: '18:00', is_closed: false },
  { day: 'Friday', open_time: '10:00', close_time: '16:00', is_closed: false },
  { day: 'Saturday', open_time: '09:00', close_time: '14:00', is_closed: false },
  { day: 'Sunday', open_time: '00:00', close_time: '00:00', is_closed: true },
];

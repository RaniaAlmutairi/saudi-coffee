export interface Product {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  category: string;
  categoryAr: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  badge?: 'bestseller' | 'specialty' | 'fresh';
  roastLevel: string;
  roastLevelAr: string;
  weight: string;
  origin: string;
  originAr: string;
}

export const categories = [
  { id: 'all', nameAr: 'الكل', nameEn: 'All' },
  { id: 'light', nameAr: 'تحميص فاتح', nameEn: 'Light Roast' },
  { id: 'medium', nameAr: 'تحميص متوسط', nameEn: 'Medium Roast' },
  { id: 'dark', nameAr: 'تحميص داكن', nameEn: 'Dark Roast' },
  { id: 'specialty', nameAr: 'قهوة مختصة', nameEn: 'Specialty' },
  { id: 'blend', nameAr: 'خلطات مميزة', nameEn: 'Blends' },
];

export const products: Product[] = [
  {
    id: '1',
    nameAr: 'قهوة يرقا المختصة',
    nameEn: 'Yirga Specialty Coffee',
    descriptionAr: 'قهوة إثيوبية فاخرة بنكهات الحمضيات والزهور. تحميص فاتح يبرز النكهات الطبيعية للحبوب عالية الجودة. مثالية لعشاق القهوة المختصة.',
    descriptionEn: 'Premium Ethiopian coffee with citrus and floral notes. Light roast highlighting natural flavors of high-quality beans. Perfect for specialty coffee enthusiasts.',
    category: 'specialty',
    categoryAr: 'قهوة مختصة',
    price: 89,
    rating: 4.9,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80',
    ],
    badge: 'bestseller',
    roastLevel: 'Light',
    roastLevelAr: 'فاتح',
    weight: '250g',
    origin: 'Ethiopia',
    originAr: 'إثيوبيا',
  },
  {
    id: '2',
    nameAr: 'خولاني السعودية',
    nameEn: 'Saudi Khawlani',
    descriptionAr: 'قهوة سعودية أصيلة من جبال جازان. نكهة قوية وغنية مع لمسات من التوابل. تحميص داكن تقليدي يعكس التراث السعودي.',
    descriptionEn: 'Authentic Saudi coffee from Jazan mountains. Bold and rich flavor with spice notes. Traditional dark roast reflecting Saudi heritage.',
    category: 'dark',
    categoryAr: 'تحميص داكن',
    price: 129,
    rating: 4.8,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    ],
    badge: 'specialty',
    roastLevel: 'Dark',
    roastLevelAr: 'داكن',
    weight: '250g',
    origin: 'Saudi Arabia',
    originAr: 'المملكة العربية السعودية',
  },
  {
    id: '3',
    nameAr: 'برازيلي سانتوس',
    nameEn: 'Brazilian Santos',
    descriptionAr: 'قهوة برازيلية كلاسيكية بنكهات الشوكولاتة والمكسرات. تحميص متوسط متوازن ومثالي للاستخدام اليومي.',
    descriptionEn: 'Classic Brazilian coffee with chocolate and nutty flavors. Balanced medium roast perfect for daily use.',
    category: 'medium',
    categoryAr: 'تحميص متوسط',
    price: 69,
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80',
      'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80',
    ],
    badge: 'fresh',
    roastLevel: 'Medium',
    roastLevelAr: 'متوسط',
    weight: '500g',
    origin: 'Brazil',
    originAr: 'البرازيل',
  },
  {
    id: '4',
    nameAr: 'كولومبي سوبريمو',
    nameEn: 'Colombian Supremo',
    descriptionAr: 'قهوة كولومبية ممتازة بحموضة متوازنة ونكهات الكراميل. تحميص متوسط يناسب جميع الأذواق.',
    descriptionEn: 'Premium Colombian coffee with balanced acidity and caramel notes. Medium roast suitable for all tastes.',
    category: 'medium',
    categoryAr: 'تحميص متوسط',
    price: 79,
    rating: 4.8,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=800&q=80',
      'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&q=80',
    ],
    roastLevel: 'Medium',
    roastLevelAr: 'متوسط',
    weight: '250g',
    origin: 'Colombia',
    originAr: 'كولومبيا',
  },
  {
    id: '5',
    nameAr: 'خلطة الرياض الفاخرة',
    nameEn: 'Riyadh Premium Blend',
    descriptionAr: 'خلطة مميزة من أفضل أنواع البن العربي. تحميص متوسط إلى داكن بنكهات غنية ومتنوعة.',
    descriptionEn: 'Special blend of finest Arabica beans. Medium to dark roast with rich and diverse flavors.',
    category: 'blend',
    categoryAr: 'خلطات مميزة',
    price: 99,
    rating: 4.9,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&q=80',
      'https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=800&q=80',
    ],
    badge: 'bestseller',
    roastLevel: 'Medium-Dark',
    roastLevelAr: 'متوسط - داكن',
    weight: '500g',
    origin: 'Blend',
    originAr: 'خلطة مميزة',
  },
  {
    id: '6',
    nameAr: 'قهوة الصباح اللاتينية',
    nameEn: 'Latin Morning Coffee',
    descriptionAr: 'قهوة فاتحة منعشة مثالية لبداية اليوم. نكهات فاكهية خفيفة ومنعشة.',
    descriptionEn: 'Fresh light roast perfect for morning. Light fruity and refreshing flavors.',
    category: 'light',
    categoryAr: 'تحميص فاتح',
    price: 75,
    rating: 4.6,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    ],
    badge: 'fresh',
    roastLevel: 'Light',
    roastLevelAr: 'فاتح',
    weight: '250g',
    origin: 'Costa Rica',
    originAr: 'كوستاريكا',
  },
  {
    id: '7',
    nameAr: 'إسبريسو الذهبي',
    nameEn: 'Golden Espresso',
    descriptionAr: 'خلطة إسبريسو قوية ومركزة بنكهات الشوكولاتة الداكنة. مثالية لمحبي القهوة القوية.',
    descriptionEn: 'Strong and concentrated espresso blend with dark chocolate notes. Perfect for strong coffee lovers.',
    category: 'dark',
    categoryAr: 'تحميص داكن',
    price: 95,
    rating: 4.7,
    reviews: 142,
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
    ],
    roastLevel: 'Dark',
    roastLevelAr: 'داكن',
    weight: '500g',
    origin: 'Italy',
    originAr: 'إيطاليا',
  },
  {
    id: '8',
    nameAr: 'قهوة الجبل الأخضر',
    nameEn: 'Green Mountain Coffee',
    descriptionAr: 'قهوة مختصة طبيعية 100% بنكهات عشبية وزهرية. معالجة طبيعية تحافظ على النكهة الأصلية.',
    descriptionEn: '100% natural specialty coffee with herbal and floral notes. Natural processing preserves original flavor.',
    category: 'specialty',
    categoryAr: 'قهوة مختصة',
    price: 109,
    rating: 4.8,
    reviews: 78,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80',
    ],
    badge: 'specialty',
    roastLevel: 'Light-Medium',
    roastLevelAr: 'فاتح - متوسط',
    weight: '250g',
    origin: 'Kenya',
    originAr: 'كينيا',
  },
];

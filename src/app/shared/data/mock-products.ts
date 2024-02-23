export const products = [
  {
    direction: '',
    id: 1,
    slug: 'yx1-earphones',
    name: 'YX1 Wireless Earphones',
    image: {
      mobile: './assets/product-yx1-earphones/mobile/image-product.jpg',
      tablet: './assets/product-yx1-earphones/tablet/image-product.jpg',
      desktop: './assets/product-yx1-earphones/desktop/image-product.jpg',
    },
    category: 'earphones',
    categoryImage: {
      mobile:
        './assets/product-yx1-earphones/mobile/image-category-page-preview.jpg',
      tablet:
        './assets/product-yx1-earphones/tablet/image-category-page-preview.jpg',
      desktop:
        './assets/product-yx1-earphones/desktop/image-category-page-preview.jpg',
    },
    new: true,
    price: 599,
    description: 'yx1-earphones-description',

    features: ['yx1-earphones-features1', 'yx1-earphones-features2'],
    includes: [
      {
        quantity: 2,
        item: 'Earphone unit',
      },
      {
        quantity: 6,
        item: 'Multi-size earplugs',
      },
      {
        quantity: 1,
        item: 'User manual',
      },
      {
        quantity: 1,
        item: 'USB-C charging cable',
      },
      {
        quantity: 1,
        item: 'Travel pouch',
      },
    ],
    gallery: {
      first: {
        mobile: './assets/product-yx1-earphones/mobile/image-gallery-1.jpg',
        tablet: './assets/product-yx1-earphones/tablet/image-gallery-1.jpg',
        desktop: './assets/product-yx1-earphones/desktop/image-gallery-1.jpg',
      },
      second: {
        mobile: './assets/product-yx1-earphones/mobile/image-gallery-2.jpg',
        tablet: './assets/product-yx1-earphones/tablet/image-gallery-2.jpg',
        desktop: './assets/product-yx1-earphones/desktop/image-gallery-2.jpg',
      },
      third: {
        mobile: './assets/product-yx1-earphones/mobile/image-gallery-3.jpg',
        tablet: './assets/product-yx1-earphones/tablet/image-gallery-3.jpg',
        desktop: './assets/product-yx1-earphones/desktop/image-gallery-3.jpg',
      },
    },
    others: [
      {
        slug: 'xx99-mark-one-headphones',
        name: 'XX99 Mark I',
        image: {
          mobile: './assets/shared/mobile/image-xx99-mark-one-headphones.jpg',
          tablet: './assets/shared/tablet/image-xx99-mark-one-headphones.jpg',
          desktop: './assets/shared/desktop/image-xx99-mark-one-headphones.jpg',
        },
      },
      {
        slug: 'xx59-headphones',
        name: 'XX59',
        image: {
          mobile: './assets/shared/mobile/image-xx59-headphones.jpg',
          tablet: './assets/shared/tablet/image-xx59-headphones.jpg',
          desktop: './assets/shared/desktop/image-xx59-headphones.jpg',
        },
      },
      {
        slug: 'zx9-speaker',
        name: 'ZX9 Speaker',
        image: {
          mobile: './assets/shared/mobile/image-zx9-speaker.jpg',
          tablet: './assets/shared/tablet/image-zx9-speaker.jpg',
          desktop: './assets/shared/desktop/image-zx9-speaker.jpg',
        },
      },
    ],
  },
  {
    direction: '',
    id: 2,
    slug: 'xx59-headphones',
    name: 'XX59 Headphones',
    image: {
      mobile: './assets/product-xx59-headphones/mobile/image-product.jpg',
      tablet: './assets/product-xx59-headphones/tablet/image-product.jpg',
      desktop: './assets/product-xx59-headphones/desktop/image-product.jpg',
    },
    category: 'headphones',
    categoryImage: {
      mobile:
        './assets/product-xx59-headphones/mobile/image-category-page-preview.jpg',
      tablet:
        './assets/product-xx59-headphones/tablet/image-category-page-preview.jpg',
      desktop:
        './assets/product-xx59-headphones/desktop/image-category-page-preview.jpg',
    },
    new: false,
    price: 899,
    description: 'xx59-headphones-description',

    features: ['xx59-headphones-features1', 'xx59-headphones-features2'],

    includes: [
      {
        quantity: 1,
        item: 'Headphone unit',
      },
      {
        quantity: 2,
        item: 'Replacement earcups',
      },
      {
        quantity: 1,
        item: 'User manual',
      },
      {
        quantity: 1,
        item: '3.5mm 5m audio cable',
      },
    ],
    gallery: {
      first: {
        mobile: './assets/product-xx59-headphones/mobile/image-gallery-1.jpg',
        tablet: './assets/product-xx59-headphones/tablet/image-gallery-1.jpg',
        desktop: './assets/product-xx59-headphones/desktop/image-gallery-1.jpg',
      },
      second: {
        mobile: './assets/product-xx59-headphones/mobile/image-gallery-2.jpg',
        tablet: './assets/product-xx59-headphones/tablet/image-gallery-2.jpg',
        desktop: './assets/product-xx59-headphones/desktop/image-gallery-2.jpg',
      },
      third: {
        mobile: './assets/product-xx59-headphones/mobile/image-gallery-3.jpg',
        tablet: './assets/product-xx59-headphones/tablet/image-gallery-3.jpg',
        desktop: './assets/product-xx59-headphones/desktop/image-gallery-3.jpg',
      },
    },
    others: [
      {
        slug: 'xx99-mark-two-headphones',
        name: 'XX99 Mark II',
        image: {
          mobile: './assets/shared/mobile/image-xx99-mark-two-headphones.jpg',
          tablet: './assets/shared/tablet/image-xx99-mark-two-headphones.jpg',
          desktop: './assets/shared/desktop/image-xx99-mark-two-headphones.jpg',
        },
      },
      {
        slug: 'xx99-mark-one-headphones',
        name: 'XX99 Mark I',
        image: {
          mobile: './assets/shared/mobile/image-xx99-mark-one-headphones.jpg',
          tablet: './assets/shared/tablet/image-xx99-mark-one-headphones.jpg',
          desktop: './assets/shared/desktop/image-xx99-mark-one-headphones.jpg',
        },
      },
      {
        slug: 'zx9-speaker',
        name: 'ZX9 Speaker',
        image: {
          mobile: './assets/shared/mobile/image-zx9-speaker.jpg',
          tablet: './assets/shared/tablet/image-zx9-speaker.jpg',
          desktop: './assets/shared/desktop/image-zx9-speaker.jpg',
        },
      },
    ],
  },
  {
    direction: '-reverse',
    id: 3,
    slug: 'xx99-mark-one-headphones',
    name: 'XX99 Mark I Headphones',
    image: {
      mobile:
        './assets/product-xx99-mark-one-headphones/mobile/image-product.jpg',
      tablet:
        './assets/product-xx99-mark-one-headphones/tablet/image-product.jpg',
      desktop:
        './assets/product-xx99-mark-one-headphones/desktop/image-product.jpg',
    },
    category: 'headphones',
    categoryImage: {
      mobile:
        './assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg',
      tablet:
        './assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg',
      desktop:
        './assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg',
    },
    new: false,
    price: 1750,
    description: 'xx99-mark-one-headphones-description',

    features: [
      'xx99-mark-one-headphones-features1',
      'xx99-mark-one-headphones-features2',
    ],

    includes: [
      {
        quantity: 1,
        item: 'Headphone unit',
      },
      {
        quantity: 2,
        item: 'Replacement earcups',
      },
      {
        quantity: 1,
        item: 'User manual',
      },
      {
        quantity: 1,
        item: '3.5mm 5m audio cable',
      },
    ],
    gallery: {
      first: {
        mobile:
          './assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg',
        tablet:
          './assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg',
        desktop:
          './assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg',
      },
      second: {
        mobile:
          './assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg',
        tablet:
          './assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg',
        desktop:
          './assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg',
      },
      third: {
        mobile:
          './assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg',
        tablet:
          './assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg',
        desktop:
          './assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg',
      },
    },
    others: [
      {
        slug: 'xx99-mark-two-headphones',
        name: 'XX99 Mark II',
        image: {
          mobile: './assets/shared/mobile/image-xx99-mark-two-headphones.jpg',
          tablet: './assets/shared/tablet/image-xx99-mark-two-headphones.jpg',
          desktop: './assets/shared/desktop/image-xx99-mark-two-headphones.jpg',
        },
      },
      {
        slug: 'xx59-headphones',
        name: 'XX59',
        image: {
          mobile: './assets/shared/mobile/image-xx59-headphones.jpg',
          tablet: './assets/shared/tablet/image-xx59-headphones.jpg',
          desktop: './assets/shared/desktop/image-xx59-headphones.jpg',
        },
      },
      {
        slug: 'zx9-speaker',
        name: 'ZX9 Speaker',
        image: {
          mobile: './assets/shared/mobile/image-zx9-speaker.jpg',
          tablet: './assets/shared/tablet/image-zx9-speaker.jpg',
          desktop: './assets/shared/desktop/image-zx9-speaker.jpg',
        },
      },
    ],
  },
  {
    direction: '',
    id: 4,
    slug: 'xx99-mark-two-headphones',
    name: 'XX99 Mark II Headphones',
    image: {
      mobile:
        './assets/product-xx99-mark-two-headphones/mobile/image-product.jpg',
      tablet:
        './assets/product-xx99-mark-two-headphones/tablet/image-product.jpg',
      desktop:
        './assets/product-xx99-mark-two-headphones/desktop/image-product.jpg',
    },
    category: 'headphones',
    categoryImage: {
      mobile:
        './assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg',
      tablet:
        './assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg',
      desktop:
        './assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg',
    },
    new: true,
    price: 2999,
    description: 'xx99-mark-two-headphones-description',

    features: [
      'xx99-mark-two-headphones-feature1',
      'xx99-mark-two-headphones-feature2',
    ],

    includes: [
      {
        quantity: 1,
        item: 'Headphone unit',
      },
      {
        quantity: 2,
        item: 'Replacement earcups',
      },
      {
        quantity: 1,
        item: 'User manual',
      },
      {
        quantity: 1,
        item: '3.5mm 5m audio cable',
      },
      {
        quantity: 1,
        item: 'Travel bag',
      },
    ],
    gallery: {
      first: {
        mobile:
          './assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg',
        tablet:
          './assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg',
        desktop:
          './assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg',
      },
      second: {
        mobile:
          './assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg',
        tablet:
          './assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg',
        desktop:
          './assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg',
      },
      third: {
        mobile:
          './assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg',
        tablet:
          './assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg',
        desktop:
          './assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg',
      },
    },
    others: [
      {
        slug: 'xx99-mark-one-headphones',
        name: 'XX99 Mark I',
        image: {
          mobile: './assets/shared/mobile/image-xx99-mark-one-headphones.jpg',
          tablet: './assets/shared/tablet/image-xx99-mark-one-headphones.jpg',
          desktop: './assets/shared/desktop/image-xx99-mark-one-headphones.jpg',
        },
      },
      {
        slug: 'xx59-headphones',
        name: 'XX59',
        image: {
          mobile: './assets/shared/mobile/image-xx59-headphones.jpg',
          tablet: './assets/shared/tablet/image-xx59-headphones.jpg',
          desktop: './assets/shared/desktop/image-xx59-headphones.jpg',
        },
      },
      {
        slug: 'zx9-speaker',
        name: 'ZX9 Speaker',
        image: {
          mobile: './assets/shared/mobile/image-zx9-speaker.jpg',
          tablet: './assets/shared/tablet/image-zx9-speaker.jpg',
          desktop: './assets/shared/desktop/image-zx9-speaker.jpg',
        },
      },
    ],
  },
  {
    direction: '',
    id: 5,
    slug: 'zx7-speaker',
    name: 'ZX7 Speaker',
    image: {
      mobile: './assets/product-zx7-speaker/mobile/image-product.jpg',
      tablet: './assets/product-zx7-speaker/tablet/image-product.jpg',
      desktop: './assets/product-zx7-speaker/desktop/image-product.jpg',
    },
    category: 'speakers',
    categoryImage: {
      mobile:
        './assets/product-zx7-speaker/mobile/image-category-page-preview.jpg',
      tablet:
        './assets/product-zx7-speaker/tablet/image-category-page-preview.jpg',
      desktop:
        './assets/product-zx7-speaker/desktop/image-category-page-preview.jpg',
    },
    new: false,
    price: 3500,
    description: 'zx7-speaker-description',

    features: ['zx7-speaker-feature1', 'zx7-speaker-feature2'],
    includes: [
      {
        quantity: 2,
        item: 'Speaker unit',
      },
      {
        quantity: 2,
        item: 'Speaker cloth panel',
      },
      {
        quantity: 1,
        item: 'User manual',
      },
      {
        quantity: 1,
        item: '3.5mm 7.5m audio cable',
      },
      {
        quantity: 1,
        item: '7.5m optical cable',
      },
    ],
    gallery: {
      first: {
        mobile: './assets/product-zx7-speaker/mobile/image-gallery-1.jpg',
        tablet: './assets/product-zx7-speaker/tablet/image-gallery-1.jpg',
        desktop: './assets/product-zx7-speaker/desktop/image-gallery-1.jpg',
      },
      second: {
        mobile: './assets/product-zx7-speaker/mobile/image-gallery-2.jpg',
        tablet: './assets/product-zx7-speaker/tablet/image-gallery-2.jpg',
        desktop: './assets/product-zx7-speaker/desktop/image-gallery-2.jpg',
      },
      third: {
        mobile: './assets/product-zx7-speaker/mobile/image-gallery-3.jpg',
        tablet: './assets/product-zx7-speaker/tablet/image-gallery-3.jpg',
        desktop: './assets/product-zx7-speaker/desktop/image-gallery-3.jpg',
      },
    },
    others: [
      {
        slug: 'zx9-speaker',
        name: 'ZX9 Speaker',
        image: {
          mobile: './assets/shared/mobile/image-zx9-speaker.jpg',
          tablet: './assets/shared/tablet/image-zx9-speaker.jpg',
          desktop: './assets/shared/desktop/image-zx9-speaker.jpg',
        },
      },
      {
        slug: 'xx99-mark-one-headphones',
        name: 'XX99 Mark I',
        image: {
          mobile: './assets/shared/mobile/image-xx99-mark-one-headphones.jpg',
          tablet: './assets/shared/tablet/image-xx99-mark-one-headphones.jpg',
          desktop: './assets/shared/desktop/image-xx99-mark-one-headphones.jpg',
        },
      },
      {
        slug: 'xx59-headphones',
        name: 'XX59',
        image: {
          mobile: './assets/shared/mobile/image-xx59-headphones.jpg',
          tablet: './assets/shared/tablet/image-xx59-headphones.jpg',
          desktop: './assets/shared/desktop/image-xx59-headphones.jpg',
        },
      },
    ],
  },
  {
    direction: '-reverse',
    id: 6,
    slug: 'zx9-speaker',
    name: 'ZX9 Speaker',
    image: {
      mobile: './assets/product-zx9-speaker/mobile/image-product.jpg',
      tablet: './assets/product-zx9-speaker/tablet/image-product.jpg',
      desktop: './assets/product-zx9-speaker/desktop/image-product.jpg',
    },
    category: 'speakers',
    categoryImage: {
      mobile:
        './assets/product-zx9-speaker/mobile/image-category-page-preview.jpg',
      tablet:
        './assets/product-zx9-speaker/tablet/image-category-page-preview.jpg',
      desktop:
        './assets/product-zx9-speaker/desktop/image-category-page-preview.jpg',
    },
    new: true,
    price: 4500,
    description: 'zx9-speaker-description',

    features: ['zx9-speaker-feature1', 'zx9-speaker-feature2'],

    includes: [
      {
        quantity: 2,
        item: 'Speaker unit',
      },
      {
        quantity: 2,
        item: 'Speaker cloth panel',
      },
      {
        quantity: 1,
        item: 'User manual',
      },
      {
        quantity: 1,
        item: '3.5mm 10m audio cable',
      },
      {
        quantity: 1,
        item: '10m optical cable',
      },
    ],
    gallery: {
      first: {
        mobile: './assets/product-zx9-speaker/mobile/image-gallery-1.jpg',
        tablet: './assets/product-zx9-speaker/tablet/image-gallery-1.jpg',
        desktop: './assets/product-zx9-speaker/desktop/image-gallery-1.jpg',
      },
      second: {
        mobile: './assets/product-zx9-speaker/mobile/image-gallery-2.jpg',
        tablet: './assets/product-zx9-speaker/tablet/image-gallery-2.jpg',
        desktop: './assets/product-zx9-speaker/desktop/image-gallery-2.jpg',
      },
      third: {
        mobile: './assets/product-zx9-speaker/mobile/image-gallery-3.jpg',
        tablet: './assets/product-zx9-speaker/tablet/image-gallery-3.jpg',
        desktop: './assets/product-zx9-speaker/desktop/image-gallery-3.jpg',
      },
    },
    others: [
      {
        slug: 'zx7-speaker',
        name: 'ZX7 Speaker',
        image: {
          mobile: './assets/shared/mobile/image-zx7-speaker.jpg',
          tablet: './assets/shared/tablet/image-zx7-speaker.jpg',
          desktop: './assets/shared/desktop/image-zx7-speaker.jpg',
        },
      },
      {
        slug: 'xx99-mark-one-headphones',
        name: 'XX99 Mark I',
        image: {
          mobile: './assets/shared/mobile/image-xx99-mark-one-headphones.jpg',
          tablet: './assets/shared/tablet/image-xx99-mark-one-headphones.jpg',
          desktop: './assets/shared/desktop/image-xx99-mark-one-headphones.jpg',
        },
      },
      {
        slug: 'xx59-headphones',
        name: 'XX59',
        image: {
          mobile: './assets/shared/mobile/image-xx59-headphones.jpg',
          tablet: './assets/shared/tablet/image-xx59-headphones.jpg',
          desktop: './assets/shared/desktop/image-xx59-headphones.jpg',
        },
      },
    ],
  },
];

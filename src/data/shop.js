import hats_brown_brim from '../assets/brown-brim.png';
import hats_blue_beanie from '../assets/blue-beanie.png';
import hats_brown_cowboy from '../assets/brown-cowboy.png';
import hats_grey_brim from '../assets/grey-brim.png';
import hats_green_beanie from '../assets/green-beanie.png';
import hats_palm_tree_cap from '../assets/palm-tree-cap.png';
import hats_red_beanie from '../assets/red-beanie.png';
import hats_wolf_cap from '../assets/wolf-cap.png';
import hats_blue_snapback from '../assets/blue-snapback.png';

import sneakers_adidas_nmd from '../assets/adidas-nmd.png';
import sneakers_yeezy from '../assets/yeezy.png';
import sneakers_black_converse from '../assets/black-converse.png';
import sneakers_white_nike_high_tops from '../assets/white-nike-high-tops.png';
import sneakers_nikes_red from '../assets/nikes-red.png';
import sneakers_nike_brown from '../assets/nike-brown.png';
import sneakers_nike_funky from '../assets/nike-funky.png';
import sneakers_timberlands from '../assets/timberlands.png';

import jackets_black_shearling from '../assets/black-shearling.png';
import jackets_blue_jean_jacket from '../assets/blue-jean-jacket.png';
import jackets_grey_jean_jacket from '../assets/grey-jean-jacket.png';
import jackets_brown_shearling from '../assets/brown-shearling.png';
import jackets_brown_trench from '../assets/brown-trench.png';

import womens_blue_tank from '../assets/blue-tank.png';
import womens_floral_blouse from '../assets/floral-blouse.png';
import womens_floral_skirt from '../assets/floral-skirt.png';
import womens_red_polka_dot_dress from '../assets/red-polka-dot-dress.png';
import womens_striped_sweater from '../assets/striped-sweater.png';
import womens_yellow_track_suit from '../assets/yellow-track-suit.png';
import womens_white_vest from '../assets/white-vest.png';

import mens_camo_vest from '../assets/camo-vest.png';
import mens_floral_shirt from '../assets/floral-shirt.png';
import mens_long_sleeve from '../assets/long-sleeve.png';
import mens_pink_shirt from '../assets/pink-shirt.png';
import mens_roll_up_jean_shirt from '../assets/roll-up-jean-shirt.png';
import mens_polka_dot_shirt from '../assets/polka-dot-shirt.png';

const SHOP_DATA = [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: hats_brown_brim,
        price: 25,
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: hats_blue_beanie,
        price: 18,
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: hats_brown_cowboy,
        price: 35,
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: hats_grey_brim,
        price: 25,
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: hats_green_beanie,
        price: 18,
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: hats_palm_tree_cap,
        price: 14,
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: hats_red_beanie,
        price: 18,
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: hats_wolf_cap,
        price: 14,
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: hats_blue_snapback,
        price: 16,
      },
    ],
  },
  {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imageUrl: sneakers_adidas_nmd,
        price: 220,
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imageUrl: sneakers_yeezy,
        price: 280,
      },
      {
        id: 12,
        name: 'Black Converse',
        imageUrl: sneakers_black_converse,
        price: 110,
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imageUrl: sneakers_white_nike_high_tops,
        price: 160,
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imageUrl: sneakers_nikes_red,
        price: 160,
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imageUrl: sneakers_nike_brown,
        price: 160,
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imageUrl: sneakers_nike_funky,
        price: 190,
      },
      {
        id: 17,
        name: 'Timberlands',
        imageUrl: sneakers_timberlands,
        price: 200,
      },
    ],
  },
  {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imageUrl: jackets_black_shearling,
        price: 125,
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imageUrl: jackets_blue_jean_jacket,
        price: 90,
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imageUrl: jackets_grey_jean_jacket,
        price: 90,
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imageUrl: jackets_brown_shearling,
        price: 165,
      },
      {
        id: 22,
        name: 'Tan Trench',
        imageUrl: jackets_brown_trench,
        price: 185,
      },
    ],
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imageUrl: womens_blue_tank,
        price: 25,
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imageUrl: womens_floral_blouse,
        price: 20,
      },
      {
        id: 25,
        name: 'Floral Dress',
        imageUrl: womens_floral_skirt,
        price: 80,
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imageUrl: womens_red_polka_dot_dress,
        price: 80,
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imageUrl: womens_striped_sweater,
        price: 45,
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imageUrl: womens_yellow_track_suit,
        price: 135,
      },
      {
        id: 29,
        name: 'White Blouse',
        imageUrl: womens_white_vest,
        price: 20,
      },
    ],
  },
  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imageUrl: mens_camo_vest,
        price: 325,
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: mens_floral_shirt,
        price: 20,
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imageUrl: mens_long_sleeve,
        price: 25,
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imageUrl: mens_pink_shirt,
        price: 25,
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imageUrl: mens_roll_up_jean_shirt,
        price: 40,
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imageUrl: mens_polka_dot_shirt,
        price: 25,
      },
    ],
  },
];

export default SHOP_DATA;

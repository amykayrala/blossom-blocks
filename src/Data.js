import './App.css';
import flower from './media/Wildflower.png';
import tropical from './media/tropical.png';
import car from './media/car.png';
import trevi from './media/trevi.png';
import rainbow from './media/rainbow.png';
import orchid from './media/orchid.png';
import kidFlower from './media/kid-flower.jpg';
import eiffel from './media/eiffel.jpg';
import tower from './media/tower.png';
import lightning from './media/lightning.jpg';
import lambo from './media/lambo.jpg';
import mustang from './media/classic-mustang.png';


  const Data = [
    { 
        id: 1, 
        image: tropical,
        title: 'Tropical Bouquet', 
        theme: 'flower', 
        text: "Bring paradise home with this vibrant tropical bouquet — a colorful arrangement of exotic blooms that never wilt.",
        age: 18, 
        price: 17.99,
        sale: false
      },
      { 
        id: 2, 
        image: flower,
        title: 'Garden Bouquet', 
        text: "bla bla bla",
        theme: 'flower', 
        age: 18, 
        price: 21.99,
        sale: false
      },
      { 
        id: 3, 
        image: car,
        title: 'Fast Car', 
        theme: 'car', 
        age: 12, 
        text: "Speed meets style in this sleek black and yellow Fast Car — built for thrill-seekers and display lovers alike.",
        price: 14.99,
        sale: false
      },
      { 
        id: 4, 
        image: trevi,
        title: 'Trevi Fountain', 
        theme: 'architecture', 
        text: "Enjoy the beauty of Rome with this stunning Trevi Fountain set: a piece of history you can build and cherish.",
        age: 18, 
        price: 68.99,
        sale: true,
        salePrice: 55.99,
      },
      { 
        id: 5, 
        image: rainbow,
        title: 'Rainbow Population', 
        theme: 'architecture', 
        age: 12, 
        text: "Add a splash of color to your collection with this set: a joyful celebration of diversity and creativity.",
        price: 12.99,
        sale: false
      },
      { 
        id: 6, 
        image: orchid,
        title: 'Orchid Flower',
        theme: 'flower', 
        age: 13, 
        text: "A beautiful orchid flower set that brings elegance and color to your collection.",
        price: 25.99,
        sale: true,
        salePrice: 20.99,
      },
      { 
        id: 7, 
        image: kidFlower,
        title: 'Mini Flower', 
        theme: 'flower', 
        age: 6, 
        text: "A delightful mini flower set designed for young builders.",
        price: 7.99,
        sale: false,
      },
      { 
        id: 8, 
        image: eiffel,
        title: 'Eiffel Tower', 
        theme: 'architecture', 
        age: 13, 
        text: "A stunning replica of the Eiffel Tower, perfect for architecture enthusiasts and collectors.",
        price: 45.99,
        sale: false
      },
      { 
        id: 9, 
        image: tower,
        title: 'Tiny Tower', 
        theme: 'architecture', 
        age: 6, 
        text: "A miniature tower set that captures the essence of iconic structures in a compact design.",
        price: 5.99,
        sale: false
      },
      { 
        id: 10, 
        image: lightning,
        title: 'Lightning McQueen', 
        theme: 'car', 
        age: 12, 
        text: "A high-speed racing car set inspired by the beloved character Lightning McQueen from Cars.",
        price: 18.99,
        sale: true,
        salePrice: 14.99,

      },
      { 
        id: 11, 
        image: lambo,
        title: 'Lamborghini Car', 
        theme: 'car', 
        age: 18, 
        text: "Experience the thrill of the race with this stunning Lamborghini car set — a must-have for speed enthusiasts.",
        price: 65.99,
        sale: true,
        salePrice: 60.99,
      },
      { 
        id: 12, 
        image: mustang,
        title: 'Classic Mustang', 
        theme: 'car', 
        age: 13, 
        text: "Rev up your collection with this iconic Classic Mustang set — a timeless piece for car lovers and collectors.",
        price: 14.99,
        sale: false
      },
  ];


export default Data;

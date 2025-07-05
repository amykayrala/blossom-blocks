import './App.css';
import flower from './media/Wildflower.png';
import tropical from './media/tropical.png';
import car from './media/car.png';
import trevi from './media/trevi.png';
import rainbow from './media/rainbow.png';
import orchid from './media/orchid.png';
import kidFlower from './media/kid-flower.jpg';
import eiffel from './media/eiffel.jpeg';
import tower from './media/tower.png';
import lightning from './media/lightning.jpg';
import lambo from './media/lambo.jpg';
import mustang from './media/classic-mustang.png';


  const Data = [
    { 
        id: 1, 
        image: {tropical},
        title: 'Tropical Bouquet', 
        text: "Bring paradise home with this vibrant tropical bouquet — a colorful arrangement of exotic blooms that never wilt.",
        theme: 'Flower', 
        age: 18, 
        price: 17.99,
        sale: false
      },
      { 
        id: 2, 
        image: {flower},
        title: 'Garden Bouquet', 
        text: "bla bla bla",
        theme: 'Flower', 
        age: 20, 
        price: 21.99,
        sale: false
      },
      { 
        id: 3, 
        image: {car},
        title: 'Fast Car', 
        text: "Speed meets style in this sleek black and yellow Fast Car — built for thrill-seekers and display lovers alike.",
        theme: 'Car', 
        age: 9, 
        price: 14.99,
        sale: false
      },
      { 
        id: 4, 
        image: {trevi},
        title: 'Trevi Fountain', 
        text: "Enjoy the beauty of Rome with this stunning Trevi Fountain set: a piece of history you can build and cherish.",
        theme: 'Architecture', 
        age: 18, 
        price: 68.99,
        sale: true,
        salePrice: 55.99,
      },
      { 
        id: 5, 
        image: {rainbow},
        title: 'Rainbow Population', 
        text: "Add a splash of color to your collection with this set: a joyful celebration of diversity and creativity.",
        theme: 'Architecture', 
        age: 9, 
        price: 12.99,
        sale: false
      },
      { 
        id: 6, 
        image: {orchid},
        title: 'Orchid Flower', 
        text: "A beautiful orchid flower set that brings elegance and color to your collection.",
        theme: 'Flower', 
        age: 14, 
        price: 25.99,
        sale: true,
        salePrice: 20.99,
      },
      { 
        id: 7, 
        image: {kidFlower},
        title: 'Laptop', 
        text: "A fun and educational laptop set for kids, perfect for sparking creativity and learning.",
        theme: 'Electronics', 
        age: 5, 
        price: 7.99,
        sale: false,
      },
      { 
        id: 8, 
        image: {eiffel},
        title: 'Eiffel Tower', 
        text: "A stunning replica of the Eiffel Tower, perfect for architecture enthusiasts and collectors.",
        theme: 'Architecture', 
        age: 15, 
        price: 45.99,
        sale: false
      },
      { 
        id: 9, 
        image: {tower},
        title: 'Tiny Tower', 
        text: "A miniature tower set that captures the essence of iconic structures in a compact design.",
        theme: 'Architecture', 
        age: 3, 
        price: 5.99,
        sale: false
      },
      { 
        id: 10, 
        image: {lightning},
        title: 'Lightning McQueen', 
        text: "A high-speed racing car set inspired by the beloved character Lightning McQueen from Cars.",
        theme: 'Car', 
        age: 8, 
        price: 18.99,
        sale: true,
        salePrice: 14.99,

      },
      { 
        id: 11, 
        image: {lambo},
        title: 'Lamborghini Car', 
        text: "Experience the thrill of the race with this stunning Lamborghini car set — a must-have for speed enthusiasts.",
        theme: 'Car', 
        age: 18,
        price: 65.99,
        sale: true,
        salePrice: 60.99,
      },
      { 
        id: 12, 
        image: {mustang},
        title: 'Classic Mustang', 
        text: "Rev up your collection with this iconic Classic Mustang set — a timeless piece for car lovers and collectors.",
        theme: 'Car', 
        age: 16, 
        price: 14.99,
        sale: false
      },
  ];


export default Data;

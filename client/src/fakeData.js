import iphone from "./assets/iphone13.jpeg";
import galaxyS21 from "./assets/SM-G990U-graphite-1.jpeg";
import pixel6 from "./assets/pixel 6.jpeg";
import onePluse from "./assets/onePluse.jpeg";
import Xiaomi from "./assets/Xiaomi Mi 11.jpeg";
import Sony from "./assets/Sony.jpeg";
// Importez les autres images ici de la même manière

const smartphones = [
  {
    id: 1,
    nom: "iPhone 13",
    photo: iphone,
    caracteristiques: "128GB, A15 Bionic, 6.1-inch display",
  },
  {
    id: 2,
    nom: "Samsung Galaxy S21",
    photo: galaxyS21,
    caracteristiques: "256GB, Exynos 2100, 6.2-inch display",
  },
  {
    id: 3,
    nom: "Google Pixel 6",
    photo: pixel6,
    caracteristiques: "128GB, Google Tensor, 6.4-inch display",
  },
  {
    id: 4,
    nom: "OnePlus 9",
    photo: onePluse,
    caracteristiques: "128GB, Snapdragon 888, 6.55-inch display",
  },
  {
    id: 5,
    nom: "Xiaomi Mi 11",
    photo: Xiaomi,
    caracteristiques: "256GB, Snapdragon 888, 6.81-inch display",
  },
  {
    id: 6,
    nom: "Sony Xperia 1 III",
    photo: Sony,
    caracteristiques: "256GB, Snapdragon 888, 6.5-inch display",
  },
];

export default smartphones;

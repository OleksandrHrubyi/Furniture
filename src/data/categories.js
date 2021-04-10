import livingIcon from "../image/living.svg";
import kitchenIcon from "../image/kitchen.svg";
import armIcon from "../image/armchair.svg";
import bedroom from "../image/bedroom.svg";
import wardrobe from "../image/wardrobe.svg";
import wardrobe1 from "../image/wardrobe1.svg";
import one from "../image/one.jpg";
import one1 from "../image/one01x.jpg";
import one05 from "../image/one05x.jpg";
import two from "../image/two.jpg";
import two1x from "../image/two1x.jpg";
import two05x from "../image/two05x.jpg";
import three from "../image/three.jpg";
import three1x from "../image/three1x.jpg";
import three05x from "../image/three05x.jpg";
import four from "../image/four.jpg";
import four1x from "../image/four1x.jpg";
import four05x from "../image/four05x.jpg";
import five from "../image/five.jpg";
import five1x from "../image/five1x.jpg";
import five05x from "../image/five05x.jpg";
import six from "../image/six.jpg";
import six1x from "../image/six1x.jpg";
import six05x from "../image/six05x.jpg";

export const dataCategories = [
  {
    src: livingIcon,
    title: "ДИВАНИ",
    link: "/sofa",
  },
  {
    src: bedroom,
    title: "ЛІЖКА",
    link: "/bed",
  },
  {
    src: armIcon,
    title: "КРІСЛА",
    link: "/armchair",
  },
  {
    src: wardrobe,
    title: "КОМОДИ",
    link: "/wardrobe",
  },
  {
    src: wardrobe1,
    title: "ШАФИ",
    link: "/cupboard",
  },
  {
    src: kitchenIcon,
    title: "КУХНЯ",
    link: "/kitchen",
  },
];

export const dataThings = [
  {
    src: one,
    src1x: one1,
    src05x: one05,
    srcset: "one",
    srcset05: "one05x",
    srcset1: "one1x",
    title: "Ліжко Рамона",
    price: "8 999 грн",
    oldPrice: "",
    stick: ["НОВИНКА"],
  },
  {
    src: two,
    src1x: two1x,
    src05x: two05x,
    srcset: "two",
    srcset05: "two05x",
    srcset1: "two1x",
    title: "Ліжко Честер",
    price: "8 999 грн",
    oldPrice: "9 999 грн",
    stick: ["ХІТ ПРОДАЖ", "AКЦІЯ"],
  },
  {
    src: three,
    src1x: three1x,
    src05x: three05x,
    title: "Ліжко Венеція люкс",
    price: "8 999 грн",
    oldPrice: "",
    stick: [],
  },
  {
    src: four,
    src1x: four1x,
    src05x: four05x,
    title: "Ліжко Імперія",
    price: "8 999 грн",
    oldPrice: "",
    stick: ["НОВИНКА"],
  },
  {
    src: five,
    src1x: five1x,
    src05x: five05x,
    title: "Ліжко Адель",
    price: "8 999 грн",
    oldPrice: "",
    stick: [],
  },
  {
    src: six,
    src1x: six1x,
    src05x: six05x,
    title: "Ліжко Атлант",
    price: "8 999 грн",
    oldPrice: "9 999 грн",
    stick: ["ХІТ ПРОДАЖ", "AКЦІЯ"],
  },
];

export const sliderBanner = [
  {
    title: "Новинка!",
    name: "Ліжко Ornella",
    info: "Це новий рівень комфортного сну",
  },
  {
    title: "Акція",
    name: "Ліжко Ornella",
    info: "Це новий рівень комфортного сну",
  },
  {
    title: "Новинка!",
    name: "Ліжко Ornella",
    info: "Це новий рівень комфортного сну",
  },
  {
    title: "Акція",
    name: "Ліжко Ornella",
    info: "Це новий рівень комфортного сну",
  },
];

export const range = [
  {
    name: "ДИВАНИ",
    link: "/",
  },
  {
    name: "ЛІЖКА",
    link: "/",
  },
  {
    name: "КРІСЛА",
    link: "/",
  },
  {
    name: "КОМОДИ",
    link: "/",
  },
  {
    name: "ШАФИ",
    link: "/",
  },
  {
    name: "КУХНЯ",
    link: "/",
  },
];

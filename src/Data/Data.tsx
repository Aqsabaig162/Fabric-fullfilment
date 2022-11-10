import { Completedpic, Completedpicsmall } from "./svgs";
import Bigrectangle from "../images/BigRectangle.png";
import smallrectangle from "../images/smallrectangle.png";
import { StringLiteral } from "typescript";

export interface DataType {
  key: number;
  order: string;
  ordersize: string[];
  tags: string[];
  shippingtype: string;
  shipby: string;
  status: string;
}
interface DataDetails {
  id: string;
  image: JSX.Element | HTMLImageElement;
  imageSmall: JSX.Element | HTMLImageElement;
  productName: string;
  weight: string;
  size: string;
  color: string;
  price: string;
}

export interface ParcelSize {
  value: number;
  title: string;
  dimension: string;
}

export const Tabledata: DataType[] = [
  {
    key: 1,
    order: "Order012411",
    ordersize: ["3"],
    tags: ["VAS"],
    shippingtype: "Overnight",
    shipby: "Yesterday",
    status: "completed",
  },
  {
    key: 2,
    order: "Order012414",
    ordersize: ["3/5"],
    tags: ["VAS"],
    shippingtype: "Standard",
    shipby: "Yesterday",
    status: "Inprogress",
  },
  {
    key: 3,
    order: "Order012412",
    ordersize: ["3"],
    tags: ["VAS"],
    shippingtype: "Overnight",
    shipby: "Today",
    status: "completed",
  },
  {
    key: 4,
    order: "Order012414",
    ordersize: ["3/5"],
    tags: ["VAS"],
    shippingtype: "Overnight",
    shipby: "Today",
    status: "Inprogress",
  },
  {
    key: 5,
    order: "Order012411",
    ordersize: ["3"],
    tags: ["VAS"],
    shippingtype: "Overnight",
    shipby: "Today",
    status: "completed",
  },
  {
    key: 6,
    order: "Order012414",
    ordersize: ["3/5"],
    tags: ["VAS"],
    shippingtype: "Standard",
    shipby: "Dec 22, 2022",
    status: "Inprogress",
  },
  {
    key: 7,
    order: "Order012411",
    ordersize: ["3"],
    tags: ["VAS"],
    shippingtype: "Overnight",
    shipby: "Dec 22, 2022",
    status: "completed",
  },
  {
    key: 8,
    order: "Order012414",
    ordersize: ["3/5"],
    tags: ["VAS"],
    shippingtype: "Overnight",
    shipby: "Dec 22, 2022",
    status: "Inprogress",
  },
  {
    key: 9,
    order: "Order012414",
    ordersize: ["3/5"],
    tags: ["VAS"],
    shippingtype: "Overnight",
    shipby: "Dec 22, 2022",
    status: "Inprogress",
  },
  {
    key: 10,
    order: "Order012414",
    ordersize: ["3/5"],
    tags: ["VAS"],
    shippingtype: "Overnight",
    shipby: "Dec 22, 2022",
    status: "Inprogress",
  },
];

export const datadetails: DataDetails[] = [
  {
    id: "Order012411",
    image: <img className="bigrect" src={Bigrectangle} />,
    imageSmall: <img className="imgsmall" src={smallrectangle} />,
    productName: "WEH34T2",
    weight: "0.8 lbs ",
    size: "10’’ x 14’’ x 8’’",
    color: "Magenta ",
    price: "$10.99 ",
  },
  {
    id: "Order012412",
    image: <img className="bigrect" src={Bigrectangle} />,
    imageSmall: <img className="imgsmall" src={smallrectangle} />,
    productName: "WEH34T2",
    weight: "0.8 lbs ",
    size: "10’’ x 14’’ x 8’’",
    color: "Magenta ",
    price: "$10.99 ",
  },
  {
    id: "Order012414",
    image: <Completedpic />,
    imageSmall: <Completedpicsmall />,
    productName: "PKB99T2",
    weight: "0.2 lbs ",
    size: "11’’ x 12’’ x 3’’",
    color: "Voilet ",
    price: "$89.99 ",
  },
];

export const parcels: ParcelSize[] = [
  {
    value: 1,
    title: "Bag",
    dimension: "12” x 10” x 8” ",
  },
  {
    value: 2,
    title: "Box - Small",
    dimension: "8” x 10” x 8”",
  },
  {
    value: 3,
    title: "Box - Large",
    dimension: "8” x 6” x 6”",
  },
];

export interface Entity {
  id : number;
  name : string;
  image : string;
  price : number;
  quantity : number;
}


export class ProteinsService {

  public proteninfo : Entity[] = [
    {
    id:1,
    name: "C4",
    image: "../assets/Proteins/c4.jpg",
    price: 2000,
    quantity: 1,
  },
  {
    id:2,
    name: "WHEY",
    image: "../../assets/Proteins/whey.jpg",
    price: 3000,
    quantity: 1,
  },
  {
    id:3,
    name: "Deluxe",
    image: "../../assets/Proteins/Deluxy.jpg",
    price: 2500,
    quantity: 1,
  }
];

}

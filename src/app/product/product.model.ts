export class Product{
  public id: string;
  public title: string;
  public description: string;
  public price:string;
  public discountPercentage: string;
  public rating : string;
  public stock: string;
  public brand: string;
  public category: string;
  public thumbnail: string;
  

  constructor(id:string, title:string, description:string, price:string, discountPercentage:string, rating:string, stock:string, brand:string, category:string, thumbnail:string)
  {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price= price;
    this.discountPercentage= discountPercentage;
    this.rating= rating;
    this.stock= stock;
    this.brand = brand;
    this.category= category;
    this.thumbnail= thumbnail;
    
  }

}
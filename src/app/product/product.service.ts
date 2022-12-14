import { Product } from './product.model';

export class ProductService{
  private products:Product[]= [
    new Product('1',"iPhone 9","An apple mobile which is nothing like apple",
    "549","12.96","4.69","94","Apple","smartphones","https://dummyjson.com/image/i/products/1/thumbnail.jpg"),

    new Product("2","iPhone X","SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "899","17.94","4.44","34","Apple","smartphones","https://dummyjson.com/image/i/products/2/thumbnail.jpg"),

    new Product("3","Samsung Universe 9","Samsung's new variant which goes beyond Galaxy to the Universe",
    "1249","15.46","4.09","36","Samsung","smartphones","https://dummyjson.com/image/i/products/3/thumbnail.jpg"),
  
    new Product("4","OPPOF19","OPPO F19 is officially announced on April 2021.",
    "280","17.91","4.3","123","OPPO","smartphones","https://dummyjson.com/image/i/products/4/thumbnail.jpg"),

    new Product("5","Huawei P30","Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "499","10.58","4.09","32","Huawei","smartphones","https://dummyjson.com/image/i/products/5/thumbnail.jpg"),

    new Product("6","MacBook Pro","MacBook Pro 2021 with mini-LED display may launch between September, November",
    "1749","11.02","4.57","83","APPle","laptops","https://dummyjson.com/image/i/products/6/thumbnail.png"),

    new Product("7","Samsung Galaxy Book","Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched","1499","4.15","4.25","50","Samsung","laptops","https://dummyjson.com/image/i/products/7/thumbnail.jpg"),
  
    new Product("8","Microsoft Surface Laptop 4","Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.","1499","10.23","4.43","68","Microsoft Surface","laptops","https://dummyjson.com/image/i/products/8/thumbnail.jpg"),

    new Product("9","Infinix INBOOK","Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty","1099","11.83","4.54","96","Infinix","laptops","https://dummyjson.com/image/i/products/9/thumbnail.jpg"),

    new Product("10","HP Pavilion 15-DK1056WM","HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10","1099","6.18","4.43","89","HP Pavilion","laptops","https://dummyjson.com/image/i/products/10/thumbnail.jpeg"),

    new Product("11","perfume Oil","Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil","13","8.4","4.26","65","Impression of Acqua Di Gio","fragrances","https://dummyjson.com/image/i/products/11/thumbnail.jpg"),

    new Product("12","Brown Perfume","Royal_Mirage Sport Brown Perfume for Men & Women - 120ml","40","15.66","4","52","Royal_Mirage","fragrances","https://dummyjson.com/image/i/products/12/thumbnail.jpg"),

    new Product("13","Fog Scent Xpressio Perfume","Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men","13","8.14","4.59","61","Fog Scent Xpressio","fragrances","https://dummyjson.com/image/i/products/13/thumbnail.webp"),

    new Product("14","Non-Alcoholic Concentrated Perfume Oil","Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil","120","15.6","4.21","114","Al Munakh","fragrances","https://dummyjson.com/image/i/products/14/thumbnail.jpg"),

    new Product("15","Eau De Perfume Spray","Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality","30","10.99","4.7","105","Lord - Al-Rehab","fragrances","https://dummyjson.com/image/i/products/15/thumbnail.jpg"),

    new Product("16","Hyaluronic Acid Serum","L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid","19","13.31","4.83","110","L'Oreal Paris","skincare","https://dummyjson.com/image/i/products/16/thumbnail.jpg")
  
  ];

  getProducts(){
    return this.products.slice();
  }
}
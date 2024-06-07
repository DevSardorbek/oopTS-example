 //   Inheritence  ///////////////////////////////////////////////////////////////////////////
// 1
// class Futbolchi {
//     constructor(public ism: string, public yosh: number, public jamoa: string) {}
  
//     malumot(): void {
//       console.log(`Ism: ${this.ism}, Yosh: ${this.yosh}, Jamoa: ${this.jamoa}`);
//     }
  
//     oyna(): void {
//       console.log(`${this.ism} futbol o'ynamoqda.`);
//     }
//   }
  
//   class Darvozabon extends Futbolchi {
//     seyvlar: number;
  
//     constructor(ism: string, yosh: number, jamoa: string, seyvlar: number) {
//       super(ism, yosh, jamoa);
//       this.seyvlar = seyvlar;
//     }
  
//     seyvYozibQoy(): void {
//       console.log(`${this.ism} jami ${this.seyvlar} marta to'pni qaytardi.`);
//     }
  
//     oyna(): void {
//       super.oyna();
//       console.log(`${this.ism} darvozani himoya qilmoqda.`);
//     }
//   }
  
//   class Hujumchi extends Futbolchi {
//     gollar: number;
  
//     constructor(ism: string, yosh: number, jamoa: string, gollar: number) {
//       super(ism, yosh, jamoa);
//       this.gollar = gollar;
//     }
  
//     golUrish(): void {
//       console.log(`${this.ism} jami ${this.gollar} marta gol urgan.`);
//     }
  
//     oyna(): void {
//       super.oyna();
//       console.log(`${this.ism} hujumda o'ynamoqda.`);
//     }
//   }
  
//   const darvozabon = new Darvozabon("Ter Stegen", 31, "Barcelona", 120);
//   const hujumchi = new Hujumchi("Messi", 36, "Inter Miami", 865);
  
//   darvozabon.malumot();  darvozabon.oyna(); 
//   darvozabon.seyvYozibQoy();
  
//   hujumchi.malumot();hujumchi.oyna(); 
//   hujumchi.golUrish();
  

//   2

// class Film {
//     constructor(public nomi: string, public janri: string, public davomiyligi: number) {}
  
//     info(): void {
//       console.log(`Film nomi: ${this.nomi}`);
//       console.log(`Janri: ${this.janri}`);
//       console.log(`Davomiyligi: ${this.davomiyligi} minut`);
//     }
//   }
  
//   class Aktyor {
//     constructor(public ismi: string, public yoshi: number) {}
  
//     tanish(): void {
//       console.log(`Aktyor: ${this.ismi}`);
//       console.log(`Yoshi: ${this.yoshi}`);
//     }
//   }
  
//   class Kinofilm extends Film {
//     private aktyorlar: Aktyor[] = [];
  
//     constructor(nomi: string, janri: string, davomiyligi: number, public rejissor: string) {
//       super(nomi, janri, davomiyligi);
//     }
  
//     aktyor_qoshish(aktyor: Aktyor): void {
//       this.aktyorlar.push(aktyor);
//     }
  
//     info(): void {
//       super.info();
//       console.log(`Rejissor: ${this.rejissor}`);
//       console.log("Aktyorlar:");
//       this.aktyorlar.forEach(aktyor => aktyor.tanish());
//     }
//   }
  
//   const film = new Kinofilm("Interstellar", "Science Fiction", 169, "Christopher Nolan");
//   const aktyor1 = new Aktyor("Matthew McConaughey", 52, );
//   const aktyor2 = new Aktyor("Anne Hathaway", 39);
  
//   film.aktyor_qoshish(aktyor1);
//   film.aktyor_qoshish(aktyor2);
  
//   film.info();
  

// 3

// abstract class Shakl {
//     constructor(public rang: string) {}
  
//     abstract maydonHisobla(): number;
  
//     rangniKorsat(): void {
//       console.log(`Shaklning rangi ${this.rang}.`);
//     }
//   }
  
//   class Aylana extends Shakl {
//     constructor(rang: string, public radius: number) {
//       super(rang);
//     }
  
//     maydonHisobla(): number {
//       return Math.PI * this.radius * this.radius;
//     }
  
//     radiusniKorsat(): void {
//       console.log(`Aylaning radiusi ${this.radius}.`);
//     }
//   }
  
//   const aylana = new Aylana("qizil", 5);
//   aylana.rangniKorsat();
//   aylana.radiusniKorsat(); 
//   console.log(`Aylaning maydoni: ${aylana.maydonHisobla()}`); 
  

// 4
// class Odamlar {
//     constructor(public ism: string, public yoshi: number) {}
  
//     tanish(): void {
//       console.log(`Ism: ${this.ism}, Yosh: ${this.yoshi}`);
//     }
//   }
  
//   class Ota extends Odamlar {
//     private farzandlar: Farzandlar[] = [];
  
//     constructor(ism: string, yoshi: number, public kasbi: string) {
//       super(ism, yoshi);
//     }
  
//     farzand_qoshish(farzand: Farzandlar): void {
//       this.farzandlar.push(farzand);
//     }
  
//     info(): void {
//       super.tanish();
//       console.log(`Kasbi: ${this.kasbi}`);
//       console.log("Farzandlar:");
//       this.farzandlar.forEach(farzand => farzand.tanish());
//     }
//   }
  
//   class Ona extends Odamlar {
//     private farzandlar: Farzandlar[] = [];
  
//     constructor(ism: string, yoshi: number, public kasbi: string) {
//       super(ism, yoshi);
//     }
  
//     farzand_qoshish(farzand: Farzandlar): void {
//       this.farzandlar.push(farzand);
//     }
  
//     info(): void {
//       super.tanish();
//       console.log(`Kasbi: ${this.kasbi}`);
//       console.log("Farzandlar:");
//       this.farzandlar.forEach(farzand => farzand.tanish());
//     }
//   }
  
//   class Farzandlar extends Odamlar {}
  
//   const ota = new Ota("Bobur", 40, "O'qituvchi");
//   const ona = new Ona("Laylo", 35, "O'qituvchi");
//   const farzand1 = new Farzandlar("Ahmad", 15);
//   const farzand2 = new Farzandlar("Malika", 10);
  
//   ota.farzand_qoshish(farzand1);
//   ona.farzand_qoshish(farzand2);
  
//   console.log("Ota:");
//   ota.info();
//   console.log("\nOna:");
//   ona.info();
  
// 5 
// class Transport {
//     constructor(public brand: string, public year: number, public color: string) {}
  
//     displayInfo(): void {
//       console.log(`Marka: ${this.brand}`);
//       console.log(`Yil: ${this.year}`);
//       console.log(`Rangi: ${this.color}`);
//     }
//   }
  
//   class Car extends Transport {
//     constructor(brand: string, year: number, color: string, public model: string) {
//       super(brand, year, color);
//     }
  
//     startEngine(): void {
//       console.log(`${this.brand} ${this.model} mashinasi ishga tushirildi.`);
//     }
  
//     drive(): void {
//       console.log(`${this.brand} ${this.model} mashinasi haydovchi yo'lda  yurmoqda.`);
//     }
//   }
  
//   const car = new Car("Toyota", 2020, "Oq", "Camry");
  
//   console.log("Mashina haqida ma'lumotlar:");
//   car.displayInfo();
  
//   car.startEngine();
//   car.drive();
  

// Encapsulation /////////////////////////////////////////////////////////////////////////

// 1
// class Car {
//     private _brand: string;
//     private _model: string;
//     private _year: number;
//     private _color: string;
  
//     constructor(brand: string, model: string, year: number, color: string) {
//       this._brand = brand;
//       this._model = model;
//       this._year = year;
//       this._color = color;
//     }
  
//     get brand(): string {
//       return this._brand;
//     }
  
//     set brand(newBrand: string) {
//       this._brand = newBrand;
//     }
  
//     get model(): string {
//       return this._model;
//     }
  
//     set model(newModel: string) {
//       this._model = newModel;
//     }
  
//     get year(): number {
//       return this._year;
//     }
  
//     set year(newYear: number) {
//       if (newYear < 1900) {
//         throw new Error("Yil noto'g'ri kiritilgan.");
//       }
//       this._year = newYear;
//     }
  
//     get color(): string {
//       return this._color;
//     }
  
//     set color(newColor: string) {
//       this._color = newColor;
//     }
  
//     displayInfo(): void {
//       console.log(`Marka: ${this.brand}`);
//       console.log(`Model: ${this.model}`);
//       console.log(`Yil: ${this.year}`);
//       console.log(`Rangi: ${this.color}`);
//     }
//   }
  
//   const car = new Car("Toyota", "Camry", 2020, "Oq");
  
//   console.log("Mashina ma'lumotlari:");
//   car.displayInfo();
  
//   car.brand = "BMW";
//   car.model = "X5";
//   car.year = 2022; 
//   car.color = "Qora";
  
//   console.log("\nYangilangan mashina ma'lumotlari:");
//   car.displayInfo();
  
// 2
// class Person {
//     private _name: string;
//     private _age: number;
//     private _address: string;
  
//     constructor(name: string, age: number, address: string) {
//       this._name = name;
//       this._age = age;
//       this._address = address;
//     }
  
//     get name(): string {
//       return this._name;
//     }
  
//     set name(newName: string) {
//       this._name = newName;
//     }
  
//     get age(): number {
//       return this._age;
//     }
  
//     set age(newAge: number) {
//       if (newAge < 0 || newAge > 150) {
//         throw new Error("Yosh noto'g'ri kiritilgan.");
//       }
//       this._age = newAge;
//     }
  
//     get address(): string {
//       return this._address;
//     }
  
//     set address(newAddress: string) {
//       this._address = newAddress;
//     }
  
//     displayInfo(): void {
//       console.log(`Ism: ${this.name}`);
//       console.log(`Yosh: ${this.age}`);
//       console.log(`Manzil: ${this.address}`);
//     }
//   }
  
//   const person = new Person("John Doe", 30, "123 Main St, City");
  
//   console.log("Shaxsning ma'lumotlari:");
//   person.displayInfo();
  
//   person.name = "Jane Smith";
//   person.age = 25;
//   person.address = "456 Elm St, Town";
  
//   console.log("\nYangilangan shaxsning ma'lumotlari:");
//   person.displayInfo();
  
// 3
// class Restoran {
//     private _nomi: string;
//     private _manzili: string;
//     private _foydalanuvchilarSoni: number;
  
//     constructor(nomi: string, manzili: string) {
//       this._nomi = nomi;
//       this._manzili = manzili;
//       this._foydalanuvchilarSoni = 0;
//     }
  
//     get nomi(): string {
//       return this._nomi;
//     }
  
//     set nomi(nomi: string) {
//       this._nomi = nomi;
//     }
  
//     get manzili(): string {
//       return this._manzili;
//     }
  
//     set manzili(manzili: string) {
//       this._manzili = manzili;
//     }
  
//     get foydalanuvchilarSoni(): number {
//       return this._foydalanuvchilarSoni;
//     }
  
//     qoshish(): void {
//       this._foydalanuvchilarSoni++;
//     }
  
//     ochirish(): void {
//       if (this._foydalanuvchilarSoni > 0) {
//         this._foydalanuvchilarSoni--;
//       }
//     }
  
//     displayInfo(): void {
//       console.log(`Restoran nomi: ${this.nomi}`);
//       console.log(`Manzili: ${this.manzili}`);
//       console.log(`Foydalanuvchilar soni: ${this.foydalanuvchilarSoni}`);
//     }
//   }
  
//   const restoran = new Restoran("Shodlik", "Main St, City");
  
//   console.log("Restoran ma'lumotlari:");
//   restoran.displayInfo();
  
//   restoran.qoshish();
//   restoran.qoshish();
//   restoran.ochirish();
  
//   console.log("\nO'zgartirilgan restoran ma'lumotlari:");
//   restoran.displayInfo();

  //4
//   class Dokon {
//     // Private xususiyatlar
//     private _nomi: string;
//     private _manzili: string;
//     private _tovarlarSoni: number;
  
//     constructor(nomi: string, manzili: string) {
//       this._nomi = nomi;
//       this._manzili = manzili;
//       this._tovarlarSoni = 0;
//     }
  
//     get nomi(): string {
//       return this._nomi;
//     }
  
//     set nomi(yangiNomi: string) {
//       this._nomi = yangiNomi;
//     }
  
//     get manzili(): string {
//       return this._manzili;
//     }
  
//     set manzili(yangiManzili: string) {
//       this._manzili = yangiManzili;
//     }
  
//     get tovarlarSoni(): number {
//       return this._tovarlarSoni;
//     }
  
//     tovarQoshish(): void {
//       this._tovarlarSoni++;
//     }
  
//     tovarOchirish(): void {
//       if (this._tovarlarSoni > 0) {
//         this._tovarlarSoni--;
//       }
//     }
  
//     displayInfo(): void {
//       console.log(`Do'kon nomi: ${this.nomi}`);
//       console.log(`Manzili: ${this.manzili}`);
//       console.log(`Tovarlar soni: ${this.tovarlarSoni}`);
//     }
//   }
  
//   const dokon = new Dokon("Supermarket", "Bosh ko'cha, Shahar");
  
//   console.log("Do'kon ma'lumotlari:");
//   dokon.displayInfo();
  
//   dokon.tovarQoshish();
//   dokon.tovarQoshish();
//   dokon.tovarOchirish();
  
//   console.log("\nO'zgartirilgan do'kon ma'lumotlari:");
//   dokon.displayInfo();
  
// 5
// class Kutubxona {
//     private _nomi: string;
//     private _manzili: string;
//     private _kitoblar: string[];
  
//     constructor(nomi: string, manzili: string) {
//       this._nomi = nomi;
//       this._manzili = manzili;
//       this._kitoblar = [];
//     }
  
//     get nomi(): string {
//       return this._nomi;
//     }
  
//     set nomi(yangiNomi: string) {
//       this._nomi = yangiNomi;
//     }
  
//     get manzili(): string {
//       return this._manzili;
//     }
  
//     set manzili(yangiManzili: string) {
//       this._manzili = yangiManzili;
//     }
  
//     get kitoblar(): string[] {
//       return this._kitoblar;
//     }
  
//     kitobQoshish(yangiKitob: string): void {
//       this._kitoblar.push(yangiKitob);
//     }
  
//     kitobOchirish(kitobNomi: string): void {
//       const index = this._kitoblar.indexOf(kitobNomi);
//       if (index > -1) {
//         this._kitoblar.splice(index, 1);
//       }
//     }
  
//     displayInfo(): void {
//       console.log(`Kutubxona nomi: ${this.nomi}`);
//       console.log(`Manzili: ${this.manzili}`);
//       console.log(`Kitoblar soni: ${this.kitoblar.length}`);
//       console.log('Kitoblar ro\'yxati:');
//       this.kitoblar.forEach((kitob, index) => {
//         console.log(`${index + 1}. ${kitob}`);
//       });
//     }
//   }
  
//   const kutubxona = new Kutubxona("Shahar Kutubxonasi", "Markaziy ko'cha, Shahar");
  
//   console.log("Kutubxona ma'lumotlari:");
//   kutubxona.displayInfo();
  
//   kutubxona.kitobQoshish("Usta va Margarita");
//   kutubxona.kitobQoshish("Alkimyogar");
//   kutubxona.kitobQoshish("1984");
  
//   kutubxona.kitobOchirish("Alkimyogar");
  
//   console.log("\nO'zgartirilgan kutubxona ma'lumotlari:");
//   kutubxona.displayInfo();
  
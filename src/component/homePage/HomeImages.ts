interface ImageUrls {
  car: string;
  creditCard: string;
  loan: string;
  logo: string;
  mortage: string;
  piggyBank: string;
  avatar1: string;
  avatar2: string;
  avatar4: string;
  bullSize: string;
  global: string;
  investor: string;
  platinum: string;
  osm: string;
}
const HomeImages = () : ImageUrls => {

    const images = {
        car: 'https://res.cloudinary.com/abasskola/image/upload/fl_preserve_transparency/v1717658464/car_1_yixzvj.jpg?_s=public-apps',
        creditCard: 'https://res.cloudinary.com/abasskola/image/upload/fl_preserve_transparency/v1717659001/credit-card_1_om075y.jpg?_s=public-apps',
        loan: 'https://res.cloudinary.com/abasskola/image/upload/fl_preserve_transparency/v1717659230/loan_1_de7tjj.jpg?_s=public-apps',
        logo: 'https://res.cloudinary.com/abasskola/image/upload/fl_preserve_transparency/v1717659348/logo_1_hsyikz.jpg?_s=public-apps',
        mortage: 'https://res.cloudinary.com/abasskola/image/upload/fl_preserve_transparency/v1717659916/mortgage_1_cendke.jpg?_s=public-apps',
        piggyBank: 'https://res.cloudinary.com/abasskola/image/upload/fl_preserve_transparency/v1717660079/piggy-bank_1_b9anea.jpg?_s=public-apps',
        avatar1: 'https://res.cloudinary.com/abasskola/image/upload/fl_preserve_transparency/v1717681658/avatar-1_1_doh9ls.jpg?_s=public-apps',
        avatar2: 'https://res.cloudinary.com/abasskola/image/upload/v1717681822/avatar-2_1_yw86mz.jpg',
        avatar4: 'https://res.cloudinary.com/abasskola/image/upload/v1717681914/avatar-4_1_uzw0rg.jpg',
        bullSize: 'https://easetemplate.com/borrow/assets/images/brand/company-logo/logo-3.jpg',
        global: 'https://easetemplate.com/borrow/assets/images/brand/company-logo/logo-1.jpg',
        investor: 'https://easetemplate.com/borrow/assets/images/brand/company-logo/logo-2.jpg',
        platinum: 'https://easetemplate.com/borrow/assets/images/brand/company-logo/logo-4.jpg',
        osm: 'https://easetemplate.com/borrow/assets/images/brand/company-logo/logo-5.jpg',

    }
  return images;
  
}

export default HomeImages
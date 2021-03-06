import { CarImage } from "./carImage";

export interface Car {
  id: number;
  brandId: number;
  brandName: string;
  colorId: number;
  colorName: string;
  modelYear: number;
  dailyPrice: number;
  description: string;
  carName: string;
  carImages: CarImage[];
}

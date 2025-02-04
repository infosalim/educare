export interface IOption {
  label: string;
  value: string;
}

export interface ICategoryOption {
  id: number;
  label: string;
  value: string;
}

export interface IFilterState {
  categories: string[];
  price: string[];
  sort: string;
}

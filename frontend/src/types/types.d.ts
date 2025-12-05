interface SizeProps {
  id: string;
  name: string;
  basePrice: number;
}

interface IngredientsProps {
  id: string;
  name: string;
  extraPrice: string;
}

interface FormProps {
  ingredientsData: IngredientsProps[];
}

interface ShowDetailsProps {
  id: string;
  createdAt: number;
  customerName: string;
  ingredientIds: string[];
  sizeId: string;
  finalPrice: number;
}

interface DialogProps {
  openDialog: boolean;
  showDetails?: ShowDetailsProps;
  onSetOpenDialog: (item: boolean) => void;
}

interface CreateOrder {
  customerName: string;
  sizeId: string;
  ingredientIds: string[];
}

interface UsePreviewDataProps {
  previewData: ShowDetailsProps[] | null;
  sizesData: SizeProps[] | null;
  ingredientsData: IngredientsProps[] | null;
  setPreviewDataStore: (data: ShowDetailsProps[]) => void;
  setSizesDataStore: (data: SizeProps[]) => void;
  setIngredientsDataStore: (data: IngredientsProps[]) => void;
}

interface InputProps {
  id: string;
  type: string;
  name: string;
  placeholder: string;
  value: string | number | undefined;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

interface SelectProps {
  id: string;
  name: string;
  value: string | number;
  options: SizeProps[] | null;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

interface CheckBoxProps {
  id: string;
  type: string;
  name: string;
  checked: boolean | null;
  value: string;
  label: string;
  price: number | string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

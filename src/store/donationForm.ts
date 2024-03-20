import { create } from 'zustand';

interface Actions {
  setFormData: (name: string, value: string | number | FileList) => void;
}

interface DonationStore {
  formData: {
    name: string;
    addr1: string;
    addr2: string;
    phone1: string;
    phone2: string;
    phone3: string;
    email1: string;
    email2: string;
    sort: string;
    clothes_num: number;
    goods_num: number;
    box_num: number;
  };
  actions: Actions;
}

const initialFormData = {
  name: '',
  addr1: '',
  addr2: '',
  phone1: '',
  phone2: '',
  phone3: '',
  email1: '',
  email2: '',
  sort: '',
  clothes_num: 0,
  goods_num: 0,
  box_num: 0,
};

export const useDonationStore = create<DonationStore>((set) => ({
  formData: initialFormData,
  actions: {
    setFormData: (name, value) => {
      set((state) => ({
        formData: { ...state.formData, [name]: value },
      }));
    },
  },
}));

export const useDonationForm = () => useDonationStore((state) => state.formData);
export const useDonationFormActions = () => useDonationStore((state) => state.actions);
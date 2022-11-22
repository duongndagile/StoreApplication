import axios from 'axios';

const URL = 'http://127.0.0.1:4000';

interface IImage {
  id: number;
  url: string;
}

export interface ICategory {
  id: number;
  title: string;
  image: IImage;
}

interface IResCategory {
  data: ICategory;
}

export interface Error {
  message: string;
}

export interface IProducts {
  id: number;
  title: string;
  uri: string;
  price: number;
  category: number;
}

interface IResProducts {
  data: IProducts;
}

interface IOptions {
  onSuccess: (res: any) => void;
  onError: (err: Error) => void;
  id?: number;
}

const getCategories = async (props: IOptions) => {
  try {
    await axios.get(`${URL}/categories`).then((response: IResCategory) => {
      return props.onSuccess(response.data);
    });
  } catch (error: Error | any) {
    return props.onError(error);
  }
};
const getProducts = async (props: IOptions) => {
  await axios
    .get(`${URL}/products?category=${props.id}`)
    .then((response: IResProducts) => {
      return props.onSuccess(response.data);
    })
    .catch((error: Error) => {
      return props.onError(error);
    });
};
export {getCategories, getProducts};

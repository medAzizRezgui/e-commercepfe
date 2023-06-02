import * as Dialog from '@radix-ui/react-dialog';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BiEdit, BiX } from 'react-icons/bi';
import TagsInput from 'react-tagsinput';
import { useRecoilState } from 'recoil';

import { refetchProdsState } from '../../../../../atoms/refetchProdsAtom';
import { axiosPrivate } from '../../../../../pages/api/axios';
import { useGetUser } from '../../../../../utils/hooks/useGetUser';
import { TextArea } from '../../../../shared/TextArea';
import { Toast } from '../../../../shared/toast';
import { Input } from '../../Input';
import { CategoriesSelect } from '../../ProductInputs/CategoriesSelect';
import { SousCategoriesSelect } from '../../ProductInputs/SousCategoriesSelect';

import { EditImages } from './EditImages';

type Props = {
  stock: number;
  name: string;
  id: any;
  price: number;
  desc: string;
  oldFiles: string[];
  oldCategorie: { value: string; label: string };
  oldSousCategorie: { value: string; label: string };
  sku: string;
  specifications: any;
  oldDiscount: number;
  oldFeatures: string[];
  profit: number;
};
const Edit = ({
  stock,
  name,
  id,
  price,
  desc,
  oldFiles,
  oldCategorie,
  oldSousCategorie,
  oldFeatures,
  oldDiscount,
  sku,
  profit,
  specifications,
}: Props) => {
  const [newStock, setNewStock] = useState(stock);
  const [newName, setNewName] = useState(name);
  const [newPrice, setNewPrice] = useState(price);
  const [newDesc, setNewDesc] = useState(desc);
  const [categorie, setCategorie] = useState(oldCategorie);
  const [sousCategorie, setSousCategorie] = useState(oldSousCategorie);
  const [discount, setDiscount] = useState(oldDiscount);
  const [files, setFiles] = useState([]);
  const [refetch, setRefetch] = useRecoilState(refetchProdsState);
  const [SKU, setSKU] = useState(sku);
  const [oldFiless, setOldFiless] = useState(oldFiles);
  const [specs, setSpecs] = useState([]);
  const [features, setFeatures] = useState(oldFeatures);
  const [newProfit, setNewProfit] = useState(profit);

  useEffect(() => {
    try {
      const unparsableString = specifications?.replace(/'/g, '"');

      const jsonArray = JSON.parse(unparsableString);
      const ar = jsonArray.map(
        (item: { Spec: string; Value: string }) => `${item.Spec}:${item.Value}`
      );
      setSpecs(ar);
    } catch (error) {
      console.log('String is not valid JSON:');
    }
  }, []);

  const { jwt } = useGetUser();
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      Authorization: `Bearer ${jwt}`,
    },
  };
  const inputProps = {
    placeholder: 'Ajouter...',
    maxLength: 200,
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const selectedFiles = Array.from(e.target.files);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setFiles(selectedFiles);
  };

  function parseArray(arr: string[]) {
    const result = [];

    for (let i = 0; i < arr?.length; i++) {
      const item = arr[i];
      const [key, value] = item.split(':');

      if (key && value) {
        const obj = { Spec: key.trim(), Value: value.trim() };
        result.push(obj);
      }
    }

    return result;
  }

  const formData = new FormData();
  formData.append('name', newName);
  formData.append('price', newPrice?.toString());
  formData.append('categorie', categorie.value);
  formData.append('sousCategorie', sousCategorie.value);
  formData.append('description', newDesc);
  formData.append('countInStock', newStock.toString());
  formData.append('specifications', JSON.stringify(parseArray(specs)));
  formData.append('discount', discount.toString());
  formData.append('sku', SKU);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  formData.append('profit', newProfit);
  features.forEach((value) => {
    formData.append('features', value);
  });
  const newFiles = oldFiless.concat(files);
  newFiles.forEach((value) => {
    formData.append('files', value);
  });

  const deleteImg = (imgId: number) => {
    const n = [...oldFiless.slice(0, imgId), ...oldFiless.slice(imgId + 1)];
    setOldFiless(n);
  };

  const [openEditModal, setOpenEditModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const updatedProd = async () => {
    setError(false);
    setSuccess(false);
    setLoading(true);
    await axiosPrivate
      .patch(`/product/update/${id}`, formData, config)
      .then((response) => {
        console.log(response.data);
      })
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setError(false);
      })
      .then(() => setOpenEditModal(false))
      .then(() => setRefetch(!refetch))
      .catch((e) => {
        if (e.response.status === 401) {
          router.push('/auth');
        }
        setError(true);
        setSuccess(false);
      });
  };
  console.log('Features', features);
  return (
    <div>
      <Toast
        success={success}
        error={error}
        text="Success"
        errorMsgs={[{ msg: 'Something went wrong' }]}
      />
      <Dialog.Root open={openEditModal}>
        <Dialog.Trigger asChild onClick={() => setOpenEditModal(true)}>
          <BiEdit className="h-[24px] w-[24px] cursor-pointer fill-blue-500" />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay
            onClick={() => setOpenEditModal(false)}
            className="fixed inset-0 top-[-10px] z-[999] bg-dark-500 opacity-90 data-[state=open]:animate-overlayShow"
          />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-[1000] max-h-[85vh] w-[90vw] max-w-[1200px] translate-x-[-50%] translate-y-[-50%] overflow-y-scroll rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
            <Dialog.Title className="m-0 text-[17px] font-medium text-blue-500">
              Edit Product
            </Dialog.Title>
            <div className="flex gap-[20px] ">
              <div className="flex w-[100%]  gap-[20px]">
                {/* First Row */}
                <div className="flex w-[50%] flex-col">
                  <Input
                    placeholder="Name..."
                    label="Product Name"
                    value={newName}
                    type="text"
                    setValue={setNewName}
                  />
                  <Input
                    placeholder="Price..."
                    label="Product Price"
                    value={newPrice}
                    type="number"
                    setValue={setNewPrice}
                  />
                  <Input
                    placeholder="Count In Stock..."
                    label="Product Stock"
                    value={newStock}
                    type="number"
                    setValue={setNewStock}
                  />

                  <TextArea
                    placeholder="Description..."
                    label="Product Description"
                    value={newDesc}
                    setValue={setNewDesc}
                  />

                  <Input
                    placeholder="20..."
                    label="Discount (%)"
                    value={discount}
                    type="number"
                    setValue={setDiscount}
                  />
                </div>
                {/* Second Row */}
                <div className="w-[50%]">
                  <Input
                    placeholder="..."
                    label="SKU"
                    value={SKU}
                    type="text"
                    setValue={setSKU}
                  />
                  <Input
                    placeholder="..."
                    label="Profit"
                    value={newProfit}
                    type="number"
                    setValue={setNewProfit}
                  />
                  <div className="flex flex-col gap-[10px] py-4">
                    <p className="font-medium">Specifications</p>
                    <TagsInput
                      className="border-2 border-gray-500 p-8"
                      inputProps={inputProps}
                      value={specs}
                      onChange={(e) => setSpecs(e)}
                    />
                  </div>
                  <div className="flex flex-col gap-[10px] py-4">
                    <p className="font-medium">Features</p>
                    <TagsInput
                      className="border-2 border-gray-500 p-8"
                      inputProps={inputProps}
                      value={features}
                      onChange={(e) => setFeatures(e)}
                    />
                  </div>
                  <CategoriesSelect
                    setCategorie={setCategorie}
                    categorie={categorie}
                  />
                  <SousCategoriesSelect
                    setSousCategorie={setSousCategorie}
                    categorie={categorie}
                    sousCategorie={sousCategorie}
                  />
                </div>
              </div>

              <div className="w-[40%]">
                {/*  Edit Images */}
                <EditImages
                  handleFileChange={handleFileChange}
                  oldFiles={oldFiless}
                  deleteImg={deleteImg}
                  files={files}
                />
              </div>
            </div>
            <div className="mt-[25px] flex justify-end">
              <Dialog.Close asChild>
                <button
                  type="button"
                  onClick={updatedProd}
                  className=" inline-flex h-[35px] cursor-pointer items-center justify-center rounded-[4px] bg-yellow-500 px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                >
                  {loading ? 'Loading' : 'Save changes'}
                </button>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild onClick={() => setOpenEditModal(false)}>
              <button
                type="button"
                className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close"
              >
                <BiX />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
export default Edit;

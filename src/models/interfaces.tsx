import React from "react";

export interface IButtonProps {
  action: 'change' | 'delete' | 'save' | 'cancel';
  handler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  elId?: number;
}

export interface IInputProps {
  name: 'price' | 'title';
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
}

export interface IItem {
  titleValue: string;
  priceValue: string | number;
  id?: number | undefined;
}

export interface IItemsList {
  listItems: IItem[];
}

export interface IChanger {
  changer: boolean;
}

export interface ISearchText {
  searchedText: string;
}

export interface IStoreItems {
  currentItem: IItem;
  list: IItemsList;
  itemChanger: IChanger;
  changingItem: ICurrentItem;
  searchItem: ISearchText;
}

export interface IReducers {
  type: string;
  payload?: string | number | IItem;
}

export interface ICurrentItem {
  oldTitle: string;
  oldPrice: string;
  id: number | null;
}

export interface IActionCurrentItem {
  type: string;
  payload: ICurrentItem;
}

export interface IActionList {
  type: string;
  payload: number | IItem;
}
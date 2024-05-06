export interface IButtonProps {
  action: 'change' | 'delete' | 'save' | 'cancel';
  handler: () => void;
}

export interface IInputProps {
  name: 'price' | 'title';
}
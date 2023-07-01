import { useState } from 'react';

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    console.log('모달 오픈');
  };

  const closeModal = () => {
    setIsOpen(false);
    console.log('모달 닫음');
  };

  return { isOpen, openModal, closeModal };
}

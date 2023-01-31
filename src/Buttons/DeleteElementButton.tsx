import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useCallback } from 'react';

type Props<T extends number | string> = {
  id: T;
  size: number;
  deleteElement: (id: T) => void;
};

export const DeleteElementButton = <T extends number | string>({
  id,
  size,
  deleteElement,
}: Props<T>) => {
  const deleteItem = useCallback(() => {
    deleteElement(id);
  }, [deleteElement, id]);

  return (
    <div className={'cursor-pointer rounded-full bg-red-600 text-white'}>
      <XMarkIcon className={`h-${size} w-${size} p-1`} onClick={deleteItem} />
    </div>
  );
};

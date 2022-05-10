import React, { useEffect, useState } from 'react';
import Breadcrumb from 'components/frontastic-ui/breadcrumb';
import Laddercrumb from 'components/frontastic-ui/laddercrumb';
import { useFormat } from 'helpers/hooks/useFormat';
import { updateURLParams } from 'helpers/utils/updateURLParams';
import { Product } from '../../../../../types/product/Product';
import useMediaQuery from '../../../../helpers/hooks/useMediaQuery';
import List from './list';
// import List from './List';
export interface Props {
  products: Product[];
  previousCursor: string;
  nextCursor: string;
  category: string;
}

export default function ProductList({ products, previousCursor, nextCursor, category }: Props) {
  const [previousPageURL, setPreviousPageURL] = useState<string>('');
  const [nextPageURL, setNextPageURL] = useState<string>('');

  //i18n messages
  const { formatMessage } = useFormat({ name: 'common' });

  const [isLargerThan1024] = useMediaQuery(1024);

  const categoryListItem = (
    <li key={category}>
      <div className="flex items-center">
        <svg
          className="shrink-0 w-5 h-5 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
        </svg>
        <span
          className="ml-4 text-sm font-medium text-gray-700 capitalize"
          aria-current={category ? 'page' : undefined}
        >
          {category?.split('/')[1]}
        </span>
      </div>
    </li>
  );

  const activeButtonClassName =
    'relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50';

  const disabledButtonClassName = 'pointer-events-none rounded bg-gray-500 py-2 px-4 font-bold text-white opacity-50';

  useEffect(() => {
    setPreviousPageURL(updateURLParams('cursor', previousCursor));
    setNextPageURL(updateURLParams('cursor', nextCursor));
  }, []);

  return (
    <div className="px-1 mt-10 bg-white sm:px-3 lg:px-6">
      {category && <Breadcrumb Separator="/">{categoryListItem}</Breadcrumb>}
      <List products={products} />

      <nav
        className="flex justify-between items-center py-3 px-4 bg-white border-t border-gray-200 sm:px-6"
        aria-label="Pagination"
      >
        <div className="flex flex-1 gap-x-1.5 justify-between sm:justify-end">
          <a href={previousPageURL} className={previousCursor ? activeButtonClassName : disabledButtonClassName}>
            {formatMessage({ id: 'prev', defaultMessage: 'Previous' })}
          </a>
          <a href={nextPageURL} className={nextCursor ? activeButtonClassName : disabledButtonClassName}>
            {formatMessage({ id: 'next', defaultMessage: 'Next' })}
          </a>
        </div>
      </nav>
    </div>
  );
}

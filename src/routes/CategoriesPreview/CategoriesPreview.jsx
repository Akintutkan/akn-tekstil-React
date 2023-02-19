import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectCategoriesMap,
} from '../../store/category/categorySelector';

import Spinner from '../../components/Spinner/Spinner';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';

export default function CategoriesPreview() {
  const isLoading = useSelector(selectIsLoading);
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];

          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
}
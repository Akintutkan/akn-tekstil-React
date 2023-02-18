import categories from '../../data/categories';
import Directory from '../../components/Directory/Directory';

import { HomeContainer } from './HomeStyles';

export default function Home() {
  return (
    <HomeContainer>
      <Directory categories={categories} />
    </HomeContainer>
  );
}
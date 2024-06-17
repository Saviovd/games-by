import Image from 'next/image';
import { SearchedItemStyles, Separator } from './SearchedItemStyles';
import { Link } from '../../../navigation';

const SearchedItem = ({ name, image, url, release, isLast }) => {
   return (
      <>
         <Link href={url}>
            <SearchedItemStyles>
               <h3 className='title'>{name}</h3>
               <Image
                  src={image}
                  alt={`${name} wallpaper`}
                  width={150}
                  height={150}
                  quality={100}
                  className='cover'
               />
               <p className='date'>{release}</p>
            </SearchedItemStyles>
         {!isLast && <Separator />}
         </Link>
      </>
   );
};

export default SearchedItem;

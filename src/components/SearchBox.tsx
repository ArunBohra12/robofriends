import { ChangeEvent } from 'react';

interface SearchBoxProps {
  searchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ searchChange }: SearchBoxProps): JSX.Element => {
  return (
    <div className='pa2'>
      <input
        onChange={searchChange}
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='Search robots'
      />
    </div>
  );
};

export default SearchBox;

import './styles.css'

export const TextInput = ({ handleChange, searchValue }) => {
  return (
    <input
      className='input_class'
      onChange={handleChange}
      value={searchValue}
      placeholder={'search'}
      type='search'
    />
  );
}

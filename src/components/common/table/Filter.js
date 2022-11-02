function Filter({ text, categories, criteria, setCriteria }) {
  const handleOnChange = (e) => {
    setCriteria((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className='ct-between-wrap'>
      <input
        className='form-control my-2 '
        placeholder={text.placeholder}
        style={{ width: 'fit-content' }}
        value={criteria.name}
        name={text.keyName}
        onChange={handleOnChange}
      />
      {categories && (
        <div className='ct-flex-items'>
          {categories.map((category) => (
            <select
              key={category.placeholder}
              className='form-select'
              name={category.keyName}
              onChange={handleOnChange}
            >
              <option value=''>{category.placeholder}</option>
              {category.options.map((option) => (
                <option key={option.name} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          ))}
        </div>
      )}
    </div>
  );
}

export default Filter;

function PropDisplay({ prop }) {
  return (
    <>
      {prop.map((el) => (
        <div key={el.name} className='mx-4 my-3'>
          <div className='fs-5 fw-bold'>{el.value ? el.value : '-'}</div>
          <div className='fs-6'>{el.name}</div>
        </div>
      ))}
    </>
  );
}

export default PropDisplay;

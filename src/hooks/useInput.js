import { useState } from 'react';

function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (isi) => {
    setValue(isi.target.value);
  };

  return [value, onValueChangeHandler];
}

export default useInput;
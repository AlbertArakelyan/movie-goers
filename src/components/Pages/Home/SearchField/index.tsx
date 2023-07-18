import React, {useCallback, useEffect, useState} from 'react';
import {useDebounce} from "react-use";
import {ContainerPropTypes} from './types';
import View from './view';

const SearchFieldContainer: React.FC<ContainerPropTypes> = () => {
  const [value, setValue] = useState<string>('');

  const [, cancel] = useDebounce(
    () => {
      // dispatch value
    },
    500,
    [value]
  );

  const onTyping = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => () => {
    cancel();
  });

  return <View onTyping={onTyping}/>
}
export default React.memo(SearchFieldContainer);
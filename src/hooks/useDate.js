import { useCallback, useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback(
    (date) => {
      setValue(date);
    },
    [setValue]
  );
  return [value, handler, setValue];
};

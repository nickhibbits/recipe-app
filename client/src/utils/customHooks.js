import { useEffect, useState } from "react";

export const useLoadingCheck = (dataLoaded) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dataLoaded === false && setLoading(false);
    dataLoaded === true && setLoading(false);
  }, [dataLoaded]);

  return loading;
};

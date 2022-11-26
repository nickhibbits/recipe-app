import { useEffect, useState } from "react";

export const useLoadingCheck = (dataLoaded) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dataLoaded === false && setLoading(false);
    dataLoaded === true && setLoading(false);
  }, [dataLoaded]);

  return loading;
};

// All properties in redux store are undefined on when the App component first renders.
// By passing loggedIn as a parameter to this custom loading hook, on the first execution it's undefined.
// When the redux store is initialized, or after the user moves through the login flow, loggedIn is set to true or false.
// By leveraging stict equality on lines 7 & 8, instead of allowing type coersion, the loading screen is able to appear.
// If we didn't use strict equality whenever loggedIn iss undefined (i.e. whenever the redux store hasn't yet initialized) it would be coerced to false.
// As a result our login screen would flash momentarily, even if the user has already logged in.

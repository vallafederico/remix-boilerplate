import { useEffect, useState } from "react";
import { useLocation, useNavigation } from "@remix-run/react";

export function useNavigationCallback(callback) {
  const navigation = useNavigation();
  const location = useLocation();
  const [currentLoc, setCurrentLoc] = useState(location.pathname);

  // page transition debugging
  useEffect(() => {
    if (location.pathname === currentLoc) return;
    // console.log(navigation.state, location.pathname);

    callback(location.pathname);
    setCurrentLoc(location.pathname);
  }, [callback, currentLoc, navigation.state, location.pathname]);

  return null;
}

import { useEffect, useState } from "react";

const useResturantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(
        `https://namastedev.com/api/v1/listRestaurantMenu/${resId}`,
      );
      const json = await response.json();
      console.log("Menu Data:", json);
      setResInfo(json.data);
    };

    fetchMenu();
  }, [resId]);

  return resInfo;
};

export default useResturantMenu;

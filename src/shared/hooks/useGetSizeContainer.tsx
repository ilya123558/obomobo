import React, { useEffect, useLayoutEffect, useState } from 'react';

interface IReturn {
  height: number;
  isLoading: boolean;
}

export const useGetHeightContainer: (ref: React.RefObject<HTMLDivElement>) => IReturn = (ref) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [height, setHeight] = useState<number>(0);

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const { y } = ref.current.getBoundingClientRect();
        const bodyHeight = document.body.offsetHeight;
        setHeight(bodyHeight - y);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => window.removeEventListener('resize', updateHeight);
  }, [ref]);

  useLayoutEffect(() => {
    if (height) {
      setIsLoading(false);
    }
  }, [height]);

  return { height, isLoading };
};

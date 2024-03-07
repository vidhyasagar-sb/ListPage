export const getWindowWidth = () => {
  return (
    (window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth) < 650
  );
};

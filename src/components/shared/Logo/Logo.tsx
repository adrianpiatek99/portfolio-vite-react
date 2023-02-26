export const Logo = () => {
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });

  return (
    <button
      className="text-color1 font-bold text-2xl sm:text-3xl duration-200 sm:hover:text-primary focus-visible:text-primary"
      onClick={scrollToTop}
    >
      <span>Portfolio</span>
    </button>
  );
};

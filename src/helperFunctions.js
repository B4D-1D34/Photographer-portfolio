export const resizeWindow = (elRef) => {
  document.body.style.height = `${
    elRef.current.getBoundingClientRect().height
  }px`;
};

export const isMobile = () => "ontouchstart" in document.documentElement;

const scrollConfigs = {
  ease: 0.1,
  current: 0,
  previous: 0,
  rounded: 0,
};
const smoothScrolling = (elRef, scrollConfigs) => {
  scrollConfigs.current = window.scrollY;
  scrollConfigs.previous +=
    (scrollConfigs.current - scrollConfigs.previous) * scrollConfigs.ease;
  scrollConfigs.rounded = Math.round(scrollConfigs.previous * 100) / 100;

  elRef.current.style.transform = `translate3d(0,-${scrollConfigs.rounded}px,0) 
    `;

  requestAnimationFrame(() => smoothScrolling(elRef, scrollConfigs));
};

export const smoothScrollingWithConfigs = () => [
  smoothScrolling,
  scrollConfigs,
];

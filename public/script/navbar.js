
export default function Sticky() {
  const body = document.body;
  let lastScroll = 0;

  windows.addEventListener('scroll', () => {
    console.log(window.pageYOffset)
  })
}
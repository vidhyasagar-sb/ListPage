import { Splide, SplideSlide } from '@splidejs/react-splide';

// components
import DashBoardSplideCard from '../DashBoardSplideCard/DashBoardSplideCard';

// style
import './bannerSlider.css';
import '@splidejs/splide/dist/css/splide.min.css';

const BannerSlider = () => {
  const options = {
    type: 'loop',
    drag: 'free',
    gap: '1rem',
    pagination: true,
    perPage: 1,
    perMove: 1,
    interval: 2000,
    snap: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    autoplay: true,
    arrows: false,
    rewind: true,
    classes: {
      pagination: 'splide__pagination',
    },
    paginationType: 'bullets',
  };

  return (
    <div className='bannerSplide'>
      <Splide options={options} aria-label='Banner' className='visibleClass'>
        {Array(4)
          .fill(0)
          .map((image, index) => (
            <SplideSlide key={`image-${index}`}>
              <DashBoardSplideCard />
            </SplideSlide>
          ))}
      </Splide>
    </div>
  );
};

export default BannerSlider;

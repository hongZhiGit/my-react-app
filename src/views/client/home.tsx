import './home.scss';
import { FC, useRef } from 'react';
import BannerBack from '../../components/banner-back';


const Home: FC = () => {
  const backSrc = 'https://rmt.dogedoge.com/fetch/fluid/storage/bg/vdysjx.png?w=1920&fmt=webp';

  const bannerBackRef = useRef<any>();
  // bannerBackRef.current.setFont("这是一个火爆全球的blog");

  return (
    <>
      <BannerBack ref={bannerBackRef} backSrc={backSrc} downArrow></BannerBack>
      {/* 内容 */}
      {/* <div className="main-box" style="$store.getters.mainStyle">
      </div> */}
    </>
  );
};

export default Home;
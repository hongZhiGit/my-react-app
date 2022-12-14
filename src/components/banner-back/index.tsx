import PrinterFont from "../printer-font";
import './index.scss';
import { DownOutlined } from '@ant-design/icons';
import { FC, useState } from 'react';

type BannerBackProps = {
  height?: string,
  backSrc?: string,
  downArrow?: boolean,
}

const BannerBack: FC<BannerBackProps> = (props) => {
  const [height, setHeight] = useState(props.height || '100vh');
  const [backSrc, setBackSrc] = useState(props.backSrc || 'https://rmt.dogedoge.com/fetch/fluid/storage/bg/vdysjx.png?w=1920&fmt=webp');
  const [downArrow, setDownArrow] = useState(props.downArrow || false);

  const bannerStyle = {
    '--height': props.height,
    background: `url('${props.backSrc}') center / cover no-repeat`,
  };

  // const setFont = (titleName) => { 
  //   <PrinterFont className="setFont"></PrinterFont>
  // }
  return (<div className="banner" style={bannerStyle}>
    {props.downArrow && <div className="down-icon">
      <DownOutlined className="icon-down"/>
    </div>}
    <div className="mask"></div>
    <div className="context">
      <PrinterFont></PrinterFont>
    </div>
  </div>);
}

export default BannerBack;
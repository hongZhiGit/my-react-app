import PrinterFont from "../printer-font";
import './index.scss';
import { DownOutlined } from '@ant-design/icons';
import { ForwardRefRenderFunction, useState, useImperativeHandle, useRef, forwardRef, FC } from 'react';

interface IBannerBackRef {
  setFont: any;
}

type BannerBackProps = {
  height?: string,
  backSrc?: string,
  downArrow?: boolean,
}

const BannerBack: ForwardRefRenderFunction<IBannerBackRef, BannerBackProps> = (props, ref) => {
  const [height, setHeight] = useState(props.height || '100vh');
  const [backSrc, setBackSrc] = useState(props.backSrc || 'https://rmt.dogedoge.com/fetch/fluid/storage/bg/vdysjx.png?w=1920&fmt=webp');
  const [downArrow, setDownArrow] = useState(props.downArrow || false);

  const printerFontRef = useRef<any>();

  useImperativeHandle(
    ref,
    () => {
      return {
        setFont(titleName: string) {
          printerFontRef.current.setFont(titleName);
        },
      };
    },
    []
  );

  const bannerStyle = {
    '--height': height,
    background: `url('${backSrc}') center / cover no-repeat`,
  };

  return (<div className="banner" style={bannerStyle}>
    {downArrow && <div className="down-icon">
      <DownOutlined className="icon-down"/>
    </div>}
    <div className="mask"></div>
    <div className="context">
      <PrinterFont ref={printerFontRef}></PrinterFont>
    </div>
  </div>);
}

export default forwardRef(BannerBack);
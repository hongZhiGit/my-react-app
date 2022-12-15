import './index.scss';
import { useState, ForwardRefRenderFunction, forwardRef, useImperativeHandle } from 'react';

type PrinterFontDto = {};

const PrinterFont: ForwardRefRenderFunction<PrinterFontDto> = (props, ref) => {
  const [title, setTitle] = useState('');
  const [printerOut, setPrinterOut] = useState(false);

  useImperativeHandle(
    ref,
    () => {
      return {
        setFont(titleName: string) {
          const printer = (index: number) => {
            setTimeout(() => {
              if (index >= titleName.length) {
                setPrinterOut(true);
                return;
              }
              setTitle(title + titleName[index]);
              printer(++index);
            }, 140);
          };
          printer(0);
        },
      };
    },
    []
  );

  return (
    <h2 className="printer">
      {title}
      {title && <span className={printerOut ? 'underline' : ''}>_</span>}
    </h2>
  );
};

export default forwardRef(PrinterFont);

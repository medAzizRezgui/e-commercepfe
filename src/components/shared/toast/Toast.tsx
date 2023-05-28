import React from 'react';

type Props = {
  success: boolean;
  error: boolean;
  text: string;
  errorMsgs: any;
};
export const Toast = ({ success, text, error, errorMsgs }: Props) => (
  <>
    {success && (
      <div className="fixed right-10 top-5 z-[1500] animate-slideLeft rounded-[4px] bg-green-400 px-14 py-8 text-white">
        <h1>{text}</h1>
      </div>
    )}
    {error && (
      <div className="fixed right-10 top-10 z-[9999] animate-slideLeft rounded-[4px] bg-red-400 px-14 py-8 text-white">
        {errorMsgs.map(
          (err: {
            msg:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
          }) => (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <h1 className="text-text-xs">{err.msg}</h1>
          )
        )}
      </div>
    )}
  </>
);

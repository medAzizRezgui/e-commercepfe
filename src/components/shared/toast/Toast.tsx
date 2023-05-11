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
      <div className="fixed top-10 z-[1500] animate-slideLeft right-10 bg-green-400 text-white rounded-[4px] px-14 py-8">
        <h1>{text}</h1>
      </div>
    )}
    {error && (
      <div className="fixed top-10 animate-slideLeft right-10 bg-red-400 text-white rounded-[4px] px-14 py-8">
        {errorMsgs.map((err) => (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <h1 className="text-text-xs">{err.msg}</h1>
        ))}
      </div>
    )}
  </>
);

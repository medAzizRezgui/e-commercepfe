import { Transition } from '@headlessui/react';
import React, { useState } from 'react';

type Props = {
  trigger: React.ReactNode;
  content: React.ReactNode;
};

function HoverComponent({ trigger, content }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        className="cursor-pointer"
        onMouseLeave={() => setIsHovered(false)}
        onMouseEnter={() => setIsHovered(true)}
      >
        {trigger}
      </div>
      <Transition
        show={isHovered}
        enter="transition duration-100 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition duration-200 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="absolute z-[999] top-10 left-0 border-t-4 border-yellow-500 right-0 w-[1400px]  mx-auto p-24 bg-white drop-shadow-lg rounded-[4px]"
        >
          {content}
        </div>
      </Transition>
    </div>
  );
}

export default HoverComponent;

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
          className="absolute left-0 right-0 top-10 z-[999] mx-auto w-[1400px] rounded-[4px]  border-t-4 border-yellow-500 bg-white p-24 drop-shadow-lg"
        >
          {content}
        </div>
      </Transition>
    </div>
  );
}

export default HoverComponent;

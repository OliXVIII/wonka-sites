import Image from "next/image";

import { UpcomingEvent } from "@/types/upcoming-event";

export const MainImageUpcoming = ({
  upcomingEvent,
  banner,
}: {
  upcomingEvent: UpcomingEvent;
  banner?: boolean;
}) => {
  if (!upcomingEvent.images) {
    return null;
  }
  const main =
    upcomingEvent?.images?.filter((event) => event.main)[0] ||
    upcomingEvent?.images[0];

  return (
    <>
      <Image
        alt={upcomingEvent.title}
        src={main.src}
        fill
        className={`${banner ? "object-cover" : "object-fill md:rounded-xl"}`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-l from-[#000000cc] to-transparent ${banner ? "" : "sm:rounded-r-box"}`}
      />
      {upcomingEvent.logo.image && banner ? (
        <div className="relative h-full">
          <Image
            alt={upcomingEvent.title}
            src={upcomingEvent.logo.textImage ?? upcomingEvent.logo.image}
            fill
            className="absolute !left-auto !right-1 top-0 z-50 aspect-auto !w-auto rounded-box object-cover p-2 invert"
          />
        </div>
      ) : (
        <>
          <Image
            alt={upcomingEvent.title}
            src={upcomingEvent.logo.textImage ?? upcomingEvent.logo.image}
            width={200}
            height={200}
            className="absolute z-50 aspect-auto  rounded-box object-cover invert max-sm:right-2 max-sm:top-2 max-sm:h-20 max-sm:w-auto sm:right-6 sm:top-6"
          />
          <Image
            alt={upcomingEvent.title}
            src={upcomingEvent.logo.image}
            width={200}
            height={200}
            className="absolute left-6 top-0 z-50 aspect-auto h-36 w-auto rounded-b-box bg-black object-cover opacity-35 dark:invert max-sm:h-20"
          />
        </>
      )}
    </>
  );
};

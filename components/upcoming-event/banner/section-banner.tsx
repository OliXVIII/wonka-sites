import { createLink } from "@/lib/create-link";
import { LocaleDetails } from "@/types/languages";
import { UpcomingEvent } from "@/types/upcoming-event";
import { MainImageUpcoming } from "../page/main-image";
import { ReadMoreButton } from "../../read-more-button";
import { FeaturesType } from "@/types/features";

type UpcomingEventBannerCompProps = {
  upcomingEvent: UpcomingEvent;
  locale: LocaleDetails;
  banner: FeaturesType["banner"];
};

export const SectionBanner = ({
  upcomingEvent,
  locale,
  banner,
}: UpcomingEventBannerCompProps) => {
  if (!banner) {
    return null;
  }
  return (
    <a
      href={createLink(upcomingEvent.link, locale)}
      className={`container relative mx-auto flex mt-10 h-96 w-full items-center justify-center`}
    >
      <MainImageUpcoming upcomingEvent={upcomingEvent} />
      <ReadMoreButton readMore={upcomingEvent.readMore} alignBottomRight />
    </a>
  );
};
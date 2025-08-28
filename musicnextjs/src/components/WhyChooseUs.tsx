"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Collaboration Editing",
    description:
      "Work to get your song ready for the biggest streaming platforms, including Apple Music, Spotify, YouTube Music, Deezer, Amazon Music, Pandora, TuneIn, Pandora, and TuneIn.",
  },
  {
    title: "Collaboration Editing",
    description:
      "Work to get your song ready for the biggest streaming platforms, including Apple Music, Spotify, YouTube Music, Deezer, Amazon Music, Pandora, TuneIn, Pandora, and TuneIn.",
  },
  {
    title: "Collaboration Editing",
    description:
      "Work to get your song ready for the biggest streaming platforms, including Apple Music, Spotify, YouTube Music, Deezer, Amazon Music, Pandora, TuneIn, Pandora, and TuneIn. Work to get your song ready for the biggest streaming platforms, including Apple Music, Spotify, YouTube Music, Deezer, Amazon Music, Pandora, TuneIn, Pandora, and TuneIn.",
  },
  {
    title: "Collaboration Editing",
    description:
      "Work to get your song ready for the biggest streaming platforms, including Apple Music, Spotify, YouTube Music, Deezer, Amazon Music, Pandora, TuneIn, Pandora, and TuneIn.",
  },
  {
    title: "Collaboration Editing",
    description:
      "Work to get your song ready for the biggest streaming platforms, including Apple Music, Spotify, YouTube Music, Deezer, Amazon Music, Pandora, TuneIn, Pandora, and TuneIn.",
  },
];

function WhyChooseUs() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default WhyChooseUs;

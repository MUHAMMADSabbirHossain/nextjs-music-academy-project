"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const projects = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and learn how to read and write music notes effectively.",
    link: "https://google.one.com",
    slug: "understanding-music-theory",
    isFeature: true,
  },
  {
    title: "Advanced Composition Techniques",
    description:
      "Unlock the power of composition and learn how to create captivating melodies and melodies.",
    link: "https://google.two.com",
    slug: "advanced-composition-techniques",
    isFeature: true,
  },
  {
    title: "The Art of Song Writing",
    description:
      "Master the art of songwriting and learn how to create captivating melodies and melodies.",
    link: "https://google.three.com",
    slug: "the-art-of-song-writing",
    isFeature: true,
  },
  {
    title: "Music Production Basics",
    description:
      "Learn the basics of music production and how to create captivating melodies and melodies.",
    link: "https://google.four.com",
    slug: "music-production-basics",
    isFeature: true,
  },
  {
    title: "Live Performance Techniques",
    description:
      "Learn the basics of music production and how to create captivating melodies and melodies.",
    link: "https://google.five.com",
    slug: "live-performance-techniques",
    isFeature: true,
  },
];

function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURE WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>

        <div className="mt-10">
          <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={projects} />
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;

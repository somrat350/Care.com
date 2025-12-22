"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const motivations = [
  {
    title: "Compassion Comes First",
    text: "Caregiving is not just a service, it’s a responsibility filled with empathy and kindness.",
    image:
      "https://img.freepik.com/free-photo/top-view-world-heart-day-concept_23-2148631043.jpg?t=st=1766371222~exp=1766374822~hmac=aa18f182d2e615fac51f55568e2b71d30f8daa68d747d9df6060acd7ad237d52&w=740",
  },
  {
    title: "Every Life Matters",
    text: "Providing care means respecting dignity, safety, and emotional well-being.",
    image:
      "https://img.freepik.com/premium-photo/3d-family-heartbeat-with-life-text-concept-as-isolated-vector-heartbeat-line-with-diverse-fa_980716-636509.jpg?w=740",
  },
  {
    title: "Trust Builds Healing",
    text: "Strong caregiver relationships create comfort, confidence, and peace of mind.",
    image:
      "https://img.freepik.com/free-photo/people-cliff-giving-himself-handshake_1160-629.jpg?t=st=1766371336~exp=1766374936~hmac=f54ec7c38b07f49acdf699dd69fd0754e905ca5a56d668cd92cbbd92007071ef&w=740",
  },
  {
    title: "Care with Purpose",
    text: "True caregiving focuses on long-term wellness, not just short-term solutions.",
    image:
      "https://img.freepik.com/free-photo/view-hands-with-heart-shape-represent-affection_23-2151728434.jpg?t=st=1766371368~exp=1766374968~hmac=98bd2603625c20b46bc7be2307be54b1367d3c9223cfdb7ec5601892f9d3d89d&w=740",
  },
];

export default function Slider() {
  return (
    <div className="w-full my-5">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="rounded-2xl"
      >
        {motivations.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`grid md:grid-cols-2 gap-5 items-center p-2 md:p-10
              bg-linear-to-br from-gray-900/20 via-slate-900/20 to-secondary/20
              border border-secondary/30 rounded-2xl`}
            >
              {/* Image */}
              <div className="relative h-40 md:h-72 rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Text */}
              <div className="text-center md:text-left">
                <h2 className="text-xl md:text-3xl font-bold text-secondary mb-2 md:mb-4">
                  {item.title}
                </h2>
                <p className="mb-2 md:mb-6">{item.text}</p>

                <Link
                  href={`/`}
                  className="btn btn-secondary transition skeleton bg-secondary text-base"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

"use client";

import Marquee from "react-fast-marquee";
import CountUp from "react-countup";
import {
  FaStar,
  FaQuoteLeft,
  FaUsers,
  FaUserCheck,
  FaHeart,
} from "react-icons/fa6";
import Image from "next/image";

const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Mother of a Newborn",
    feedback:
      "Finding a reliable caregiver was stressful until I found this platform. The caregiver was professional, kind, and truly caring.",
    rating: 5,
    avatar:
      "https://img.freepik.com/free-photo/medium-shot-islamic-woman-lifestyle_23-2151064007.jpg?t=st=1766375139~exp=1766378739~hmac=394290719bac6e53c748c318f8f5591822ce6d52226fde61822397fb19fd3eb1",
  },
  {
    name: "Md. Karim",
    role: "Elderly Care Client",
    feedback:
      "The service gave us peace of mind. My father received excellent daily care and companionship.",
    rating: 5,
    avatar:
      "https://img.freepik.com/free-photo/portrait-good-looking-smiling-arabic-man-suit-attractive-young-businessman-with-beard-moustache-looking-camera-portrait-international-beauty-concept_74855-21597.jpg?t=st=1766375220~exp=1766378820~hmac=a75595499b6ce9fde664727ddbd864cb076c5f2007c176c809686b651210906b&w=740",
  },
  {
    name: "Nusrat Jahan",
    role: "Recovery Patient",
    feedback:
      "During my recovery, the caregiver support made a huge difference. Highly trusted service.",
    rating: 4,
    avatar:
      "https://img.freepik.com/premium-photo/close-up-young-woman-standing-against-sky_1048944-21587225.jpg?w=740",
  },
  {
    name: "Md. Karim",
    role: "Elderly Care Client",
    feedback:
      "The service gave us peace of mind. My father received excellent daily care and companionship.",
    rating: 5,
    avatar:
      "https://img.freepik.com/free-photo/portrait-good-looking-smiling-arabic-man-suit-attractive-young-businessman-with-beard-moustache-looking-camera-portrait-international-beauty-concept_74855-21597.jpg?t=st=1766375220~exp=1766378820~hmac=a75595499b6ce9fde664727ddbd864cb076c5f2007c176c809686b651210906b&w=740",
  },
];

const stats = [
  {
    icon: <FaUsers size={34} />,
    value: 5000,
    suffix: "+",
    label: "Families Served",
  },
  {
    icon: <FaUserCheck size={34} />,
    value: 2000,
    suffix: "+",
    label: "Verified Caregivers",
  },
  {
    icon: <FaHeart size={34} />,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export default function TestimonialsStats() {
  return (
    <section className="py-10 my-10 bg-base-200 overflow-hidden rounded-2xl">
      <div className="max-w-7xl mx-auto px-2 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            What People Say
          </h2>
          <p className="text-base-content/70 sm:text-lg">
            Trusted experiences from families who rely on our care services.
          </p>
        </div>

        {/* Testimonials Marquee */}

        <Marquee
          pauseOnHover
          speed={40}
          gradient
          gradientColor={[250, 48, 152]}
          direction="left"
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="mx-4 w-[320px] card bg-base-100 shadow-lg flex flex-col items-center p-4"
            >
              {/* Avatar */}
              <Image
                width={64}
                height={64}
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-3 object-cover border-2 border-secondary"
              />

              {/* Feedback */}
              <FaQuoteLeft className="text-secondary mb-2" size={22} />
              <p className="text-sm text-center text-base-content/80 mb-3">
                {t.feedback}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FaStar key={i} className="text-secondary" />
                ))}
              </div>

              {/* Name & Role */}
              <div className="border-t pt-2 w-full text-center">
                <h4 className="font-semibold">{t.name}</h4>
                <p className="text-xs text-base-content/60">{t.role}</p>
              </div>
            </div>
          ))}
        </Marquee>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="card bg-base-100 shadow-md text-center">
              <div className="card-body">
                <div className="mx-auto mb-3 text-secondary">{stat.icon}</div>

                <h3 className="text-4xl font-bold">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {stat.suffix}
                </h3>

                <p className="text-base-content/70">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

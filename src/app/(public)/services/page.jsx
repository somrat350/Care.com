"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Services data with category
const services = [
  {
    _id: 1,
    img: "https://img.freepik.com/premium-photo/woman-pink-shirt-sits-floor-living-room_85574-10046.jpg?w=1060",
    title: "Baby Care",
    desc: "Professional and loving caregivers to support newborns, toddlers, and young children in a safe and nurturing environment.",
    category: "Baby",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "linear" },
  }),
};

export default function AllServicesPage() {
  const categories = [
    "All",
    "Baby",
    "Elderly",
    "Sick",
    "Special Needs",
    "Mental Health",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter services based on active category
  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div className="">
      {/* Hero Section */}
      <section className="py-10 bg-base-200 rounded-2xl">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-secondary mb-4">
            Our Services
          </h1>
          <p className="sm:text-lg text-base-content/70">
            Explore our range of care services designed for every stage of life.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="my-3">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn btn-secondary font-semibold transition ${
                activeCategory === cat
                  ? "bg-secondary text-white shadow-lg"
                  : "bg-base-200 text-base-content hover:bg-secondary/80 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-5">
            {filteredServices.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
                className="card bg-base-200 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="card-body text-center">
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      fill
                      src={service.img}
                      alt={service.title}
                      className="w-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-base-content/70 mb-4">{service.desc}</p>
                  <Link
                    href={`/services/${service._id}`}
                    className="btn btn-secondary w-full font-semibold hover:scale-105 transition skeleton bg-secondary"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

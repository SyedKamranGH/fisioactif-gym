"use client";
import React from "react";
import { Dumbbell, HeartPulse, User } from "lucide-react";
import { ServiceCard, BlogCard, TeamMemberCard, GalleryCard, TestimonialCard } from ".";

function CardExample() {
  const services = [
    {
      icon: <Dumbbell className="h-6 w-6" />,
      title: "Strength Training",
      description: "Build muscle and power with guided workouts.",
      variant: "standard",
    },
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Cardio Fitness",
      description: "Improve endurance and heart health.",
      variant: "featured",
    },
  ];

  const blogPosts = [
    {
      image: "/Images/FitnessSectionLayout.png",
      title: "Top 5 Full-Body Workouts",
      excerpt: "Discover balanced routines to hit every major muscle group.",
      author: { name: "Lorem", avatar: "/Logo_fisioactif-280x334.jpg" },
      date: "17 May 2023",
    },
    {
      image: "/Images/HealthSectionLayout.png",
      title: "Nutrition Basics for Beginners",
      excerpt: "Learn how to fuel your body for performance and recovery.",
      author: { name: "Ipsum", avatar: "/Logo_fisioactif-280x334.jpg" },
      date: "18 May 2023",
    },
  ];

  const team = [
    { image: "/Icons/icon_1.png", name: "LOREM" },
    { image: "/Icons/icon_2.png", name: "IPSUM" },
    { image: "/Icons/icon_3.png", name: "DOLOR" },
  ];

  return (
    <div className="space-y-12">
      {/* Service Cards */}
      <div>
        <h3 className="heading-3 mb-6">Service Cards</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, idx) => (
            <ServiceCard key={idx} {...svc} />
          ))}
        </div>
      </div>

      {/* Blog Cards */}
      <div>
        <h3 className="heading-3 mb-6">Blog Cards</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, idx) => (
            <BlogCard key={idx} {...post} />
          ))}
        </div>
      </div>

      {/* Team Member Cards */}
      <div>
        <h3 className="heading-3 mb-6">Team Member Cards</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {team.map((member, idx) => (
            <TeamMemberCard key={idx} {...member} />
          ))}
        </div>
      </div>

      {/* Gallery & Testimonial stubs */}
      <div>
        <h3 className="heading-3 mb-6">Gallery & Testimonial</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <GalleryCard title="Lorem - Ipsum" subtitle="Dolor Sit Amet" />
          <TestimonialCard
            quote="Great atmosphere and professional coaches!"
            author={{ name: "Teodros" }}
          />
        </div>
      </div>
    </div>
  );
}

export default CardExample;

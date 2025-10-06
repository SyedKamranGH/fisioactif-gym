"use client";
import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ReactPlayer from "react-player";
import CustomButton from "@/components/ui/Button";
import { ShoppingCart, Headset } from "lucide-react";
import { Search, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs/index";
import InputField from "@/components/ui/Input";
import Calendar from "@/components/Features/Calendar";
import Header from "@/components/layout/Header";
import PageTitle from "@/components/layout/PageTitle";
import SectionLayout from "@/components/layout/SectionLayout";
import FloatingActionButton from "@/components/ui/Floating Action Button/index";
import CustomCarousel from "@/components/Features/CustomCarousel";
import Image from "next/image";

const page = () => {
  const handleAddToCart = () => {
    alert("Item added to cart!");
  };
  // Team data for the carousel (8 team members)
  const teamMembers = [
    { name: "John Doe", role: "Fitness Trainer", image: "/Icons/icon_1.png" },
    { name: "Jane Smith", role: "Nutritionist", image: "/Icons/icon_2.png" },
    { name: "Mike Johnson", role: "Yoga Instructor", image: "/Icons/icon_3.png" },
    { name: "Sarah Wilson", role: "Personal Trainer", image: "/Icons/icon_4.png" },
    { name: "David Brown", role: "Pilates Instructor", image: "/Icons/icon_5.png" },
    { name: "Lisa Garcia", role: "Strength Coach", image: "/Icons/icon_6.png" },
    { name: "Tom Anderson", role: "Wellness Coach", image: "/Icons/icon_7.png" },
    { name: "Emma Davis", role: "Cardio Specialist", image: "/Icons/icon_8.png" },
  ];

  // Video player state
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [playerReady, setPlayerReady] = useState(false);

  // Embla Carousel setup
  // const [emblaRef, emblaApi] = useEmblaCarousel({
  //   loop: true,
  //   align: "start",
  //   slidesToScroll: 1,
  //   breakpoints: {
  //     "(min-width: 640px)": { slidesToScroll: 2 },
  //     "(min-width: 768px)": { slidesToScroll: 3 },
  //     "(min-width: 1024px)": { slidesToScroll: 4 },
  //   },
  // });

  // const scrollPrev = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev();
  // }, [emblaApi]);

  // const scrollNext = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollNext();
  // }, [emblaApi]);

  // Video player handlers with error handling
  const handlePlay = useCallback(() => {
    if (playerReady) {
      setPlaying(true);
    }
  }, [playerReady]);

  const handlePause = useCallback(() => {
    setPlaying(false);
  }, []);

  const handleReady = useCallback(() => {
    setPlayerReady(true);
  }, []);

  const handleError = useCallback((error) => {
    console.warn("Video player error:", error);
    setPlaying(false);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      <SectionLayout
        backgroundImage="/Images/SectionLayoutBackground.png"
        padding="py-24"
        height="min-h-[640px]"
      >
        <div className="space-y-6 px-4 py-32 text-center text-black">
          <h1 className="text-5xl font-bold">
            Welcome to <span className="text-primary">FisioActif</span> Gym
          </h1>
          <p className="text-xl">Your premier destination for fitness and wellness</p>
          <div className="mt-4 flex justify-center gap-4">
            <button className="btn btn-primary btn-lg">Get Started</button>
            <button className="btn btn-outline btn-lg">Learn More</button>
          </div>
        </div>
      </SectionLayout>

      <PageTitle title="Component Examples" breadcrumbs={["Home", "Examples"]} />

      <section className="hero-diagonal px-4 py-12">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="hero-title-mixed mb-4">
              Welcome to <span className="text-primary">FisioActif</span> Gym
            </h1>
            <p className="hero-subtitle">Your premier destination for fitness and wellness</p>
            <section className="bg-white px-4 py-12">
              <div className="container mx-auto max-w-2xl">
                <h2 className="heading-2 mb-8 text-center">Form Components</h2>
                <form className="space-y-6">
                  <div>
                    <label className="label">Custom InputField (Search)</label>
                    <InputField
                      type="search"
                      placeholder="Search something..."
                      onSubmit={(val) => alert(`Searched: ${val}`)}
                    />
                  </div>

                  <div>
                    <label className="label">Custom InputField (Subscribe)</label>
                    <InputField
                      type="subscribe"
                      placeholder="Enter your email"
                      buttonText="Join Now"
                      onSubmit={(val) => alert(`Subscribed: ${val}`)}
                    />
                  </div>

                  <div>
                    <label className="label">Custom InputField (Underline)</label>
                    <InputField type="underline" placeholder="Enter username" />
                  </div>
                </form>
              </div>
            </section>

            <div className="mt-8 flex gap-4">
              <button className="btn btn-primary btn-lg">Get Started</button>
              <button className="btn btn-outline btn-lg">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white px-4 py-12">
        {" "}
        <Calendar />
      </div>
      {/* Typography Showcase */}
      <section className="px-4 py-12">
        <div className="container mx-auto">
          <h2 className="heading-2 mb-8 text-center">Typography System</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="heading-3 mb-4">Headings</h3>
              <div className="space-y-4">
                <h1 className="heading-1">Heading 1</h1>
                <h2 className="heading-2">Heading 2</h2>
                <h3 className="heading-3">Heading 3</h3>
                <h4 className="heading-4">Heading 4</h4>
                <h5 className="heading-5">Heading 5</h5>
                <h6 className="heading-6">Heading 6</h6>
              </div>
            </div>
            <div>
              <h3 className="heading-3 mb-4">Body Text</h3>
              <div className="space-y-4">
                <p className="body-large">Large body text for important content</p>
                <p className="body-regular">Regular body text for general content</p>
                <p className="body-small">Small body text for secondary information</p>
                <p className="caption">Caption text for labels and metadata</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="bg-white px-4 py-12">
        <div className="container mx-auto">
          <h2 className="heading-2 mb-8 text-center">Color Palette</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="bg-primary mx-auto mb-2 h-20 w-20 rounded-lg"></div>
              <p className="text-sm font-medium">Primary</p>
              <p className="text-xs text-neutral-500">#E31E3F</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary mx-auto mb-2 h-20 w-20 rounded-lg"></div>
              <p className="text-sm font-medium">Secondary</p>
              <p className="text-xs text-neutral-500">#1A1A1A</p>
            </div>
            <div className="text-center">
              <div className="bg-accent-cyan mx-auto mb-2 h-20 w-20 rounded-lg"></div>
              <p className="text-sm font-medium">Accent Cyan</p>
              <p className="text-xs text-neutral-500">#00D4D4</p>
            </div>
            <div className="text-center">
              <div className="bg-accent-success mx-auto mb-2 h-20 w-20 rounded-lg"></div>
              <p className="text-sm font-medium">Success</p>
              <p className="text-xs text-neutral-500">#10B981</p>
            </div>
          </div>
        </div>
      </section>

      {/* Button Components */}

      <section className="px-4 py-12">
        <div className="flex justify-center gap-4">
          {/* Search Button */}
          <CustomButton
            variant="search"
            icon={<Search />}
            onClick={() => console.log("Search clicked")}
          />

          {/* Slanted Button */}
          <CustomButton
            label="Consulta"
            variant="slanted"
            onClick={() => console.log("Consulta clicked")}
          />
        </div>
      </section>

      <div>
        <Breadcrumbs breadcrumbItems={["Home", "Equipa"]} />
      </div>

      {/* Card Components */}
      <section className="bg-white px-4 py-12">
        <div className="container mx-auto">
          <h2 className="heading-2 mb-8 text-center">Card Components</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Regular Card</h3>
                <p className="card-subtitle">Standard card component</p>
              </div>
              <div className="card-body">
                <p className="body-regular">
                  This is a regular card with standard styling and hover effects.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary btn-sm">Action</button>
              </div>
            </div>

            <div className="card-angled">
              <div className="card-header">
                <h3 className="card-title">Angled Card</h3>
                <p className="card-subtitle">Card with angled corner</p>
              </div>
              <div className="card-body">
                <p className="body-regular">
                  This card features the signature angled corner design pattern.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary btn-sm">Action</button>
              </div>
            </div>

            <div className="card card-compact">
              <div className="card-header">
                <h3 className="card-title">Compact Card</h3>
                <p className="card-subtitle">Reduced padding</p>
              </div>
              <div className="card-body">
                <p className="body-regular">Compact version with less padding for dense layouts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Patterns */}
      <section className="px-4 py-12">
        <div className="container mx-auto">
          <h2 className="heading-2 mb-8 text-center">Design Patterns</h2>

          {/* Diagonal Slice Pattern */}
          <div className="mb-12">
            <h3 className="heading-3 mb-6">Diagonal Slice Pattern</h3>
            <div className="diagonal-slice p-8 text-white">
              <h4 className="heading-4 mb-4">Diagonal Background</h4>
              <p className="body-regular">
                This section demonstrates the diagonal slice pattern with red gradient background.
              </p>
            </div>
          </div>

          {/* Breadcrumb Navigation */}
          <div className="mb-12">
            <h3 className="heading-3 mb-6">Breadcrumb Navigation</h3>
            <div className="flex gap-2">
              <a href="#" className="breadcrumb-angled">
                Home
              </a>
              <a href="#" className="breadcrumb-angled">
                Services
              </a>
              <a href="#" className="breadcrumb-angled">
                Fitness
              </a>
            </div>
          </div>

          {/* Team Cards Carousel */}
          {/* <div className="mb-12">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="heading-3">Team Cards</h3>
              <div className="flex gap-2">
                <button
                  onClick={scrollPrev}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-neutral-50"
                  aria-label="Previous team members"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={scrollNext}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:bg-neutral-50"
                  aria-label="Next team members"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex">
                {teamMembers.map((member, index) => (
                  <div key={index} className="embla__slide min-w-0 flex-[0_0_auto] pl-4">
                    <div className="team-card">
                      <div className="team-card-image bg-neutral-200">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full rounded-t-lg object-cover"
                        />
                      </div>
                      <div className="team-card-content">
                        <h4 className="heading-4 mb-2">{member.name}</h4>
                        <p className="body-small text-neutral-600">{member.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}

          <div className="space-y-20 bg-black py-10">
            {/* Variable-width Showcase Carousel */}
            <section className="bg-black px-4 py-10 sm:px-8">
              <h2 className="mb-6 text-center text-2xl font-bold text-white">Showcase Carousel</h2>

              <CustomCarousel type="variable" align="start" loop={true}>
                {[
                  { src: "/team1.jpg", width: "w-60" },
                  { src: "/team2.jpg", width: "w-80" },
                  { src: "/team3.jpg", width: "w-96" },
                  { src: "/team4.jpg", width: "w-80" },
                  { src: "/team5.jpg", width: "w-60" },
                ].map((img, i) => (
                  <CustomCarousel.Slide key={i} type="variable">
                    <div
                      className={`relative ${img.width} h-96 overflow-hidden rounded-2xl bg-neutral-900`}
                    >
                      <img
                        src={img.src}
                        alt={`Showcase ${i + 1}`}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                        {["HEALTH", "FITNESS", "WELLNESS", "LIFESTYLE", "NUTRITION"][i]}
                      </div>
                    </div>
                  </CustomCarousel.Slide>
                ))}
              </CustomCarousel>
            </section>

            {/* Testimonial Carousel */}
            <section className="px-4 sm:px-8">
              <h2 className="mb-6 text-center text-2xl font-bold text-white">Testimonials</h2>
              <CustomCarousel type="testimonial">
                {[1, 2, 3].map((_, i) => (
                  <CustomCarousel.Slide key={i} type="testimonial">
                    <img
                      src={`/avatar${i + 1}.jpg`}
                      alt="User"
                      className="mx-auto mb-4 h-20 w-20 rounded-full object-cover"
                    />
                    <p className="mb-4 italic text-gray-600">
                      “This platform completely changed my daily routine!”
                    </p>
                    <h3 className="text-lg font-semibold">Jane Doe</h3>
                    <p className="text-sm text-gray-500">Health Enthusiast</p>
                  </CustomCarousel.Slide>
                ))}
              </CustomCarousel>
            </section>

            {/* News Feed Carousel */}
            <section className="px-4 sm:px-8">
              <h2 className="mb-1 text-2xl font-bold text-white">Latest News</h2>
              <CustomCarousel type="card" align="start">
                {[1, 2, 3, 4].map((_, i) => (
                  <CustomCarousel.Slide key={i} type="card">
                    <img
                      src={`/news${i + 1}.jpg`}
                      alt="News"
                      className="h-48 w-full object-cover"
                    />
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-semibold">Wellness Trends {2025 - i}</h3>
                      <p className="mb-3 text-sm text-gray-600">
                        Discover how holistic habits are transforming modern health routines...
                      </p>
                      <button className="text-blue-600 hover:underline">Read more →</button>
                    </div>
                  </CustomCarousel.Slide>
                ))}
              </CustomCarousel>
            </section>
          </div>

          {/* Service Icons */}
          <div className="mb-12">
            <h3 className="heading-3 mb-6">Service Icons</h3>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <div className="service-icon mx-auto mb-4">
                  <span className="text-2xl">💪</span>
                </div>
                <h4 className="heading-5 mb-2">Strength Training</h4>
                <p className="body-small text-neutral-600">Build muscle and power</p>
              </div>
              <div className="text-center">
                <div className="service-icon service-icon-primary mx-auto mb-4">
                  <span className="text-2xl text-white">🧘</span>
                </div>
                <h4 className="heading-5 mb-2">Yoga</h4>
                <p className="body-small text-neutral-600">Flexibility and mindfulness</p>
              </div>
              <div className="text-center">
                <div className="service-icon service-icon-secondary mx-auto mb-4">
                  <span className="text-2xl text-white">🏃</span>
                </div>
                <h4 className="heading-5 mb-2">Cardio</h4>
                <p className="body-small text-neutral-600">Heart health and endurance</p>
              </div>
              <div className="text-center">
                <div className="service-icon mx-auto mb-4">
                  <span className="text-2xl">🥗</span>
                </div>
                <h4 className="heading-5 mb-2">Nutrition</h4>
                <p className="body-small text-neutral-600">Healthy eating plans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* React Player Video Section */}
      <section className="bg-white px-4 py-12">
        <div className="container mx-auto">
          <h2 className="heading-2 mb-8 text-center">Video Player Examples</h2>

          {/* YouTube Video Example */}
          <div className="mb-12">
            <h3 className="heading-3 mb-6">YouTube Video Player</h3>
            <div className="mx-auto max-w-4xl">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-neutral-900">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  width="100%"
                  height="100%"
                  playing={playing}
                  muted={muted}
                  volume={volume}
                  controls={true}
                  onReady={handleReady}
                  onPlay={handlePlay}
                  onPause={handlePause}
                  onError={handleError}
                  config={{
                    youtube: {
                      playerVars: {
                        modestbranding: 1,
                        rel: 0,
                        showinfo: 0,
                      },
                    },
                  }}
                />
              </div>

              {/* Player Status */}
              {!playerReady && (
                <div className="mt-4 text-center">
                  <p className="text-sm text-neutral-600">Loading video player...</p>
                </div>
              )}

              {/* Custom Controls */}
              <div className="mt-4 flex items-center justify-center gap-4">
                <button
                  onClick={() => {
                    if (playerReady) {
                      setPlaying(!playing);
                    }
                  }}
                  disabled={!playerReady}
                  className="bg-primary hover:bg-primary/90 flex items-center gap-2 rounded-lg px-4 py-2 text-white transition-colors disabled:cursor-not-allowed disabled:bg-neutral-300"
                >
                  {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  {playing ? "Pause" : "Play"}
                </button>

                <button
                  onClick={() => setMuted(!muted)}
                  disabled={!playerReady}
                  className="flex items-center gap-2 rounded-lg bg-neutral-200 px-4 py-2 transition-colors hover:bg-neutral-300 disabled:cursor-not-allowed disabled:bg-neutral-100"
                >
                  {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  {muted ? "Unmute" : "Mute"}
                </button>

                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium">Volume:</label>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    disabled={!playerReady}
                    className="w-20 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Multiple Video Sources */}
          <div className="mb-12">
            <h3 className="heading-3 mb-6">Multiple Video Sources</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Vimeo Video */}
              <div>
                <h4 className="heading-4 mb-4">Vimeo Video</h4>
                <div className="relative aspect-video overflow-hidden rounded-lg bg-neutral-900">
                  <ReactPlayer
                    url="https://vimeo.com/148751763"
                    width="100%"
                    height="100%"
                    controls={true}
                  />
                </div>
              </div>

              {/* Direct Video File */}
              <div>
                <h4 className="heading-4 mb-4">Direct Video File</h4>
                <div className="relative aspect-video overflow-hidden rounded-lg bg-neutral-900">
                  <ReactPlayer
                    url="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    width="100%"
                    height="100%"
                    controls={true}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Video Player Features */}
          <div className="mb-12">
            <h3 className="heading-3 mb-6">Player Features</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Multiple Platforms</h4>
                  <p className="card-subtitle">YouTube, Vimeo, SoundCloud</p>
                </div>
                <div className="card-body">
                  <p className="body-regular">
                    Supports YouTube, Vimeo, SoundCloud, and direct video files.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Custom Controls</h4>
                  <p className="card-subtitle">Full customization</p>
                </div>
                <div className="card-body">
                  <p className="body-regular">
                    Build custom controls and integrate with your design system.
                  </p>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Responsive Design</h4>
                  <p className="card-subtitle">Mobile friendly</p>
                </div>
                <div className="card-body">
                  <p className="body-regular">
                    Automatically adapts to different screen sizes and orientations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Components */}
      <section className="bg-white px-4 py-12">
        <div className="container mx-auto max-w-2xl">
          <h2 className="heading-2 mb-8 text-center">Form Components</h2>
          <form className="space-y-6">
            <div>
              <label className="label label-required">Full Name</label>
              <input type="text" className="input" placeholder="Enter your full name" />
            </div>
            <div>
              <label className="label">Email Address</label>
              <input type="email" className="input" placeholder="Enter your email" />
            </div>
            <div>
              <label className="label">Message</label>
              <textarea className="input" rows="4" placeholder="Enter your message"></textarea>
            </div>
            <div className="flex gap-4">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button type="button" className="btn btn-outline">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Alerts and Badges */}
      <section className="px-4 py-12">
        <div className="container mx-auto">
          <h2 className="heading-2 mb-8 text-center">Alerts & Badges</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="heading-3 mb-4">Alert Messages</h3>
              <div className="space-y-4">
                <div className="alert alert-success">
                  <strong>Success!</strong> Your action was completed successfully.
                </div>
                <div className="alert alert-warning">
                  <strong>Warning!</strong> Please review your input before proceeding.
                </div>
                <div className="alert alert-error">
                  <strong>Error!</strong> Something went wrong. Please try again.
                </div>
                <div className="alert alert-info">
                  <strong>Info:</strong> Here's some helpful information for you.
                </div>
              </div>
            </div>
            <div>
              <h3 className="heading-3 mb-4">Badges</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-primary">Primary</span>
                  <span className="badge badge-secondary">Secondary</span>
                  <span className="badge badge-success">Success</span>
                  <span className="badge badge-warning">Warning</span>
                  <span className="badge badge-error">Error</span>
                  <span className="badge badge-cyan">Cyan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="fixed bottom-16 right-16 flex flex-col gap-4">
          <FloatingActionButton
            icon={<ShoppingCart />}
            variant="blue"
            onClick={() => alert("Blue FAB clicked!")}
          />
          <FloatingActionButton
            icon={<Headset />}
            variant="green"
            onClick={() => alert("Green FAB clicked!")}
          />
        </div>
      </section>
    </div>
  );
};

export default page;

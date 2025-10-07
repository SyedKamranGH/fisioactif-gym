"use client";
import React, { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ReactPlayer from "react-player";
import CustomButton from "@/components/ui/Button";
import { ShoppingCart, Headset } from "lucide-react";
import {
  Search,
  Instagram,
  Facebook,
  Twitter,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs/index";
import InputField from "@/components/ui/Input";
import Calendar from "@/components/Features/Calendar";
import Header from "@/components/layout/Header";
import PageTitle from "@/components/layout/PageTitle";
import SectionLayout from "@/components/layout/SectionLayout";
import FloatingActionButton from "@/components/ui/Floating Action Button/index";
import CustomCarousel from "@/components/Features/CustomCarousel";
import Image from "next/image";
import VideoPlayer from "@/components/ui/Videoplayer/index";
import CustomCheckbox from "@/components/ui/Checkbox";
import Avatar from "@/components/ui/Avatar";

const page = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);

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

  const avatarPositions = [
    // LEFT SIDE
    {
      src: "/Images/User.png",
      size: 80,
      duration: 2.8,
      delay: 0.2,
      style: { top: "10%", left: "10%" },
    },
    {
      src: "/Images/User.png",
      size: 100,
      duration: 3.2,
      delay: 0.6,
      style: { top: "40%", left: "20%" },
    },
    {
      src: "/Images/User.png",
      size: 70,
      duration: 2.5,
      delay: 1.2,
      style: { bottom: "19%", left: "12%" },
    },
    // RIGHT SIDE
    {
      src: "/Images/User.png",
      size: 80,
      duration: 3.5,
      delay: 0.4,
      style: { top: "8%", right: "20%" },
    },
    {
      src: "/Images/User.png",
      size: 100,
      duration: 2.7,
      delay: 0.9,
      style: { top: "30%", right: "6%" },
    },
    {
      src: "/Images/User.png",
      size: 70,
      duration: 3.1,
      delay: 1.5,
      style: { bottom: "25%", right: "20%" },
    },
  ];

  // Video player state
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [playerReady, setPlayerReady] = useState(false);

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

      <div className="relative h-[100vh] overflow-hidden bg-gradient-to-tr from-[#FFF1F1] to-[#FFD8B1]">
        <h1 className="pt-10 text-center text-4xl font-bold">Testimonials with Animated Avatars</h1>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-2xl bg-white/80 p-10 text-center shadow-xl backdrop-blur-sm">
            <p className="text-lg font-medium">Testimonial carousel placeholder</p>
          </div>
        </div>

        {avatarPositions.map((avatar, index) => (
          <Avatar key={index} variant="animated" {...avatar} />
        ))}
      </div>

      <div className="space-y-6 p-10">
        <h2 className="mb-4 text-xl font-semibold">Checkbox Variants Demo</h2>

        <div className="space-y-3">
          <CustomCheckbox
            id="chk-primary"
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            checked={checked1}
            onCheckedChange={setChecked1}
            variant="primary"
          />

          <CustomCheckbox id="chk-disabled" label="Disabled Checkbox" checked={true} disabled />

          <CustomCheckbox
            id="chk-custom"
            label="Custom Color (#060606ff)"
            checked={checked3}
            onCheckedChange={setChecked3}
            color="#060606ff"
          />
        </div>
      </div>

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
      <h1 className="mb-8 text-center text-3xl font-bold">Button Component</h1>
      <section className="px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4">
          <CustomButton
            variant="search"
            color="gray"
            icon={<Search />}
            onClick={() => console.log("Search clicked")}
          />

          <CustomButton
            label="Consulta"
            variant="slanted"
            color="red"
            onClick={() => console.log("Consulta clicked")}
          />

          <CustomButton
            label="Marcacao"
            variant="slanted"
            color="red"
            onClick={() => console.log("Marcacao clicked")}
          />

          <CustomButton
            label="Subscrever"
            variant="slanted"
            color="red"
            onClick={() => console.log("Subscrever clicked")}
            style={{ backgroundColor: "black", color: "white" }}
          />

          <CustomButton
            label="Começar"
            variant="slanted"
            color="red"
            onClick={() => console.log("Começar clicked")}
          />

          <CustomButton
            label="Saiba Mais"
            variant="slanted"
            color="red"
            onClick={() => console.log("Saiba Mais clicked")}
          />

          <CustomButton
            label="Ler Mais"
            variant="slanted"
            color="red"
            onClick={() => console.log("Ler Mais clicked")}
          />

          <CustomButton
            label="Ver Tudo"
            variant="slanted"
            color="red"
            onClick={() => console.log("Ver Tudo clicked")}
          />
        </div>
      </section>

      {/* Section 2: Social Icon Buttons */}
      <section className="px-4 py-8">
        <div className="flex justify-center gap-4">
          <CustomButton
            variant="social"
            icon={<Twitter />}
            color="blue"
            onClick={() => console.log("Twitter clicked")}
          />

          <CustomButton
            variant="social"
            icon={<Instagram />}
            color="pink"
            onClick={() => console.log("Instagram clicked")}
          />

          <CustomButton
            variant="social"
            icon={<Facebook />}
            color="blue"
            onClick={() => console.log("Facebook clicked")}
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
      <div className="flex min-h-screen flex-col items-center justify-center space-y-8 bg-gray-100 p-6">
        <h1 className="text-2xl font-bold text-gray-800">Video Player </h1>
        <VideoPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      </div>

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

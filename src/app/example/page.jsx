"use client";
import CustomButton from "@/components/ui/Button";
import { Search } from "lucide-react";
import InputField from "@/components/ui/Input";

const page = () => {
  return (
    <div className="min-h-screen bg-neutral-50">
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

          {/* Team Cards */}
          <div className="mb-12">
            <h3 className="heading-3 mb-6">Team Cards</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="team-card">
                <div className="team-card-image bg-neutral-200"></div>
                <div className="team-card-content">
                  <h4 className="heading-4 mb-2">John Doe</h4>
                  <p className="body-small text-neutral-600">Fitness Trainer</p>
                </div>
              </div>
              <div className="team-card">
                <div className="team-card-image bg-neutral-200"></div>
                <div className="team-card-content">
                  <h4 className="heading-4 mb-2">Jane Smith</h4>
                  <p className="body-small text-neutral-600">Nutritionist</p>
                </div>
              </div>
              <div className="team-card">
                <div className="team-card-image bg-neutral-200"></div>
                <div className="team-card-content">
                  <h4 className="heading-4 mb-2">Mike Johnson</h4>
                  <p className="body-small text-neutral-600">Yoga Instructor</p>
                </div>
              </div>
            </div>
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

      {/* Floating Action Button */}
      <a href="#" className="floating-action">
        <span className="text-2xl">+</span>
      </a>
    </div>
  );
};

export default page;

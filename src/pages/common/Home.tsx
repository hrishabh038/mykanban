import React from "react";
import { Button, InteractiveBackground } from "../../components/components";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <WhyLearningHub />
      <PublicPrivateCourses />
      <FeaturedCourses />
      <CreateAndLearn />
      <CTASection />
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden cursor-default ">
      <InteractiveBackground />
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-160px] h-[280px] w-[280px] sm:h-[360px] sm:w-[360px] md:h-[420px] md:w-[420px] -translate-x-1/2 rounded-full bg-neutral-800/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-100">
            <span className="bbh-bartle-regular text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Learning Hub</span>
            <span className="block mt-2 text-neutral-400">
              build courses from anywhere
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-5 sm:mt-6 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-neutral-400">
            Create your own courses by collecting videos and resources from
            different platforms. Organize them into a single library, keep
            courses private or make them public, and enroll in courses created
            by others.
          </p>

          {/* Actions */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 justify-center">
            <Button
              label="Get Started"
              path="/signup"
              className="sm:w-auto px-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Create a Course",
      description:
        "Start a new course and give it a name. Decide if it’s public or private.",
    },
    {
      title: "Add Learning Links",
      description:
        "Collect videos, articles, and resources from multiple platforms into one place.",
    },
    {
      title: "Share or Enroll",
      description:
        "Publish your course or keep it private. Enroll in courses created by others.",
    },
  ];
  return (
    <section className=" py-24">
      <h2 className="text-center text-2xl sm:text-3xl font-semibold text-neutral-100">
        How Learning Hub Works
      </h2>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded border border-neutral-800 bg-neutral-900/50 p-6"
          >
            <span className="text-sm font-medium text-neutral-500">
              Step {index + 1}
            </span>
            <h3 className="mt-2 text-lg font-semibold text-neutral-100">
              {step.title}
            </h3>
            <p className="mt-3 text-neutral-400 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const WhyLearningHub = () => {
  const reasons = [
    "Organize content from multiple platforms",
    "Build personalized learning paths",
    "Keep courses private or share publicly",
    "Learn from courses created by the community",
  ];

  return (
    <section className=" py-24">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100">
          Why use Learning Hub
        </h2>

        <p className="mt-4 text-neutral-400">
          Learning Hub helps you turn scattered resources into structured
          learning experiences.
        </p>

        <ul className="mt-10 space-y-4">
          {reasons.map((reason) => (
            <li
              key={reason}
              className="rounded border border-neutral-800 bg-neutral-900/50 px-6 py-4 text-neutral-300 text-sm"
            >
              {reason}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const PublicPrivateCourses = () => {
  return (
    <section className="bg-neutral-950 py-24">
      <h2 className="text-center text-2xl sm:text-3xl font-semibold text-neutral-100">
        Public vs Private Courses
      </h2>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {/* Public */}
        <div className="rounded border border-neutral-800 bg-neutral-900/50 p-8">
          <h3 className="text-lg font-semibold text-neutral-100">
            Public Courses
          </h3>
          <p className="mt-4 text-sm text-neutral-400">
            Share your knowledge with the community. Anyone can enroll and learn
            from your curated resources.
          </p>
        </div>

        {/* Private */}
        <div className="rounded border border-neutral-800 bg-neutral-900/50 p-8">
          <h3 className="text-lg font-semibold text-neutral-100">
            Private Courses
          </h3>
          <p className="mt-4 text-sm text-neutral-400">
            Keep your learning personal. Create private courses for yourself or
            invite selected learners.
          </p>
        </div>
      </div>
    </section>
  );
};

const FeaturedCourses = () => {
  const featured = [
    "Full-Stack Web Development",
    "Data Structures & Algorithms",
    "System Design Fundamentals",
    "UI/UX Design Basics",
  ];
  return (
    <section className="bg-neutral-950 py-24">
      <h2 className="text-center text-2xl sm:text-3xl font-semibold text-neutral-100">
        Featured Courses
      </h2>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((course) => (
          <div
            key={course}
            className="rounded border border-neutral-800 bg-neutral-900/50 p-6 hover:border-neutral-700 transition-colors"
          >
            <h3 className="text-sm font-semibold text-neutral-100">{course}</h3>
            <p className="mt-2 text-xs text-neutral-400">
              Curated learning resources from multiple platforms.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const CreateAndLearn = () => {
  const createItems = [
    {
      title: "Curated Courses",
      description:
        "Build courses by collecting videos, articles, and resources from any platform.",
    },
    {
      title: "Private Learning Paths",
      description:
        "Create personal courses for focused learning or internal sharing.",
    },
    {
      title: "Public Courses",
      description:
        "Share your knowledge with others and help the community learn.",
    },
  ];

  const learnItems = [
    {
      title: "Programming & Tech",
      description: "Web development, system design, data structures, and more.",
    },
    {
      title: "Music & Creativity",
      description:
        "Learn instruments, music theory, audio production, and creative skills.",
    },
    {
      title: "Business & Personal Growth",
      description:
        "Marketing, productivity, communication, and self-improvement.",
    },
  ];
  return (
    <section className="py-24">
      <h2 className="text-center text-2xl sm:text-3xl font-semibold text-neutral-100">
        What You Can Create & Learn
      </h2>

      <div className="mt-16 grid gap-12 lg:grid-cols-2">
        {/* Create */}
        <div>
          <h3 className="text-lg font-semibold text-neutral-100">
            What You Can Create
          </h3>

          <div className="mt-6 space-y-4">
            {createItems.map((item) => (
              <div
                key={item.title}
                className="rounded border border-neutral-800 bg-neutral-900/50 p-6"
              >
                <h4 className="text-sm font-medium text-neutral-100">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learn */}
        <div>
          <h3 className="text-lg font-semibold text-neutral-100">
            What You Can Learn
          </h3>

          <div className="mt-6 space-y-4">
            {learnItems.map((item) => (
              <div
                key={item.title}
                className="rounded border border-neutral-800 bg-neutral-900/50 p-6"
              >
                <h4 className="text-sm font-medium text-neutral-100">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="relative bg-neutral-950 pt-24">
      {/* Subtle divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-neutral-800" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-100">
          Start building your learning space
        </h2>

        <p className="mt-4 text-neutral-400">
          Create your first course in minutes. Curate content from anywhere,
          keep it private or share it with the world.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            label="Create Your First Course"
            path="/create-course"
            className="sm:w-auto px-8"
          />
          <Button
            label="Explore Courses"
            path="/courses"
            className="sm:w-auto px-8 bg-neutral-900 hover:bg-neutral-800"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;

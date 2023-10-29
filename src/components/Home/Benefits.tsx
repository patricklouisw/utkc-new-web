export default function Summary() {
  return (
    <div className="w-full h-50 flex justify-end items-center py-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        {/* Title */}
        <h2 className="text-4xl font-semibold leading-normal mb-10">
          Enrich Your Life With Martial Arts!
        </h2>

        <div className="flex justify-around items-stretch gap-4 flex-wrap lg:flex-nowrap lg:px-5">
          {/* Card */}
          <div className="max-w-sm bg-white border border-gray-200 shadow transition ease-in-out hover:-translate-y-1 hover:scale-105">
            <img src="/images/splash-images/b2.jpg" alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-xl font-semibold tracking-wide text-red-400 text-center">
                Build Your Confidence
              </h5>
              <p className="mb-3 font-normal text-gray-700">
                Our fun and interactive programs help students gain confidence
                by setting goals, learning new skills, and pushing further in a
                safe and supportive environment.
              </p>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 shadow  transition ease-in-out hover:-translate-y-1 hover:scale-105">
            <img src="/images/splash-images/b3.jpg" alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-xl font-semibold tracking-wide text-red-400 text-center ">
                Instill Self-Discipline
              </h5>
              <p className="mb-3 font-normal text-gray-700 ">
                Martial arts instill self-discipline by helping students learn
                to control emotions, focus attention, respect others, and
                persevere through life's challenges.
              </p>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 shadow transition ease-in-out hover:-translate-y-1 hover:scale-105 ">
            <img src="/images/splash-images/b4.jpg" alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-xl font-semibold tracking-wide text-red-400 text-center ">
                Master Self-Defense
              </h5>
              <p className="mb-3 font-normal text-gray-700 ">
                In the modern world, there are many threats to our safety, both
                physical and emotional. Karate teaches the skills needed to
                defend ourselves on all levels, which is essential for
                well-being.
              </p>
            </div>
          </div>

          <div className="max-w-sm bg-white border border-gray-200 shadow  transition ease-in-out hover:-translate-y-1 hover:scale-105 ">
            <img src="/images/splash-images/b6.jpg" alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-xl font-semibold tracking-wide text-red-400 text-center ">
                Boost Focus And Concentration
              </h5>
              <p className="mb-3 font-normal text-gray-700">
                Karate is a lifelong learning journey. Students learn focus and
                concentration, even in the face of distractions. A skill that
                translates to real life success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

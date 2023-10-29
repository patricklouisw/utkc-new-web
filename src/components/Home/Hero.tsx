export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-end items-center">
      <div className="absolute flex flex-col justify-center items-end mr-5 lg:mr-16 xl:mr-28 gap-4">
        <h1 className="text-5xl font-semibold tracking-wide text-white xl:text-6xl">
          University of Toronto Karate Club
        </h1>
        <h2 className="text-3xl tracking-normal text-red-300 xl:text-4xl">
          Train the warrior in you
        </h2>
        {/* <form action="">
              <input type="email" className="rounded" placeholder="email" />
              <button> Sign Up</button>
            </form> */}
      </div>
      <img
        className="w-screen h-screen object-cover"
        src="/images/splash-images/b1.jpg"
        alt="banner"
      />
      {/* <video autoPlay loop muted className="w-screen h-screen object-cover">
            <source src="/videos/vid4.mp4" type="video/mp4" />
          </video> */}
    </div>
  );
}

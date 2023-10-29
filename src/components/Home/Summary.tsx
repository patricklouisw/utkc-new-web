export default function Summary() {
  return (
    <div className="w-full py-20 bg-white px-5">
      <div className="max-w-7xl mx-auto flex justify-around">
        <div className="flex flex-col justify-center items-start gap-6">
          <div>
            <h2 className="text-3xl font-semibold leading-normal mb-2">
              More than 50 years legacy of <br />
              Traditional Karate
            </h2>
            <h3 className="text-xl font-semibold leading-none italic text-amber-500 mb-2">
              Join our All-Inclusive Training Environment
            </h3>
            <hr className="border-y-2 border-y-amber-400 w-1/2" />
          </div>

          <p className="leading-loose text-orange-500">
            As a diverse and inclusive community, we proudly offer martial{" "}
            <br />
            arts training programs open to people of all skills and
            capabilities.
          </p>
        </div>

        <div className="flex justify-end items-end max-w-lg">
          <img src="/images/stock/stock2.png" alt="karate_pic" />
        </div>
      </div>
    </div>
  );
}

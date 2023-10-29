export default function Summary() {
  return (
    <div className="w-full h-50 py-20 bg-red-100 px-5">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center">
        {/* Title */}
        <h2 className="w-full text-4xl font-semibold leading-normal mb-10">
          Schedule & Location
        </h2>

        {/* Schedule & Map split */}
        <div className="w-full flex flex-row justify-start items-start gap-10">
          {/* Schedule */}
          <div className="flex flex-col ">
            <h3 className="text-2xl font-semibold leading-normal">
              Fall & Winter Semester
            </h3>
            <table className="w-full text-sm text-left bg-slate-200 shadow-md mb-5">
              <thead className="text-xs uppercase bg-slate-300  ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Day
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Time
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-slate-100  ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium bg-slate-100 whitespace-nowrap "
                  >
                    Every Tuesday
                  </th>
                  <td className="px-6 py-4">9 PM to 11 PM</td>
                  <td className="px-6 py-4">Athletic Center dance Studio</td>
                </tr>
                <tr className="border-b bg-slate-100">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap "
                  >
                    Every Friday
                  </th>
                  <td className="px-6 py-4">7.30 PM to 10.30 PM</td>
                  <td className="px-6 py-4">Athletic Center dance Studio</td>
                </tr>
                <tr className="bg-slate-100 border-b  ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium bg-slate-100 whitespace-nowrap "
                  >
                    Every Saturday
                  </th>
                  <td className="px-6 py-4">1.30 PM to 4.30 PM</td>
                  <td className="px-6 py-4">Athletic Center dance Studio</td>
                </tr>
              </tbody>
            </table>
            <h3 className="text-2xl font-semibold leading-normal">
              Spring & Summer Semester
            </h3>
            <table className="w-full text-sm text-left bg-slate-200 shadow-md">
              <thead className="text-xs uppercase bg-slate-300  ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Day
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Time
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-slate-100  ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium bg-slate-100 whitespace-nowrap "
                  >
                    Every Tuesday
                  </th>
                  <td className="px-6 py-4">7 PM to 9 PM</td>
                  <td className="px-6 py-4">Athletic Center dance Studio</td>
                </tr>
                <tr className="border-b bg-slate-100">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap "
                  >
                    Every Friday
                  </th>
                  <td className="px-6 py-4">7 PM to 9 PM</td>
                  <td className="px-6 py-4">Athletic Center dance Studio</td>
                </tr>
                <tr className="bg-slate-100 border-b  ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium bg-slate-100 whitespace-nowrap "
                  >
                    Every Saturday
                  </th>
                  <td className="px-6 py-4">1.30 PM to 4.30 PM</td>
                  <td className="px-6 py-4">Athletic Center dance Studio</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold leading-normal">
              Directions to University of Toronto Athletic Centre
            </h3>
            <h4 className="text-xl font-semibold leading-normal mb-2">
              Taking the TTC?
            </h4>
            <p>
              From Spadina subway station, you can walk south along Spadina or
              take the street car until you reach Harbord Street.
            </p>
            <iframe
              src="http://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=55+Harbord+St.,+toronto,+canada&amp;sll=37.0625,-95.677068&amp;sspn=48.77566,78.310547&amp;ie=UTF8&amp;hq=&amp;hnear=55+Harbord+St,+Toronto,+Toronto+Division,+Ontario,+Canada&amp;z=16&amp;ll=43.663275,-79.401036&amp;output=embed"
              style={{
                border: 0,
                width: "100%",
                aspectRatio: "2/1",
                marginTop: "20px",
              }}
              aria-hidden="false"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}

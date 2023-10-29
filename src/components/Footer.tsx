import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const footer = () => {
  return (
    <footer className="w-full bg-gray-200 py-14 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        <div className="col-span-2 flex flex-col justify-center items-center my-5 md:my-0 md:justify-between md:items-start gap-4">
          <Image
            src="/images/footer/banner-logo-5.png"
            width={325}
            height={400}
            alt="Banner-logo-5"
          />
          <p className="text-sm text-gray-600">
            Jinbukai: The spirit of Emperors. <br />
            Train the body, the mind, and the soul. <br />
            Achieving greatness in humility.
          </p>
          <p className="text-sm text-gray-600">
            Copyright @ 2023 | All rights reserved <br />
            Jinbukai Canada
          </p>
          <div className="inline-flex gap-3">
            <Link
              href="https://www.facebook.com/uoftkarateclub/"
              target="_blank
              "
            >
              <FaFacebookSquare className="w-7 h-7" />
            </Link>
            <Link href="https://www.instagram.com/uoftkarate/" target="_blank">
              <FaInstagram className="w-7 h-7" />
            </Link>
            {/* <Link href="/" target="_blank">
                  <FaDiscord className="w-7 h-7" />
                </Link> */}
            <Link href="https://www.youtube.com/user/utkc63" target="_blank">
              <FaYoutube className="w-7 h-7" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center md:justify-start md:items-end">
          <h3 className="mt-8 text-2xl font-bold leading-none tracking-tight text-gray-900">
            Community
          </h3>
          <Link
            href={"/files/handbook_2013.pdf"}
            target="_blank"
            className="text-base text-gray-500 hover:opacity-60 hover:underline"
          >
            Club Handbook
          </Link>
          <Link
            href={"/constitution"}
            className="text-base text-gray-500 hover:opacity-60 hover:underline"
          >
            Club Constitution
          </Link>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center md:justify-start md:items-end">
          <h3 className="mt-8 text-2xl font-bold leading-none tracking-tight text-gray-900">
            Affiliation
          </h3>
          <Link
            href={"https://karateontario.ca/"}
            target="_blank"
            className="textsm text-gray-500 hover:opacity-60 hover:underline"
          >
            Karate Ontario
          </Link>
          <Link
            href={"/"}
            className="text-base text-gray-500 hover:opacity-60 hover:underline"
          >
            Jinbukai
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default footer;

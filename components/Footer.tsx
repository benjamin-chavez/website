import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="mt-10 bg-gradient-to-t from-slate-300 to-white">
      <div className="px-5 pb-5 max-w-7xl mx-auto flex gap-5 sm:flex-row flex-col justify-between items-center">
        <div className="w-fit">
          <Image
            src="/linkwarden.png"
            className="w-60"
            width={518}
            height={145}
            alt=""
          />

          <div className="flex justify-center my-2 gap-7 w-fit">
            <Link
              href="https://discord.gg/CtuYV47nuJ"
              target="_blank"
              className="text-lg p-2 h-8 w-8 bg-sky-700 text-white rounded-full flex items-center justify-center"
            >
              <i className="fa-brands fa-discord"></i>
            </Link>

            <Link
              href="https://fosstodon.org/@linkwarden"
              target="_blank"
              className="text-lg p-2 h-8 w-8 bg-sky-700 text-white rounded-full flex items-center justify-center"
            >
              <i className="fa-brands fa-mastodon"></i>
            </Link>

            <Link
              href="https://twitter.com/linkwarden_app"
              target="_blank"
              className="text-lg p-2 h-8 w-8 bg-sky-700 text-white rounded-full flex items-center justify-center"
            >
              <i className="fa-brands fa-twitter"></i>
            </Link>

            <Link
              href="https://github.com/linkwarden"
              target="_blank"
              className="text-lg p-2 h-8 w-8 bg-sky-700 text-white rounded-full flex items-center justify-center"
            >
              <i className="fa-brands fa-github"></i>
            </Link>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between gap-7">
            <Link href="/">Overview</Link>
            <Link href="https://docs.linkwarden.app" target="_blank">
              Docs
            </Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <p className="text-center sm:text-right">
            <Link href="/tos" className="text-gray-500">
              Terms Of Service
            </Link>
          </p>
          <p className="text-center sm:text-right">
            <Link href="/privacy-policy" className="text-gray-500">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
      <p className="text-sm px-5 pb-5 max-w-7xl mx-auto text-center">
        © {new Date().getFullYear()} Linkwarden. All rights reserved.
      </p>
    </div>
  );
}
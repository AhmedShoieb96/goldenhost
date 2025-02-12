"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-2">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div>
            <button
              className="hover:text-primary bg-primary hover:bg-white "
              style={{
                fontSize: "16px",
                fontWeight: "600",
                transition: ".4s",
                border: "1px solid #2c1d65 ",
                padding: "4px 20px",
                borderRadius: "10px",
              }}
            >
              {" "}
              تسجيل الدخول{" "}
            </button>
          </div>
          <div className="flex justify-between gap-10 items-center">
            <div className=" links hidden  space-x-4">

            <Link
                href="/contact"
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  transition: ".4s",
                  backgroundColor: "",
                  
                }}
                className="text-primary hover:text-socondary"
              >
                شركاء النجاح
              </Link>
              <Link
                href="/contact"
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  transition: ".4s",
                  backgroundColor: "",
                  lineHeight: "30px",

                }}
                className="text-primary hover:text-socondary"
              >
                عن قولدن
              </Link>
              <Link
                href="/contact"
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  transition: ".4s",
                  lineHeight: "30px",

                }}
                className="text-primary hover:text-socondary"
              >
                المدونة
              </Link>
              <Link
                href="/contact"
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  transition: ".4s",
                  lineHeight: "30px",

                }}
                className="text-primary hover:text-socondary"
              >
                العقارات المفضلة
              </Link>

              <Link
                href="/services"
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  transition: ".4s",
                  lineHeight: "30px",

                }}
                className=" text-primary  hover:text-socondary"
              >
                حجوزاتي
              </Link>
              <Link
                href="/about"
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  transition: ".4s",
                  lineHeight: "30px",

                }}
                className="text-primary  hover:text-socondary "
              >
                كن مضيف
              </Link>
            </div>

            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                <Image
                  src="/site-logo.svg"
                  width={149}
                  height={56}
                  alt="logo"
                />
              </Link>
            </div>
          </div>

          <div className="linksBTN flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <Link
              href="/about"
              className="block text-gray-800 hover:text-gray-600 py-2"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block text-gray-800 hover:text-gray-600 py-2"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block text-gray-800 hover:text-gray-600 py-2"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

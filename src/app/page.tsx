import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-x-hidden dark:bg-dark">
      <section className="pt-24 pb-48 px-12 relative bg-gradient-to-b from-[#fff_0%] to-[#f6f9fc_15%] dark:from-[#3f3f3f_0%] dark:to-[#343a41_15%] largeTablet:px-10 smallTablet:pb-0 phone:px-4">
        <div className="grid grid-cols-2 max-w-[94rem] mx-auto smallLaptop:grid-cols-3">
          <div className="col-span-1 largeTablet:col-span-3">
            <h1 className="text-7xl font-semibold leading-relaxed text-grey dark:text-white mt-32 mb-10 largeTablet:text-6xl tablet:mt-16 smallTablet:text-5xl">
              Simplified{" "}
              <span className="text-primary">Payment Functionality</span>
              <br /> Services
            </h1>
            <p className="text-lg mb-10">
              Make payments simpler with our advanced payment functionality
              services. Our user-friendly interface and advanced security
              features ensure smooth and secure transactions. Experience the
              ease of hassle-free payments with KonetPay.
            </p>
            <Link
              href="https://www.konet.com/"
              className="text-white bg-primary px-4 py-3 rounded-lg text-lg"
            >
              Learn More
            </Link>
          </div>
          <div className="col-span-1 flex justify-end items-end smallLaptop:col-span-2 largeTablet:col-start-2 smallTablet:col-span-3 smallTablet:col-start-1">
            <Image
              src="/girl-holding-phone.png"
              width={554}
              height={623}
              alt="girl-holding phone"
            />
          </div>
        </div>
        <div className="right-angle-element bg-white dark:bg-dark smallTablet:hidden">
          <div className="w-full h-full relative">
            <div className="bg-secondary w-24 h-24 rounded-full absolute right-1/3 bottom-1/4 largeTablet:bottom-0 largeTablet:right-0"></div>
          </div>
        </div>
      </section>
      <section className="py-5 px-12 relative largeTablet:px-10 smallTablet:pt-20 phone:px-4">
        <div className="absolute top-0 right-1/2 left-1/2 h-4 w-4 rounded rotate-[30deg] bg-primary smallTablet:top-10"></div>
        <div className="absolute top-0 right-1/4 h-10 w-10 rounded-xl rotate-[-20deg] bg-primary/34 smallTablet:top-10"></div>
        <p className="text-primary">Beyond Just Money Payment</p>
        <hr className="h-1 rounded bg-primary border-none w-8 mb-2" />
        <h2 className="text-6xl font-semibold max-w-sm leading-tight mb-10 largeTablet:max-w-md largeTablet:text-5xl smallTablet:text-4xl">
          Payment made Easier and Safer
        </h2>
        <div className="grid grid-cols-12 gap-3 text-grey dark:text-white largeTablet:grid-cols-3">
          <p className="col-span-3 text-lg">
            At KonetPay, we believe that payments should be easy and secure.
            That&lsquo;s why we&lsquo;ve developed a payment platform that takes
            the stress out of paying. Our advanced security measures ensure that
            your information is always safe, while our user-friendly interface
            makes it easy to pay and get paid.
          </p>
          <p className="col-span-4 text-lg">
            With KonetPay, you can make payments with confidence, knowing that
            your transactions are fully protected. Join the thousands of
            satisfied customers who have already made the switch to [Company
            Name] and experience payment made easier and safer today.
          </p>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-7 col-start-4 -mt-32 smallLaptop:-mt-20 largeTablet:-mt-10 largeTablet:col-span-full largeTablet:col-start-1 smallTablet:-mx-24 phone:-mx-16">
            <Image
              src="/payment-method.png"
              width={4464}
              height={3448}
              alt="Edit payment method form"
            />
          </div>
        </div>
      </section>
      <section className="py-5 mb-20">
        <div className="grid grid-cols-10 largeTablet:grid-cols-6">
          <div className="col-span-4 largeTablet:col-span-3 largeTablet:mb-10 smallTablet:col-span-4">
            <Image
              src="/pos-swipe.png"
              width={1074}
              height={844}
              alt="hand swipe a card on a POS machine"
            />
          </div>
          <div className="col-span-6 pl-32 pr-12 largeTablet:px-10 phone:px-4">
            <p className="text-primary">Beyond Just Money Payment</p>
            <hr className="h-1 rounded bg-primary border-none w-8 mb-2" />
            <h2 className="text-5xl font-semibold max-w-[40rem] leading-tight mb-10 largeTablet:text-4xl">
              Konetpay brings user friendly payments functionality services.
            </h2>
            <p className="text-lg">
              Opening more opportunities for financial inclusion, customization
              of payments functionality services and offering customers many
              different ways to pay and receive money in Nigeria with global
              networks.
            </p>
            <div className="grid grid-cols-3 pt-10 progress-grid smallTablet:grid-cols-2 smallTablet:gap-y-32 phone:grid-cols-1 phone:gap-y-24 phone:mb-10">
              <div className="percent">
                <svg>
                  <circle
                    cx="60"
                    cy="60"
                    r="60"
                  ></circle>
                  <circle
                    cx="60"
                    cy="60"
                    r="60"
                  ></circle>
                </svg>
                <div className="number">
                  <p>90%</p>
                </div>
                <p className="text-center text-lg mt-5">Peer to Peer</p>
              </div>
              <div className="percent">
                <svg>
                  <circle
                    cx="60"
                    cy="60"
                    r="60"
                  ></circle>
                  <circle
                    cx="60"
                    cy="60"
                    r="60"
                  ></circle>
                </svg>
                <div className="number">
                  <p>75%</p>
                </div>
                <p className="text-center text-lg mt-5">Business to Business</p>
              </div>
              <div className="percent">
                <svg>
                  <circle
                    cx="60"
                    cy="60"
                    r="60"
                  ></circle>
                  <circle
                    cx="60"
                    cy="60"
                    r="60"
                  ></circle>
                </svg>
                <div className="number">
                  <p>97%</p>
                </div>
                <p className="text-center text-lg mt-5">MSME</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 px-12 tablet:px-10 phone:px-0">
        <p className="text-primary text-center">Please Enjoy</p>
        <hr className="h-1 rounded bg-primary border-none w-8 mx-auto mb-2" />
        <h2 className="text-5xl text-center font-semibold mb-16 smallTablet:text-4xl">
          Our services
        </h2>
        <div className="grid grid-cols-3 tablet:grid-cols-2 smallTablet:grid-cols-1">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="relative border-l dark:border-grey"
              id={service.id}
            >
              <div className="service-gradient"></div>
              <div className="px-4 max-w-sm mb-20 phone:max-w-full smallTablet:mb-10">
                <Image
                  src={service.image}
                  height={service.height}
                  width={service.width}
                  alt={service.link.split("/")[0]}
                  className="mb-3"
                />
                <p className="text-lg font-semibold mb-3 whitespace-pre-wrap">
                  {service.title}
                </p>
                <p className="text-gray-500 mb-5 dark:text-white">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="px-3 py-2 rounded-full bg-primary text-white"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-48 bg-primary/7 relative px-12 smallTablet:py-20 phone:px-4">
        <div className="right-angle-element-reverse bg-white dark:bg-dark top-0 smallTablet:hidden"></div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl text-center font-semibold mb-10 smallTablet:text-4xl">
            Subscribe to Our Newsletter
          </h2>
          <form className="border p-1 rounded-full w-full max-w-6xl flex mb-5">
            <input
              placeholder="Your Email"
              className="rounded-full w-full bg-transparent p-3 outline-none phone:p-2"
            />
            <button className="px-10 py-3 rounded-full bg-primary text-white tablet:px-5 phone:px-3 phone:py-2">
              Subscribe
            </button>
          </form>
          <p className="text-gray-500 text-center dark:text-white">
            Subscribe today to receive latest news and best industry practise on
            Mobile Money Services.
          </p>
        </div>
      </section>
      <a
        href="#top"
        className="fixed bottom-5 right-5 text-sm"
      >
        Back to top &#8593;
      </a>
      <footer className="pt-28 pb-10 bg-primary/34 px-12 largeTablet:px-10 smallTablet:py-10 phone:px-4">
        <div className="grid grid-cols-3 mb-10 smallTablet:grid-cols-2 phone:grid-cols-1">
          <div className="h-full flex items-center smallTablet:col-span-2 smallTablet:mb-20">
            <div className="flex justify-center w-full gap-3 smallTablet:justify-start">
              {socials.map((social) => (
                <Link
                  key={social.alt}
                  href={social.link}
                >
                  <Image
                    src={social.image}
                    height={30}
                    width={30}
                    alt={social.alt}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-1">
            <div className="w-full max-w-xs mx-auto smallTablet:max-w-full">
              <p className="font-semibold text-lg mb-2">Our Address</p>
              <p>
                5 Jeremiah Ugwu Street,
                <br />
                Off Babatunde Anjous, <br />
                Lekki Phase 1,
                <br />
                Lagos, Nigeria
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <p className="font-semibold text-lg mb-2">Contact Us</p>
            <p>
              <Link
                href="#"
                className="flex items-center text-primary"
              >
                <Image
                  src="/phone.svg"
                  className="mr-1"
                  height={19}
                  width={18}
                  alt="phone icon"
                />
                <span className="mb-1">Contact</span>
              </Link>
            </p>
            <p>
              <Link
                href="#"
                className="flex items-center text-primary"
              >
                <Image
                  src="/email.svg"
                  className="mr-1"
                  height={16}
                  width={20}
                  alt="evelop icon"
                />
                <span className="mb-1">Email us</span>
              </Link>
            </p>
          </div>
        </div>
        <p className="text-center">
          Copyright © {new Date().getFullYear()}. 21st Century Technology
          Limited. All rights reserved.
        </p>
      </footer>
    </main>
  );
}

const services = [
  {
    id: "salary",
    image: "/konet-salary.png",
    height: 41,
    width: 145,
    title: "Konet Salary and Vendor Payment",
    description:
      "Konetpay will enable seamless salary payments and fund sweeping for the state government and parastatals. Fee for salary payment is charged per transaction/credit account.",
    link: "https://www.konet.com/",
  },
  {
    id: "revenue",
    image: "/konet-revenue.png",
    height: 47,
    width: 193,
    title: "Konet Revenue IGR collection",
    description:
      "Konetpay can enable government revenue collection via multiple payment channels including Bank Branches, Internet banking, PoS , online, Agency locations etc. Fee is charged as a percentage of...",
    link: "https://www.konet.com/",
  },
  {
    id: "ais",
    image: "/konet-ais.png",
    height: 40,
    width: 120,
    title: "Konet Account Inventory Service",
    description:
      "Konetpay is also able to supply a list of accounts belonging to the state across all the banks to unravel/discover all state government and associated accounts...",
    link: "https://www.konet.com/",
  },
  {
    id: "bvs",
    image: "/konet-bvs.png",
    height: 40,
    width: 116,
    title: "Konet BVN validation Service",
    description:
      "This can facilitate KYC and identification process for the state government and its parastatals it entails validation of personal data including BVN via NIBSS The system accepts...",
    link: "https://www.konet.com/",
  },
  {
    id: "tsa",
    image: "/konet-tsa.png",
    height: 40,
    width: 143,
    title: "Konet TSA",
    description:
      "Konetpay will provide treasury management solution for the state government through a real time dashboard view of bank account balances across all banks and ease of funds...",
    link: "https://www.konet.com/",
  },
  {
    id: "accounts",
    image: "/konet-accounts.png",
    height: 40,
    width: 169,
    title: "Konet Account \nVerification/Clean-up Services",
    description:
      "Konetpay can obtain account names corresponding to payee account numbers prior to effecting bulk payment s as to prevent payment into wrong accounts and to ensure...",
    link: "https://www.konet.com/",
  },
  {
    id: "pos",
    image: "/konet-pos.png",
    height: 40,
    width: 153,
    title: "Konet POS",
    description:
      "Our POS system handles payments for products and services, transactions in person or online, and provides receipts, while also streamlining customer relationship...",
    link: "https://www.konet.com/",
  },
];

const socials = [
  {
    image: "/instagram.svg",
    link: "#",
    alt: "Instagram logo",
  },
  {
    image: "/linkedin.svg",
    link: "#",
    alt: "LinkedIn logo",
  },
  {
    image: "/twitter.svg",
    link: "#",
    alt: "Twitter logo",
  },
  {
    image: "/facebook.svg",
    link: "#",
    alt: "Facebook logo",
  },
];

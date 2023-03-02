import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="pt-24 pb-48 light-blue-gradient px-12 relative">
        <div className="grid grid-cols-2 max-w-[94rem] mx-auto">
          <div className="col-span-1">
            <h1 className="text-7xl font-lato leading-relaxed font-semibold text-grey mt-32 mb-10">
              Simplified&nbsp;
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
              href="#"
              className="text-white bg-primary px-4 py-3 rounded-lg text-lg"
            >
              Learn More
            </Link>
          </div>
          <div className="col-span-1">
            <Image
              src="/girl-holding-phone.png"
              width={554}
              height={623}
              alt="girl-holding phone"
              className="ml-auto"
            />
          </div>
        </div>
        <div className="right-angle-element">
          <div className="w-full h-full relative">
            <div className="bg-secondary w-24 h-24 rounded-full absolute right-1/3 bottom-1/4"></div>
          </div>
        </div>
      </section>
      <section className="py-5 px-12 relative">
        <div className="absolute top-0 right-1/2 left-1/2 h-4 w-4 rounded rotate-[30deg] bg-primary"></div>
        <div className="absolute top-0 right-1/4 h-10 w-10 rounded-xl rotate-[-20deg] bg-primary/34"></div>
        <p className="text-primary">Beyond Just Money Payment</p>
        <hr className="h-1 rounded bg-primary w-8" />
        <h2 className="text-6xl font-semibold max-w-sm leading-tight mb-10">
          Payment made Easier and Safer
        </h2>
        <div className="grid grid-cols-12 gap-3 text-grey">
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
          <div className="col-span-7 col-start-4 -mt-32">
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
        <div className="grid grid-cols-10">
          <div className="col-span-4">
            <Image
              src="/pos-swipe.png"
              width={1074}
              height={844}
              alt="hand swipe a card on a POS machine"
            />
          </div>
          <div className="col-span-6 pl-32 pr-12">
            <p className="text-primary">Beyond Just Money Payment</p>
            <hr className="h-1 rounded bg-primary w-8" />
            <h2 className="text-5xl font-semibold max-w-[40rem] leading-tight mb-10">
              Konetpay brings user friendly payments functionality services.
            </h2>
            <p>
              Opening more opportunities for financial inclusion, customization
              of payments functionality services and offering customers many
              different ways to pay and receive money in Nigeria with global
              networks.
            </p>
            <div className="grid grid-cols-3 pt-10 progress-grid">
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
      <section className="py-5 px-12">
        <p className="text-primary text-center">Please Enjoy</p>
        <hr className="h-1 rounded bg-primary w-8 mx-auto" />
        <h2 className="text-5xl text-center font-semibold mb-10">
          Our services
        </h2>
        <div className="grid grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="relative border-l"
            >
              <div className="service-gradient"></div>
              <div className="px-4 max-w-xs mb-20">
                <Image
                  src={service.image}
                  height={service.height}
                  width={service.width}
                  alt={service.link.split("/")[0]}
                  className="max-w-[5rem] mb-3"
                />
                <p className="text-lg font-semibold mb-3 whitespace-pre-wrap">
                  {service.title}
                </p>
                <p className="text-gray-500 mb-5">{service.description}</p>
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
      <section className="py-48 bg-primary/7 relative px-12">
        <div className="right-angle-element-reverse top-0"></div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl text-center font-semibold mb-10">
            Subscribe to Our Newsletter
          </h2>
          <form className="border p-1 rounded-full w-full max-w-6xl flex mb-5">
            <input
              placeholder="Your Email"
              className="rounded-full w-full bg-transparent p-3 outline-none"
            />
            <button className="px-10 py-3 rounded-full bg-primary text-white">
              Subscribe
            </button>
          </form>
          <p className="text-gray-500 text-center">
            Subscribe today to receive latest news and best industry practise on
            Mobile Money Services.
          </p>
        </div>
      </section>
      <footer className="pt-28 pb-10 bg-primary/34 px-12">
        <div className="grid grid-cols-3 mb-10">
          <div className="h-full flex items-center">
            <div className="flex justify-center w-full gap-3">
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
          <div>
            <div className="w-full max-w-xs mx-auto">
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
          <div>
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
          Copyright © 2023. 21st Century Technology Limited. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}

const services = [
  {
    image: "/money-chart.png",
    height: 140,
    width: 140,
    title: "Konet Salary and Vendor Payment",
    description:
      "Konetpay will enable seamless salary payments and fund sweeping for the state government and parastatals. Fee for salary payment is charged per transaction/credit account.",
    link: "#",
  },
  {
    image: "/money.png",
    height: 140,
    width: 140,
    title: "Konet Revenue IGR collection",
    description:
      "Konetpay can enable government revenue collection via multiple payment channels including Bank Branches, Internet banking, PoS , online, Agency locations etc. Fee is charged as a percentage of...",
    link: "#",
  },
  {
    image: "/money-coin.png",
    height: 140,
    width: 140,
    title: "Konet Account Inventory Service",
    description:
      "Konetpay is also able to supply a list of accounts belonging to the state across all the banks to unravel/discover all state government and associated accounts...",
    link: "#",
  },
  {
    image: "/user-verify.png",
    height: 140,
    width: 140,
    title: "Konet BVN validation Service",
    description:
      "This can facilitate KYC and identification process for the state government and its parastatals it entails validation of personal data including BVN via NIBSS The system accepts...",
    link: "#",
  },
  {
    image: "/diamond.png",
    height: 140,
    width: 140,
    title: "Konet TSA",
    description:
      "Konetpay will provide treasury management solution for the state government through a real time dashboard view of bank account balances across all banks and ease of funds...",
    link: "#",
  },
  {
    image: "/piggy-bank.png",
    height: 140,
    width: 140,
    title: "Konet Account \nVerification/Clean-up Services",
    description:
      "Konetpay can obtain account names corresponding to payee account numbers prior to effecting bulk payment s as to prevent payment into wrong accounts and to ensure...",
    link: "#",
  },
  {
    image: "/pos.png",
    height: 140,
    width: 82,
    title: "Konet POS",
    description:
      "Our POS system handles payments for products and services, transactions in person or online, and provides receipts, while also streamlining customer relationship...",
    link: "#",
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

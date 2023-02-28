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
      <section className="py-5">
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
            <div className="grid grid-cols-3 pt-10">
              <div className="percent">
                <svg data-percentage={90}>
                  <circle
                    cx="70"
                    cy="70"
                    r="70"
                  ></circle>
                  <circle
                    cx="70"
                    cy="70"
                    r="70"
                  ></circle>
                </svg>
                <div className="number">
                  <p>90%</p>
                </div>
                <p className="text-center">Peer to Peer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

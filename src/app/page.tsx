import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import QualitiesList from "@/components/qualities";
import Benefits from "@/components/benefits";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-20 lg:gap-y-32 items-center justify-between">
      {/* hero section */}
      <div className="text-center flex flex-col gap-y-8">
        <h1 className="text-2xl lg:text-4xl font-bold">NexGen Agency</h1>
        <h2 className="text-4xl lg:text-6xl font-bold">
          Where Fresh Ideas Lead to Real Results
        </h2>
        <div className="flex w-full">
          <p className="basis-full lg:basis-2/3 mx-auto text-center text-base lg:text-lg text-zinc-300">
            At NexGen Agency, we deliver fresh ideas that grow your business. We
            create content that looks great and drives real results, whether
            boosting your online presence or connecting with customers.
          </p>
        </div>
        <video controls preload="auto" className="rounded-lg w-full h-auto">
          <source src="/test-video.mp4" type="video/mp4" />
          Your browser does not support the video tag
        </video>
        <Link
          href="https://calendly.com/contact-nexgenagency/30min"
          target="_blank"
          className="px-4 lg:px-8 py-3 lg:py-6 capitalize font-semibold text-lg bg-blue-700 text-white rounded-md self-center transition ease-in-out duration-500 hover:scale-110 text-center"
        >
          Book your spot now
        </Link>
      </div>

      {/* <h2 className="text-3xl font-semibold">
        Wondering who has trusted us thus far?
      </h2>
      list of brands' logs */}

      <div className="flex flex-col gap-y-8 items-center">
        <h2 className="text-2.5xl lg:text-5xl font-semibold capitalize">
          About us
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <div className="basis-full lg:basis-1/3 rounded-lg bg-gray-200">
            <Image
              src="/about-image.jpg"
              width={1000}
              height={1000}
              alt="about picture"
              className="w-full h-auto object-cover object-center p-3 rounded-lg"
            />
          </div>
          <div className="basisi-full lg:basis-2/3 flex flex-col gap-y-4 text-center lg:text-start">
            <h3 className="font-semibold text-2xl">
              From Concept to Createtion: We make your Vision Shine
            </h3>
            <p className="text-lg text-zinc-300">
              What makes us different? We are a young team with a passion for
              what we do. Our age is our strength, allowing us to stay on top of
              the latest trends and think outside the box. We approach each
              project with energy and creativity, always aiming to exceed your
              expectations. If you're looking to take your brand to the next
              level, NexGen Agency is ready to help you succeed.
            </p>
          </div>
        </div>
        <Link
          href="https://calendly.com/contact-nexgenagency/30min"
          target="_blank"
          className="px-4 lg:px-8 py-3 lg:py-6 capitalize font-semibold text-lg bg-blue-700 text-white rounded-md self-center transition ease-in-out duration-500 hover:scale-110 text-center"
        >
          Schedule Your Free Call!
        </Link>
      </div>

      {/* qualities */}
      <div className="flex flex-col gap-y-8 items-center">
        <h2 className="text-2.5xl lg:text-5xl font-semibold capitalize">
          Why work with us!
        </h2>

        <QualitiesList />
        <Link
          href="https://calendly.com/contact-nexgenagency/30min"
          target="_blank"
          className="px-4 lg:px-8 py-3 lg:py-6 capitalize font-semibold text-lg bg-blue-700 text-white rounded-md self-center transition ease-in-out duration-500 hover:scale-110 text-center"
        >
          Talk to our experts!
        </Link>
      </div>

      {/* Benefits of working with us */}
      <div className="flex flex-col gap-y-8 items-center">
        <h2 className="w-full lg:w-2/3 text-3xl text-center font-semibold">
          Why Settle for Ordinary? Discover the NexGen Difference!
        </h2>
        <p className="w-full lg:w-4/5 text-center text-lg text-zinc-300">
          Ready to elevate your brand with fresh ideas that deliver real
          results? Book a free consultation call with our experts today and
          let&apos;s create something extraordinary together!
        </p>
        <Benefits />
        <Link
          href="https://calendly.com/contact-nexgenagency/30min"
          target="_blank"
          className="px-4 lg:px-8 py-3 lg:py-6 capitalize font-semibold text-lg bg-blue-700 text-white rounded-md self-center transition ease-in-out duration-500 hover:scale-110 text-center"
        >
          Reserve Your Free Consultation!
        </Link>
      </div>

      {/* money back guarantee */}
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-8 items-center bg-gradient-to-br from-teal-700 to-green-700 rounded-xl p-4">
          <ShieldCheckIcon className="w-3/5 h-auto" />
          <h2 className="w-full lg:w-2/3 text-3xl text-center font-semibold">
            Risk-Free Results: Your Success, 100% Guaranteed or Your Money Back!
          </h2>
        </div>
        <Link
          href="https://calendly.com/contact-nexgenagency/30min"
          target="_blank"
          className="px-4 lg:px-8 py-3 lg:py-6 capitalize font-semibold text-lg bg-blue-700 text-white rounded-md self-center transition ease-in-out duration-500 hover:scale-110 text-center"
        >
          Reserve Your Free Consultation!
        </Link>
      </div>

      {/* footer */}
      <Footer />
    </main>
  );
}

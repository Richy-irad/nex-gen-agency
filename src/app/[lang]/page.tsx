import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import QualitiesList from "@/components/qualities";
import Benefits from "@/components/benefits";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import { LangParams } from "@/lib/types";
import { getTranslatedContent } from "@/lib/translations/content";
import { getTranslatedBenefits } from "@/lib/translations/benefits/benefits";
import aboutImage from "../../../public/about-image.jpg";
import HeroVideo from "@/components/hero-video";
import Topbar from "@/components/top-bar";

export default async function Home({ params }: { params: LangParams }) {
  const { lang } = params;

  const { hero, about, qualities, benefits, guarantee } =
    await getTranslatedContent(lang);

  const benefitsList = await getTranslatedBenefits(lang);

  return (
    <main className="flex flex-col gap-y-20 lg:gap-y-32 items-center justify-between">
      {/* hero section */}
      <div className="text-center flex flex-col gap-y-8">
        <Topbar currentLang={lang} />
        <h2 className="text-4xl lg:text-6xl font-bold">{hero.hook}</h2>
        <div className="flex w-full">
          <p className="basis-full lg:basis-2/3 mx-auto text-center text-base lg:text-lg text-zinc-300">
            {hero.introduction}
          </p>
        </div>
        <HeroVideo />
        <Link
          href="https://calendly.com/contact-nexgenagency/30min"
          target="_blank"
          className="px-4 lg:px-8 py-3 lg:py-6 normal-case font-semibold text-lg bg-blue-700 text-white rounded-md self-center transition ease-in-out duration-500 hover:scale-110 text-center"
        >
          {hero.buttonText}
        </Link>
      </div>

      {/* <h2 className="text-3xl font-semibold">
        Wondering who has trusted us thus far?
      </h2>
      list of brands' logs */}

      <div className="flex flex-col gap-y-8 items-center">
        <h2 className="text-2.5xl lg:text-5xl font-semibold normal-case">
          {about.header}
        </h2>
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <div className="basis-full lg:basis-1/3 rounded-lg bg-gray-200">
            <Image
              src={aboutImage}
              alt="about picture"
              priority
              className="w-full h-auto object-cover object-center p-3 rounded-lg"
            />
          </div>
          <div className="basisi-full lg:basis-2/3 flex flex-col gap-y-4 text-center lg:text-start">
            <h3 className="font-semibold text-2xl">{about.tagline}</h3>
            <p className="text-lg text-zinc-300">{about.details}</p>
          </div>
        </div>
        <Link
          href="https://calendly.com/contact-nexgenagency/30min"
          target="_blank"
          className="px-4 lg:px-8 py-3 lg:py-6 normal-case font-semibold text-lg bg-blue-700 text-white rounded-md self-center transition ease-in-out duration-500 hover:scale-110 text-center"
        >
          {about.buttonText}
        </Link>
      </div>

      {/* qualities */}
      <div className="flex flex-col gap-y-8 items-center">
        <h2 className="text-2.5xl lg:text-5xl font-semibold capitalize">
          {qualities.tagline}
        </h2>

        <QualitiesList lang={lang} />
        <Link
          href="https://calendly.com/contact-nexgenagency/30min"
          target="_blank"
          className="px-4 lg:px-8 py-3 lg:py-6 normal-case font-semibold text-lg bg-blue-700 text-white rounded-md self-center transition ease-in-out duration-500 hover:scale-110 text-center"
        >
          {qualities.buttonText}
        </Link>
      </div>

      {/* Benefits of working with us */}
      <div className="flex flex-col gap-y-8 items-center">
        <h2 className="w-full lg:w-2/3 text-3xl text-center font-semibold">
          {benefits.tagline}
        </h2>
        <p className="w-full lg:w-4/5 text-center text-lg text-zinc-300">
          {benefits.details}
        </p>
        <Benefits benefits={benefitsList} />
        <Link
          href="https://calendly.com/contact-nexgenagency/30min"
          target="_blank"
          className="px-4 lg:px-8 py-3 lg:py-6 normal-case font-semibold text-lg bg-blue-700 text-white rounded-md self-center transition ease-in-out duration-500 hover:scale-110 text-center"
        >
          {benefits.buttonText}
        </Link>
      </div>

      {/* money back guarantee */}
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-8 items-center bg-gradient-to-br from-teal-700 to-green-700 rounded-xl p-4">
          <ShieldCheckIcon className="w-3/5 h-auto" />
          <h2 className="w-full lg:w-2/3 text-3xl text-center font-semibold">
            {guarantee.tagline}
          </h2>
        </div>
        <Link
          href="https://calendly.com/contact-nexgenagency/30min"
          target="_blank"
          className="px-4 lg:px-8 py-3 lg:py-6 normal-case font-semibold text-lg bg-blue-700 text-white rounded-md self-center transition ease-in-out duration-500 hover:scale-110 text-center"
        >
          {guarantee.buttonText}
        </Link>
      </div>

      {/* footer */}
      <Footer />
    </main>
  );
}

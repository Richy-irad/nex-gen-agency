import Image from "next/image";
import Footer from "@/components/footer";
import QualitiesList from "@/components/qualities";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-20 items-center justify-between">
      {/* hero section */}
      <div className="text-center flex flex-col gap-y-8">
        <h1 className="text-4xl font-bold">NexGen Agency</h1>
        <h2 className="text-6xl font-bold">
          Crafting Visual Stories That Speak Volumes
        </h2>
        <p className="text-lg">
          Your premier destination for professional photography and videography
          services. We capture moments that matter, delivering stunning visuals
          that tell your story.
        </p>
        <video controls preload="auto" className="rounded-lg w-full h-auto">
          <source src="/test-video.mp4" type="video/mp4" />
          Your browser does not support the video tag
        </video>
        <button
          type="button"
          className="px-8 py-6 uppercase text-lg bg-black text-white rounded-md self-center transition ease-in-out duration-500 hover:scale-110"
        >
          Book your spot now
        </button>
      </div>

      {/* <h2 className="text-3xl font-semibold">
        Wondering who has trusted us thus far?
      </h2>
      list of brands' logs */}

      <div className="flex flex-col gap-y-8 items-center">
        <h2 className="text-3xl font-semibold">About us</h2>
        <div className="flex gap-x-4 items-center">
          <div className="basis-1/3 rounded-lg bg-gray-200">
            <Image
              src="/about-image.jpg"
              width={1000}
              height={1000}
              alt="about picture"
              className="w-full h-auto object-cover object-center p-3 rounded-lg"
            />
          </div>
          <div className="basis-2/3 flex flex-col gap-y-4">
            <h3 className="font-semibold text-2xl">
              From Concept to Createtion: We make your Vision Shine
            </h3>
            <p>
              At NexGen Agency, we are passionate about bringing your vision to
              life. With a team of experienced photographers and videographers,
              we specialize in creating captivating content that resonates with
              your audience.
            </p>
            <p>
              Our mission is to deliver high-quality visuals that exceed your
              expectations and help your brand stand out.
            </p>
          </div>
        </div>
        <button
          type="button"
          className="px-8 py-6 uppercase text-lg bg-black text-white rounded-md self-center transition ease-in-out duration-500 hover:scale-110"
        >
          Book a call now!
        </button>
      </div>

      {/* qualities */}
      <div className="flex flex-col gap-y-8 items-center">
        <h2 className="text-3xl font-semibold">Why choose NexGen Agency?</h2>
        <QualitiesList />
      </div>

      {/* footer */}
      <Footer />
    </main>
  );
}

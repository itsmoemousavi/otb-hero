import backgroundDecore from "@/assets/background-decore.svg";
import decore from "@/assets/decore.svg";
import play from "@/assets/play.svg";
import ladyImage from "@/assets/image.webp";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-32 md:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10">
        <img src={backgroundDecore} alt="Background Decore" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
        <div className="z-10 text-center md:text-left">
          <h3 className="text-accent font-bold uppercase text-[20px] mb-4">
            Best Destinations around the world
          </h3>
          <h1 className="text-text text-5xl lg:text-[84px] font-serif font-bold mb-8">
            Travel,{" "}
            <span className="relative inline-block">
              enjoy
              <img
                src={decore}
                alt="Decore Line"
                className="absolute min-w-[200px] lg:min-w-[340px] xl:min-w-[385px] -left-4 z-[-1]"
              />
            </span>{" "}
            and live a new and full life
          </h1>
          <p className="text-subtitle text-[16px] leading-[30px] mb-8 max-w-[477px] mx-auto md:mx-0">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
            <button className="bg-primary text-white px-7 py-4 rounded-xl font-medium shadow-[0_20px_35px_rgba(241,165,1,0.15)] hover:bg-[#d69301] transition-all cursor-pointer">
              Find out more
            </button>
            <button className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-[0_15px_30px_rgba(223,105,81,0.3)] group-hover:scale-110 transition-transform ">
                <img src={play} alt="Play Icon" />
              </div>
              <span className="text-subtitle font-medium">Play Demo</span>
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="relative z-10 max-w-[765px] w-full">
            <img
              src={ladyImage}
              alt="Lady sitting on suitcase"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

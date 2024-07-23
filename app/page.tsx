import BlurFade from "@/components/magicui/blur-fade";
import BlurIn from "@/components/magicui/blur-in";
import Particles from "@/components/magicui/particles";
import TypingAnimation from "@/components/magicui/typing-animation";
import { ParticlesComp } from "@/components/particle";

export default function Home() {
  return (
    <main className="relative w-full flex min-h-screen flex-col items-center justify-center">
      {/* <ParticlesComp /> */}
      <TypingAnimation
          duration={100}
          className="text-lg font-bold text-black dark:text-white"
          text="Remember, every failure is just a step towards your next epic disaster."
        />
      {/* <BlurIn
      word="Remember, every failure is just a step towards your next epic disaster."
      className="text-lg font-bold text-black dark:text-white"
    /> */}
      {/* <BlurFade delay={0.25} inView>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          When life feels hard
        </h2>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <span className="text-xl text-pretty tracking-tighter sm:text-xl xl:text-2xl/none">
          Give up
        </span>
      </BlurFade> */}
    </main>
  );
}

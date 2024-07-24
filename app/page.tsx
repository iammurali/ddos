import { WhatsappIcon } from "@/components/icons";
import { ArrowRightIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import TypingAnimation from "@/components/magicui/typing-animation";

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 hidden md:block">
        <div className="flex flex-row justify-end p-14">
          <div className="flex flex-row justify-between items-center gap-2 bg-[#6a6a6c] rounded-lg py-2 px-4">
            <WhatsappIcon /> Get daily dose in whatsapp <ArrowRightIcon />
          </div>
        </div>
      </div>
      <div className="flex-1 px-12 md:px-32">
        <div className="flex flex-col items-center justify-center h-full">
        <div className="pb-2 text-[#444D61]">{new Date().toDateString()}</div>
          <TypingAnimation
            duration={100}
            className="text-black dark:text-white"
            text={`"Remember, every failure is just a step towards your next epic disaster."`}
          />
        </div>
      </div>
      <div className="flex-1 px-12">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="text-center text-xs font-extralight">
            <HeartFilledIcon className="h-8 w-8" />
          </div>
          <div className="py-5 text-center text-xs font-extralight">{`Tap 'like' if you're feeling generous. It won't change the universe, but you'll get a heart to show you're pretending it might.`}</div>
          <div className="md:hidden pt-5">
            <div className="flex flex-row justify-between items-center gap-2 bg-[#172138] rounded-lg py-2 px-4">
              <WhatsappIcon /> Get daily dose in whatsapp <ArrowRightIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="md:min-h-screen flex flex-col justify-center items-center relative md:min-w-1/2">
    //   <div className="absolute top-0 right-0 p-4 hidden md:block md:p-16">
    //     <div className="flex flex-row justify-between items-center gap-2 bg-[#6a6a6c] rounded-lg py-2 px-4">
    //       <WhatsappIcon /> Get daily dose in whatsapp <ArrowRightIcon />
    //     </div>
    //   </div>
    //   <main className="relative w-full flex flex-col items-center justify-center md:pt-0 pt-14 px-4 md:px-16 lg:px-36">
    //     <div className="flex flex-col items-center justify-center md:h-40">
    //       <div className="pb-2 text-[#444D61]">{new Date().toDateString()}</div>
    //       <TypingAnimation
    //         duration={100}
    //         className="text-black dark:text-white"
    //         text={`"Remember, every failure is just a step towards your next epic disaster."`}
    //       />
    //     </div>
    // <div className="pt-24 flex flex-col justify-center items-center">
    //   <div className="text-center text-xs font-extralight">
    //     <HeartFilledIcon className="h-8 w-8" />
    //   </div>
    //   <div className="py-5 text-center text-xs font-extralight">{`Tap 'like' if you're feeling generous. It won't change the universe, but you'll get a heart to show you're pretending it might.`}</div>
    //   <div className="md:hidden pt-5">
    //     <div className="flex flex-row justify-between items-center gap-2 bg-[#172138] rounded-lg py-2 px-4">
    //       <WhatsappIcon /> Get daily dose in whatsapp <ArrowRightIcon />
    //     </div>
    //   </div>
    // </div>
    //   </main>
    // </div>
  );
}

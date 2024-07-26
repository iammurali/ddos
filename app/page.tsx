
import TypingAnimation from "@/components/magicui/typing-animation";
import { addNewLike, addNewQuote, addNewUser, getQuotes, getUsers } from "@/drizzle/db";
import { redirect } from "next/navigation";
import HeartIconAnimated from "@/components/heart";
import { WhatsappContactDialog } from "@/components/contact-dialog";

export default async function Home() {
  const result = await getQuotes();
  console.log(result);

  // async function addQuote() {
  //   return await addNewQuote();
  // }

  const addLike = async () => {
    "use server";
    if(result) {
      await addNewLike(result);
      redirect("/");
    }
  };

  const addUserData = async (data: {name: string, phone: string}) => {
    "use server"
    await addNewUser(data)  
    
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 hidden md:block">
        <div className="flex flex-row justify-end p-14">
          <WhatsappContactDialog addUserData={addUserData} />
        </div>
      </div>
      <div className="flex-1 px-12 md:px-32">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="pb-2 text-[#444D61]">{new Date().toDateString()}</div>
          <TypingAnimation
            duration={100}
            className="text-black dark:text-white"
            text={`"${result?.quote}"`}
          />
        </div>
      </div>
      <div className="flex-1 px-12">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="text-center text-xs font-extralight text-white flex flex-col items-center gap-1">
            <div className="h-10 w-10">
              <HeartIconAnimated addLike={addLike} />
            </div>
            <div className="float-right">{result?.likes}</div>
          </div>
          <div className="py-5 text-center text-xs font-extralight">{`Tap 'like' if you're feeling generous. It won't change the universe, but you'll get a heart to show you're pretending it might.`}</div>
          <div className="md:hidden pt-5">
            <WhatsappContactDialog addUserData={addUserData} />
          </div>
        </div>
      </div>
    </div>
  );
}

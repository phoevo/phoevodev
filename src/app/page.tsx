import ModeToggle from "@/components/ui/modetoggle";
import Image from "next/image";
import { DM_Sans } from "next/font/google";
import { Mail, MapPin, User } from "lucide-react";
import { TabsPage } from "./tabs";
const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`flex flex-col h-screen ${dmSans.className}`}>
      <nav className="flex flex-col p-10 w-full items-center">

        <h1 className="text-8xl">phoevo<span className="text-pink-500">.</span>dev</h1>

        <div className="flex flex-row items-center">
          <span className="flex flex-row px-2 gap-1 items-center border-r">
             <User className="text-pink-500" size={18}/>
             <p>Phoevos Maniski</p>
          </span>

          <span className="flex flex-row px-2 gap-1 items-center border-r">
             <Mail className="text-pink-500" size={18}/>
             <p>phoevo@gmail.com</p>
          </span>

           <span className="flex flex-row px-2 gap-1 items-center border-r">
             <MapPin className="text-pink-500" size={18}/>
             <p>Athens</p>
          </span>

          <ModeToggle/>
        </div>
      </nav>

      <div className="flex justify-center items-center">
        <TabsPage/>
      </div>


    </div>
  );
}

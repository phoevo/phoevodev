"use client"
import React from "react";
import ModeToggle from "@/components/ui/modetoggle";
import Image from "next/image";
import { DM_Sans, Inter, Geist } from "next/font/google";
import { Mail, MapPin, User } from "lucide-react";
import { TabsPage } from "./tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ExternalLink } from "lucide-react";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  const [open, setOpen] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  const email = "phoevo@gmail.com"
  const handleCopy = async () => {
    await navigator.clipboard.writeText(email)
    setOpen(true)
    setCopied(true)

    setTimeout(() =>{
    setOpen(false)
    setCopied(false)
    }, 1500)
  }

  return (
    <div className={`flex flex-col items-center gap-2 h-screen p-4 bg-background${geist.className}`}>
      <div className="absolute right-0 md:right-5">
      <ModeToggle/>

      </div>

      <div className="flex flex-row w-full md:w-2/3 lg:w-4xl  px-5 md:px-10 gap-4 justify-between items-center md:border-x">


        <div className="flex flex-row items-center gap-4">
           <Avatar className="h-20 w-20 md:h-40 md:w-40">
            <AvatarImage className="" src="https://github.com/phoevo.png" alt="PM" ></AvatarImage>
          </Avatar>
          <div className="flex flex-col">
            <h1 className="font-normal">Phoevos Maniski</h1>
            <h2 className="text-muted-foreground text-sm">Frontend developer</h2>
          </div>
        </div>

        <div className="flex flex-col">

          <Tooltip open={open} onOpenChange={setOpen}>
              <TooltipTrigger asChild>
                <div

                  onClick={handleCopy}
                  className="cursor-pointer text-base"
                  >
                  phoevo@gmail.com
                </div>
              </TooltipTrigger>

            <TooltipContent>
            <p>{copied ? "Copied" : "Click to copy"}</p>
          </TooltipContent>
          </Tooltip>



          <Tooltip>
            <TooltipTrigger>
              <a href="https://www.linkedin.com/in/phoevos-maniski-73392b25b/"
              className="">
              LinkedIn
            </a>
            </TooltipTrigger>
            <TooltipContent>
              <ExternalLink size={15}/>
            </TooltipContent>
          </Tooltip>


        </div>


      </div>

      <div className="flex justify-start w-md md:w-lg lg:w-4xl gap-1">
        <TabsPage/>
      </div>



 </div>

  );
}

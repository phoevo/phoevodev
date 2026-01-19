import { Badge } from '@/components/ui/badge'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { ScrollArea } from '@/components/ui/scroll-area'

const projects = [
  { title: "Synomilo",
    desc: "My largest practice project, which kept growing and eventually launched. While tutoring English online, I noticed a lack of conversation-based content that I wanted to use with my students. This project aims to solve that problem by providing my own content (with guidance), presented through a clean, paper-esque UI.",
    img: ["/synomiloss.png", "/synomiloss-dark.png"],
    stack: ["Next.js", "Typescript", "shadcn", "Appwrite Cloud"],
    link: "https://www.synomilo.com"
  },

  {
    title:"Mindwaves Blog",
    desc: "Made for a client that wanted a simple, easy-to-use blog to communicate with her followers. Developed login-dependant admin UI that gives them full control over colors and text.",
    img:["/mindwavesss.png", "/mindwavesss.png"],
    stack: ["Vite", "ReactJS", "Appwrite Cloud"],
    link:"https://ikigaivitality.vercel.app/"
  },

   {
    title:"Mindwaves Blog2",
    desc: "Made for a client that wanted a simple, easy-to-use blog to communicate with her followers. Created an admin UI that gives them full control over colors and text.",
    img:["/mindwavesss.png", "/mindwavesss.png"],
    stack: ["Vite", "ReactJS", "Appwrite Cloud"],
    link:"https://ikigaivitality.vercel.app/"
  }
]


function Projects() {
  return (
    <div className=''>
      <ScrollArea className='h-[70vh]'>
        <div className='mt-5 px-4 md:px-6'>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 md:w-full items-stretch'>
        {projects.map((project) => (
          <div key={project.title} className='border shadow-sm w-full rounded-lg bg-card flex flex-col h-auto'>
              <div className='relative w-full aspect-[16/8] scale-98'>
                <Image
                  src={project.img?.[0]}
                  alt='Screenshot'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                  className='object-cover rounded-t-lg block dark:hidden'
                />
                <Image
                  src={project.img?.[1]}
                  alt='Screenshot'
                  fill
                  sizes='(max-width: 768px) 100vw, 50vw'
                  className='object-cover rounded-t-lg hidden dark:block'
                />
              </div>

            <div className='p-6 space-y-2'>
              <div className='flex flex-row items-center gap-2'>
                <h2 className='text-lg font-semibold'>{project.title}</h2>
                <Button asChild className='gap-0 w-auto hover:gap-1' size={"sm"} variant={"link"}>
                  <Link href={project.link} target='_blank' rel='noopener noreferrer'>
                    View <ArrowUpRight />
                  </Link>
                </Button>
              </div>
              <p className='text-sm text-muted-foreground'>{project.desc}</p>
            </div>

            <div className='mt-auto p-6 pt-0 flex flex-col gap-3'>
              <div className='flex flex-wrap gap-2'>
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>

            </div>


          </div>
        ))}
        </div>
        </div>
      </ScrollArea>
    </div>
  )
}

export {Projects}

import React from 'react'
import { motion } from "motion/react"
import { ScrollArea } from '@/components/ui/scroll-area'

const work = [
   {
    company:"Synomilo",
    role: "Freelance",
    date: "November 6th, 2025 - Present",
    details:[
      "Create responsive, user-friendly interfaces to intuitively display information using React and shadcn/ui",
      "Re-design shadcn/ui components to better fit Synomilo's design language and use cases.",
      "Integrate global state management Zustand to avoid re-renders, prop drilling and overall performance.",
      "Work closely with retired University Head of English to ensure quality in learning material."
    ]
  },
  {
  company: "Teleperformance - Daimler Truck UK",
  role: "Breakdown Dispatcher",
  date: "June 17, 2025 - June 30, 2026",
  details: [
    "Took breakdown calls from customers and created cases based on their vehicle problems.",
    "Arranged roadside assistance and dispatched technicians to customers who needed help.",
    "Spoke with technicians about vehicle issues and helped decide the best solution for the customer.",
    "Kept customers and technicians updated throughout the breakdown process.",
    "Managed multiple cases at once while making sure urgent breakdowns were dealt with quickly.",
    "Recorded customer, vehicle and technician information accurately on each case."
  ]

},

  {
    company:"Hellenic Armed Forces",
    role: "Research and Informatics Corps",
    date: "September 2022 - May 2023",
    details:[
      "Diagnosed and repaired computers that experienced both software and hardware problems",
      "Operated, setup, and reconfigured camera software, ensuring consistent functionality",
      "Trained and assisted over a dozen new recruits with camera procedures and operations"
    ]
  }
]


function Work() {
  return (
    <ScrollArea className='h-[70vh]'>
    <div className='flex flex-col items-start mt-5 space-y-4'>
      {work.map((job, index) =>
        <motion.div
        key={job.company}
        className='flex flex-col w-full gap-2 rounded-md px-6 py-4 border'
        initial={{opacity: 0}}
        animate={{ opacity: 1,}}
        transition={{ duration: 0.4, delay: index * 0.080}}>


          <div className='flex flex-row justify-between items-start'>
            <div className='border-l px-3 ml-2'>
              <h1>{job.company}</h1>
              <p className='text-muted-foreground text-sm mb-2'>{job.role}</p>
            </div>
            <p className='text-sm border-l p-2'>{job.date}</p>
          </div>

          <ul className='px-5 text-sm list-disc space-y-1'>
            {job.details.map((detail, index) =>
              <li key={index}>{detail}</li>)}
          </ul>
        </motion.div>
        )}

    </div>
    </ScrollArea>
  )
}

export {Work}

import { Badge } from '@/components/ui/badge'
import React from 'react'


const work = [
   {
    company:"Synomilo",
    role: "Owner",
    date: "Nov 6th 2025 - Present",
    details:[
      "Create responsive, user-friendly interfaces to intuitively display information using React and shadcn/ui",
      "Re-design shadcn/ui components to better fit Synomilo's design language and use cases.",
      "Integrate global state management Zustand for to avoid re-renders, prop drilling and overall performance.",
      "Work closely with retired University Head of English to ensure quality in learning material."
    ]
  },
  {
    company:"Teleperformance - Daimler Truck UK",
    role: "Breakdown dispatcher",
    date: "June 17, 2025 - Present",
    details:[
      "Dispatch roadside assistance technicians to breakdown locations after creating cases with customers.",
      "Discuss vehicle issues with technicians, and propose the best solutions for the customer."
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
    <div className='flex flex-col items-start mt-5 space-y-6'>
      {work.map((job) =>
        <div key={job.company} className='flex flex-col w-full gap-2 rounded-md px-6 py-4 border'>

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
        </div>
        )}

    </div>
  )
}

export {Work}

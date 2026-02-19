import { Badge } from '@/components/ui/badge'
import React from 'react'
import { motion } from "motion/react"

const education = [
   {
    name:"ARC Academy",
    degree: "1 year study abroad",
    date: "July 2023 - June 2024",
    details:[
        "Attended ARC Academy Shinjuku in Tokyo where I improved my Japanese to the beginning of JLPT N3."
    ]
  },
  {
    name:"Univeristy of Stirling",
    degree: "Bachelors of Science with Honours Computing Science",
    date: "September 2018 - June 2022",
    details:[
      "(Java) In collaboration with other students, developed parking lot software that would track customers time of use and payment status",
      "(Springboot) Developed backend for an event tracker web application.",
      "(HTML, CSS, JavaScript) Developed an easy to read website that would help teach children beginner level Java.",
      "(Kotlin, Android Studio) Android application consisting of music theory, images, quizzes, scoring system and night mode. The goal of the app is to help people that want to learn music theory."

    ]
  },
]


function Me() {
  return (
    <div className='flex flex-col items-start mt-5 space-y-4'>
      <h1 className='text-lg border-b'>Education</h1>
      {education.map((place, index) =>
        <motion.div
        key={place.name}
        className='flex flex-col w-full gap-2 rounded-md px-6 py-4 border'
        initial={{opacity: 0}}
        animate={{ opacity: 1,}}
        transition={{ duration: 0.4, delay: index * 0.080}}>


          <div className='flex flex-row justify-between items-start'>
            <div className='border-l px-3 ml-2'>
              <h1>{place.name}</h1>
              <p className='text-muted-foreground text-sm mb-2'>{place.degree}</p>
            </div>
            <p className='text-sm border-l p-2'>{place.date}</p>
          </div>

          <ul className='px-5 text-sm list-disc space-y-1'>
            {place.details.map((detail, index) =>
              <li key={index}>{detail}</li>)}
          </ul>
        </motion.div>
        )}

    <h1 className='text-lg border-b'>Personal</h1>
        <motion.div
        className='flex flex-col w-full gap-2 rounded-md px-6 py-4 border'
        initial={{opacity: 0}}
        animate={{ opacity: 1,}}
        transition={{ duration: 0.4, delay: 0.24}}>
          <p className='text-sm'>
          I am currently learning more about backend development using sources like The Odin Project and Scrimba.
          But putting dev talk aside, I enjoy working out, cooking, traveling and learning new languages.</p>
        </motion.div>

    </div>
  )
}

export {Me}

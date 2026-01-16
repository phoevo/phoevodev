import { AppWindowIcon, CodeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Projects } from "./projects"
import { Work } from "./work"
import { Me } from "./me"

export function TabsPage() {
  return (
    <div className="w-full mt-5">
      <Tabs defaultValue="projects" className="">
  <TabsList className="gap-2 w-full md:w-2/3 lg:w-1/3">
    <TabsTrigger value="projects">Projects</TabsTrigger>
      <Separator orientation="vertical" />
    <TabsTrigger value="work">Work</TabsTrigger>
      <Separator orientation="vertical" />
    <TabsTrigger value="me">Me</TabsTrigger>
  </TabsList>

    <TabsContent value="projects" className="w-full">
    <div>
      <Projects/>
    </div>
  </TabsContent>

  <TabsContent value="work" className="w-full">
    <div>
      <Work/>
    </div>
  </TabsContent>

  <TabsContent value="me">
    <div>
      <Me/>
    </div>
  </TabsContent>
</Tabs>
    </div>
  )
}

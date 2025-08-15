import { AppWindowIcon, CodeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsPage() {
  return (
    <div className="flex bg-card">
      <Tabs defaultValue="work" className="w-full justify-evenly">
  <TabsList className="gap-2 w-full">
    <TabsTrigger value="work">Work</TabsTrigger>
    <TabsTrigger value="about">About</TabsTrigger>

  </TabsList>
  <TabsContent value="work">

  </TabsContent>
  <TabsContent value="about">

  </TabsContent>
</Tabs>
    </div>
  )
}

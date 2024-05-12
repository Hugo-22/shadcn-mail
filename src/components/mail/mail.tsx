import * as React from "react"
import {
	Search,
} from "lucide-react"

import { Input } from "@/components/ui/input"
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator"
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs"
import { TooltipProvider } from "@/components/ui/tooltip"
import { MailDisplay } from "./mail-display"
import { MailList } from "./mail-list"
import { type Mail } from "./data"

interface MailProps {
	mails: Mail[]
}

export function Mail({
	                     mails,
                     }: MailProps) {

	return (
		<TooltipProvider delayDuration={0}>
			<ResizablePanelGroup
				direction="horizontal"
				className="min-h-[200px] w-full"
			>
				<ResizablePanel
					className="min-w-[350px] overflow-y-hidden items-stretch flex"
				>
					<Tabs defaultValue="all">
						<div className="flex items-center px-4 py-1.5">
							<h1 className="text-xl font-bold">Boîte de réception</h1>
							<TabsList className="ml-auto">
								<TabsTrigger
									value="all"
									className="text-zinc-600 dark:text-zinc-200"
								>
									Tous
								</TabsTrigger>
								<TabsTrigger
									value="unread"
									className="text-zinc-600 dark:text-zinc-200"
								>
									Non lu
								</TabsTrigger>
							</TabsList>
						</div>
						<Separator/>
						<div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
							<form>
								<div className="relative">
									<Search className="absolute left-2 top-3 size-4 text-muted-foreground"/>
									<Input placeholder="Search" className="pl-8"/>
								</div>
							</form>
						</div>
						<TabsContent value="all" className="m-0 h-full">
							<MailList items={mails}/>
						</TabsContent>
						<TabsContent value="unread" className="m-0 h-full">
							<MailList items={mails.filter((item) => !item.read)}/>
						</TabsContent>
					</Tabs>
				</ResizablePanel>
				<ResizableHandle withHandle/>
				<ResizablePanel className="min-w-96">
					<MailDisplay
						mail={mails[0]}
					/>
				</ResizablePanel>
			</ResizablePanelGroup>
		</TooltipProvider>
	)
}

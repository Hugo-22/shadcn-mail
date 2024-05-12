import { Mail } from "@/components/mail/mail"
import { mails } from "@/components/mail/data"
import { Sidebar } from "@/components/mail/sidebar";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Home() {

	return (
		<div className="flex justify-center items-center h-screen">
			<div className="relative max-w-[1200px] overflow-hidden h-full mx-auto border max-h-[800px]">
				<TooltipProvider delayDuration={0}>
					<div className="flex h-full">
						<Sidebar/>
						<main
							className={cn(
								"flex-1 min-w-0 min-h-[200px] max-w-[calc(100%-50px)] transition-[margin-left] duration-300 ease-in-out",
							)}
						>
							<div className="h-full">
								<Mail mails={mails} />
							</div>
						</main>
					</div>
				</TooltipProvider>
			</div>
		</div>
	);
}

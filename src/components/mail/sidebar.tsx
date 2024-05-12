import { cn } from "@/lib/utils";
import { useSidebarToggleStore } from "@/stores/use-sidebar-toggle";
import { SidebarToggle } from "@/components/mail/sidebar-toggle";
import { Separator } from "@/components/ui/separator";
import * as React from "react";
import { MailNav } from "@/components/mail/mail-nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Sidebar() {
	const sidebar = useSidebarToggleStore()

	return (
		<div
			className={cn(
				"transition-[width] duration-300 ease-in-out",
				sidebar.isOpen === false ? "w-[50px]" : "w-60"
			)}
		>
			<div className="h-full flex flex-col items-stretch overflow-hidden border-r">
					<div
						className={cn(
							"flex h-[52px] items-center px-2",
							sidebar.isOpen === false ? "justify-center" : "justify-between",
						)}
					>
							<div className={cn(
								"whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300 flex items-center gap-2",
								sidebar.isOpen === false
									? "-translate-x-96 opacity-0 hidden"
									: "translate-x-0 opacity-100"
							)}>
								<Avatar className="flex items-center gap-2 size-8">
									<AvatarFallback className="">JD</AvatarFallback>
								</Avatar>
								<span>John Doe</span>
							</div>
						<SidebarToggle isOpen={sidebar.isOpen} setIsOpen={sidebar.setIsOpen}/>
					</div>
					<Separator/>

					<MailNav isOpen={!sidebar.isOpen}/>
			</div>
		</div>
	);
}

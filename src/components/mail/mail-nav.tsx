import Link from "next/link";
import { Archive, ArchiveX, File, Inbox, Send, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	Tooltip,
	TooltipTrigger,
	TooltipContent,
	TooltipProvider,
} from "@/components/ui/tooltip";

interface MenuProps {
	isOpen: boolean | undefined;
}

export function MailNav(props: MenuProps) {
	const items = [
		{
			title: "Boîte de réception",
			label: "128",
			icon: Inbox,
			variant: "default",
		},
		{
			title: "Brouillons",
			label: "9",
			icon: File,
			variant: "ghost",
		},
		{
			title: "Envoyés",
			label: "",
			icon: Send,
			variant: "ghost",
		},
		{
			title: "Spam",
			label: "23",
			icon: ArchiveX,
			variant: "ghost",
		},
		{
			title: "Corbeille",
			label: "",
			icon: Trash2,
			variant: "ghost",
		},
		{
			title: "Archives",
			label: "",
			icon: Archive,
			variant: "ghost",
		},
	]

	return (
		<div
			data-collapsed={props.isOpen}
			className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
		>
			<nav
				className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
				{items.map((item, index) =>
						props.isOpen ? (
							<Tooltip key={index} delayDuration={0}>
								<TooltipTrigger asChild>
									<Link
										href="#"
										className={cn(
											// @ts-ignore
											buttonVariants({variant: item.variant, size: "icon"}),
											"h-9 w-9",
											item.variant === "default" &&
											"dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
										)}
									>
										<item.icon className="size-4"/>
										<span className="sr-only">{item.title}</span>
									</Link>
								</TooltipTrigger>
								<TooltipContent side="right" className="flex items-center gap-4">
									{item.title}
									{item.label && (
										<span className="ml-auto text-muted-foreground">
                  {item.label}
                </span>
									)}
								</TooltipContent>
							</Tooltip>
						) : (
							<Link
								key={index}
								href="#"
								className={cn(
									// @ts-ignore
									buttonVariants({variant: item.variant, size: "sm"}),
									item.variant === "default" &&
									"dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
									"justify-start"
								)}
							>
								<item.icon className="mr-2 h-4 w-4"/>
								{item.title}
								{item.label && (
									<span
										className={cn(
											"ml-auto",
											item.variant === "default" &&
											"text-background dark:text-white"
										)}
									>
                {item.label}
              </span>
								)}
							</Link>
						)
				)}
			</nav>
		</div>

	);
}

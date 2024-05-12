import { PanelLeftClose } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarToggleProps {
	isOpen: boolean | undefined;
	setIsOpen?: () => void;
}

export function SidebarToggle(props: SidebarToggleProps) {
	return (
		<div className=" lg:visible z-50 bg-white">
			<Button
				onClick={() => props.setIsOpen?.()}
				className="rounded-md size-7"
				variant="outline"
				size="icon"
			>
				<PanelLeftClose
					className={cn(
						"size-4 transition-transform ease-in-out duration-300",
						props.isOpen === false ? "rotate-180" : "rotate-0"
					)}
				/>
			</Button>
		</div>
	);
}

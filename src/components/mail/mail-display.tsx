import addDays from "date-fns/addDays"
import addHours from "date-fns/addHours"
import format from "date-fns/format"
import nextSaturday from "date-fns/nextSaturday"
import {
	Archive,
	ArchiveX,
	Clock,
	Forward,
	MoreVertical,
	Reply,
	ReplyAll,
	Trash2,
} from "lucide-react"

import {
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
	DropdownMenu,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip"
import { type Mail } from "./data"

interface MailDisplayProps {
	mail: Mail | null
}

export function MailDisplay({ mail }: MailDisplayProps) {
	const today = new Date()

	return (
		<div className="flex h-full flex-col">
			<div className="flex items-center py-1.5 px-2">
				<div className="flex items-center gap-2">
					<Tooltip>
						<TooltipTrigger asChild>
							<Button variant="ghost" size="icon" disabled={!mail}>
								<Archive className="h-4 w-4" />
								<span className="sr-only">Archiver</span>
							</Button>
						</TooltipTrigger>
						<TooltipContent>Archiver</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button variant="ghost" size="icon" disabled={!mail}>
								<ArchiveX className="h-4 w-4" />
								<span className="sr-only">Spam</span>
							</Button>
						</TooltipTrigger>
						<TooltipContent>Spam</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button variant="ghost" size="icon" disabled={!mail}>
								<Trash2 className="h-4 w-4" />
								<span className="sr-only">Supprimer</span>
							</Button>
						</TooltipTrigger>
						<TooltipContent>Supprimer</TooltipContent>
					</Tooltip>
					<Separator orientation="vertical" className="mx-1 h-6" />
					<Tooltip>
						<Popover>
							<PopoverTrigger asChild>
								<TooltipTrigger asChild>
									<Button variant="ghost" size="icon" disabled={!mail}>
										<Clock className="h-4 w-4" />
										<span className="sr-only">Ignorer</span>
									</Button>
								</TooltipTrigger>
							</PopoverTrigger>
							<PopoverContent className="flex w-[100%] p-0">
								<div className="flex flex-col gap-2 border-r px-2 py-4">
									<div className="px-4 text-sm font-medium">Ignorer pendant</div>
									<Button
										variant="ghost"
										className="justify-start font-normal"
									>
										1 heure
										<span className="ml-auto text-muted-foreground">
                        {format(addHours(today, 1), "E, h:m b")}
                      </span>
									</Button>
									<div className="grid min-w-[250px] gap-1">
										<Button
											variant="ghost"
											className="justify-start font-normal"
										>
											24 heures
											<span className="ml-auto text-muted-foreground">
                        {format(addDays(today, 1), "E, h:m b")}
                      </span>
										</Button>
										<Button
											variant="ghost"
											className="justify-start font-normal"
										>
											1 semaine
											<span className="ml-auto text-muted-foreground">
                        {format(addDays(today, 7), "E, h:m b")}
                      </span>
										</Button>
									</div>
								</div>
								<div className="p-2">
									<Calendar />
								</div>
							</PopoverContent>
						</Popover>
						<TooltipContent>Ignorer</TooltipContent>
					</Tooltip>
				</div>
				<div className="ml-auto flex items-center gap-2">
					<Tooltip>
						<TooltipTrigger asChild>
							<Button variant="ghost" size="icon" disabled={!mail}>
								<Reply className="h-4 w-4" />
								<span className="sr-only">Répondre</span>
							</Button>
						</TooltipTrigger>
						<TooltipContent>Répondre</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button variant="ghost" size="icon" disabled={!mail}>
								<ReplyAll className="h-4 w-4" />
								<span className="sr-only">Répondre à tous</span>
							</Button>
						</TooltipTrigger>
						<TooltipContent>Répondre à tous</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button variant="ghost" size="icon" disabled={!mail}>
								<Forward className="h-4 w-4" />
								<span className="sr-only">Transférer</span>
							</Button>
						</TooltipTrigger>
						<TooltipContent>Transférer</TooltipContent>
					</Tooltip>
				</div>
				<Separator orientation="vertical" className="mx-2 h-6" />
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon" disabled={!mail}>
							<MoreVertical className="h-4 w-4" />
							<span className="sr-only">Plus d'actions</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem>Marquer comme non lu</DropdownMenuItem>
						<DropdownMenuItem>Suivre</DropdownMenuItem>
						<DropdownMenuItem>Ajouter un label</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<Separator />
			{mail ? (
				<div className="flex flex-1 flex-col">
					<div className="flex items-start p-4">
						<div className="flex items-start gap-4 text-sm">
							<Avatar>
								<AvatarImage alt={mail.name} />
								<AvatarFallback>
									{mail.name
										.split(" ")
										.map((chunk) => chunk[0])
										.join("")}
								</AvatarFallback>
							</Avatar>
							<div className="grid gap-1">
								<div className="font-semibold">{mail.name}</div>
								<div className="line-clamp-1 text-xs">{mail.subject}</div>
								<div className="line-clamp-1 text-xs">
									<span className="font-medium">Répondre à:</span> {mail.email}
								</div>
							</div>
						</div>
						{mail.date && (
							<div className="ml-auto text-xs text-muted-foreground">
								{format(new Date(mail.date), "PPpp")}
							</div>
						)}
					</div>
					<Separator />
					<div className="flex-1 whitespace-pre-wrap p-4 text-sm">
						{mail.text}
					</div>
					<Separator className="mt-auto" />
					<div className="p-4">
						<form>
							<div className="grid gap-4">
								<Textarea
									className="p-4"
									placeholder={`Reply ${mail.name}...`}
								/>
								<div className="flex items-center">
									<Label
										htmlFor="mute"
										className="flex items-center gap-2 text-xs font-normal"
									>
										<Switch id="mute" aria-label="Mute thread" />
										Ne plus recevoir d'e-mails de cette conversation
									</Label>
									<Button
										onClick={(e) => e.preventDefault()}
										size="sm"
										className="ml-auto"
									>
										Envoyer
									</Button>
								</div>
							</div>
						</form>
					</div>
				</div>
			) : (
				<div className="p-8 text-center text-muted-foreground">
					Aucun message sélectionné
				</div>
			)}
		</div>
	)
}

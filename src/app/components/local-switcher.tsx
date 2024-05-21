import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

export function LocalSwitcher() {
	return (
		<Select defaultValue="indonesia">
			<SelectTrigger className="w-fit">
				<SelectValue placeholder="Select a fruit" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem value="indonesia">ID</SelectItem>
					<SelectItem value="english">EN</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}

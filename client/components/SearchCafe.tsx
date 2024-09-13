import { Check, ChevronsUpDown } from 'lucide-react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useCafe } from '@/hooks/useCafe'

interface SearchCafeProps {
  coffeeRating: boolean
  open: boolean | null
  value: string
  onOpenChange: (open: boolean) => void
  onSelectCafe: (value: string) => void
}

export default function SearchCafe({
  coffeeRating,
  open,
  value,
  onOpenChange,
  onSelectCafe,
}: SearchCafeProps) {
  const { data, isPending, isError, error } = useCafe()

  if (isPending) {
    return <p>... is Pending</p>
  }

  if (isError || !data) {
    return <p>Failed {String(error)}</p>
  }

  const cafes = data

  return (
    <>
      <br />
      {coffeeRating ? (
        <h2>Where did you get this coffee?</h2>
      ) : (
        <h2>Where did you get this terrible coffee</h2>
      )}
      <Popover open={open ?? undefined} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open ?? undefined}
            className="w-[200px] justify-between"
          >
            {value
              ? cafes.find((cafe) => String(cafe.id) === value)?.name
              : 'Select a cafe...'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search cafe..." />
            <CommandList>
              <CommandEmpty>No cafe found.</CommandEmpty>
              <CommandGroup>
                {cafes.map((cafe) => (
                  <CommandItem
                    key={cafe.id}
                    value={cafe.name}
                    onSelect={() => {
                      onSelectCafe(String(cafe.id))
                      onOpenChange(false)
                    }}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        value === String(cafe.id) ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                    {cafe.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  )
}

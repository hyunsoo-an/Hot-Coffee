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
import { useCafeAlph } from '@/hooks/useCafe'
import { useRef } from 'react'

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
  const { data, isPending, isError, error } = useCafeAlph()
  const inputRef = useRef<HTMLInputElement>(null) // Ref for manual focus

  if (isPending) {
    return <p>... is Pending</p>
  }

  if (isError || !data) {
    return <p>Failed {String(error)}</p>
  }

  const cafes = data

  return (
    <>
      <h2 className="text-balance font-semibold">
        {coffeeRating
          ? 'Where did you get this coffee?'
          : 'Where did you get this terrible coffee?'}
      </h2>
      <Popover open={open ?? undefined} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open ?? undefined}
            className="justify-between"
            onClick={() => {
              if (open && inputRef.current) {
                inputRef.current.focus() // Focus input only when Popover is opened by user action
              }
            }}
          >
            {value
              ? cafes.find((cafe) => String(cafe.id) === value)?.name
              : 'Select a cafe...'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[80svw] p-0">
          <Command>
            <CommandInput
              ref={inputRef}
              placeholder="Search cafe..."
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={false} // Prevent initial auto focus
            />
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

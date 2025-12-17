import { cn } from "@/utils/cn"
import type { LucideProps } from "lucide-react"

interface InputProps {
    id: string
    placeholder: string
    icon?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
    className?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onChangeValue?: (value: string) => void
}

export function Input({ id, placeholder, icon: Icon, className, onChange, onChangeValue }: InputProps) {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (onChangeValue) {
            onChangeValue(event.target.value)
            return
        }
        if (onChange) {
            onChange(event)
        }
    }

    return (
        <div className={cn("bg-base-input rounded-lg border border-solid border-base-border flex items-center", className)}>
            {Icon && (
                <Icon size={24} className="text-base-span ml-3" />
            )}
            <input type="text" id={id} placeholder={placeholder} className="placeholder:text-base-label text-base-title px-3 py-4 w-full focus:outline-none focus-within:shadow-none focus:shadow-none" onChange={handleChange} />
        </div>
    )
}
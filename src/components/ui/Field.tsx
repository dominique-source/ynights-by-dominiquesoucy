import { type InputHTMLAttributes, type SelectHTMLAttributes, useId } from "react";
import { cn } from "@/lib/utils";

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  optional?: boolean;
}

export function Field({ label, optional, id, className, ...rest }: FieldProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={fieldId} className="text-sm font-semibold text-text/90">
        {label}
        {optional && <span className="ml-1 text-muted-2">(optionnel)</span>}
      </label>
      <input
        id={fieldId}
        className={cn(
          "h-12 border border-line bg-surface px-4 text-white placeholder:text-muted-2 outline-none transition-colors focus:border-accent-bright",
          className,
        )}
        {...rest}
      />
    </div>
  );
}

type SelectOption = string | { value: string; label: string };

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
}

export function SelectField({ label, options, id, className, ...rest }: SelectFieldProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={fieldId} className="text-sm font-semibold text-text/90">
        {label}
      </label>
      <select
        id={fieldId}
        className={cn(
          "h-12 border border-line bg-surface px-4 text-white outline-none transition-colors focus:border-accent-bright",
          className,
        )}
        {...rest}
      >
        {options.map((opt) => {
          const value = typeof opt === "string" ? opt : opt.value;
          const label2 = typeof opt === "string" ? opt : opt.label;
          return (
            <option key={value} value={value}>
              {label2}
            </option>
          );
        })}
      </select>
    </div>
  );
}

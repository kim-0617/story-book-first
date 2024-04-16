interface ILabelProps {
  htmlFor: string;
  children: string;
}

export default function Label({ htmlFor, children }: ILabelProps) {
  return (
    <label className="text-sm text-primary text-center" htmlFor={htmlFor}>
      {children}
    </label>
  )
}
interface DivProps {
label: string
color: string;
} 

export const Div = ({label, color}:DivProps) => {
  return (
    <div style={{backgroundColor:color}}>{label}</div>
  )
}
export default Div
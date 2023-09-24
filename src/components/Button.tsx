export default function Button(props: { readonly label: string, readonly onClick: VoidFunction }) {
  const { label, onClick } = props;
  return (
    <button className="btn-primary" onClick={onClick}>{label}</button>
  );
}
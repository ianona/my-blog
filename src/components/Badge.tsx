export default function Badge(props: {
  readonly text: string;
}) {
  const { text } = props;
  return (
    <span className="text-sm ml-1 bg-primary text-white px-3 py-1 rounded-full">{text}</span>
  );
}
export default function Error(props: { message: string }) {
  return (
    <div>
      <p style={{ color: "red", textAlign: "center" }}>
        <h1>❌</h1>
        <h1>Error: {props.message}</h1>
      </p>
    </div>
  );
}

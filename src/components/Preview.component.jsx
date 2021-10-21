export const Preview = ({ srcDoc }) => {
  return (
    <>
      <iframe
        title="preview"
        style={{
          width: "100%",
          height: "100%",
          border: 0,
          backgroundColor: "white",
        }}
        srcDoc={srcDoc}
      />
    </>
  );
};

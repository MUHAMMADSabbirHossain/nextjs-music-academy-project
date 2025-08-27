function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2>inner layout item</h2>
      {children}
    </div>
  );
}

export default layout;

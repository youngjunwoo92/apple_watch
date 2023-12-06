export default function Section({ children }) {
  return (
    <div className="flex-column flex h-screen w-screen items-center justify-center pt-[44px]">
      <div className="flex-column mx-auto flex h-full w-full max-w-5xl items-center justify-center p-2">
        {children}
      </div>
    </div>
  );
}

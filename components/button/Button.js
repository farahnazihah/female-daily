function GhostButton({ href, children }) {
  return (
    <button
      type="button"
      className="flex items-center hover:text-pink-700 text-sm px-5 py-2.5"
      href={href}
    >
      {children}
    </button>
  );
}

function SolidButton({ href, children }) {
  return (
    <button
      type="button"
      className="flex items-center text-white bg-pink-700 hover:bg-pink-800 break-normal focus:ring-4 focus:ring-blue-300 px-5 py-2.5"
      href={href}
    >
      {children}
    </button>
  );
}

export default function Button({ href, children, type }) {
  if (type == "solid") return <SolidButton href={href}>{children}</SolidButton>;
  else if (type == "ghost")
    return <GhostButton href={href}>{children}</GhostButton>;
}

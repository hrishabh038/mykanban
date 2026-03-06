export const getInitials = (name: string) => {
  const names = name.trim().split(" ");
  if (names.length === 1) return names[0][0].toUpperCase();
  return (names[0][0] + names[1][0]).toUpperCase();
};

export const usePathname = (
  path: string = window.location.pathname
): any => {
  const segments = path.split("/").filter(Boolean);
  const rootSegment = segments[0];

  switch (rootSegment) {
    case "profile":
      return {
        page: rootSegment,
        username: segments[1],
      };
      // executeUserTask();
      break;

    default:
      return {
        page: rootSegment || "home",
      };
      break;
  }
};

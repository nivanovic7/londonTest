export const sortFunc = {
  new: (a, b) => (a.createdAt.seconds > b.createdAt.seconds ? -1 : 1),
  old: (a, b) => (a.createdAt.seconds > b.createdAt.seconds ? 1 : -1),
  high: (a, b) => (a.priority > b.priority ? -1 : 1),
  low: (a, b) => (a.priority > b.priority ? 1 : -1),
};

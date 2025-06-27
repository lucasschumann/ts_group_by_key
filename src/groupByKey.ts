type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: string,
): GroupsMap<T> {
  const result = {} as GroupsMap<T>;

  items.forEach((el: T) => {
    for (const k of Object.keys(el)) {
      if (k === key) {
        if (!(el[k] in result)) {
          result[el[k]] = [];
        }

        result[el[k]].push(el);
      }
    }
  });

  return result;
}

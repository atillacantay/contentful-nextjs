export const asFormData = (values: Record<string, any>) => {
  const data = new FormData();
  Object.keys(values).forEach((key) => {
    const item = values[key];
    if (Array.isArray(item)) {
      const json = JSON.stringify(item);
      const blob = new Blob([json], {
        type: "application/json",
      });
      data.append(key, blob);
    } else {
      data.append(key, item);
    }
  });
  return data;
};

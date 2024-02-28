export function enumToSelectOptions(enumeration: any): string[] {
  return Object.keys(enumeration).map((key) => {
    return enumeration[key];
  });
}

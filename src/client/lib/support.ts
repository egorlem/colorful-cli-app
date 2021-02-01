/** @description empty function */
export function noop(): void { }
/**
 * @description Aligns the line to the terminal width. 
 * @param line Aingle line from psone model
 * @param columns Terminal width (shell columns variable, maybe from `curl` later)
 */
export function alignString(line: string, columns: number): string {
  const spaces = columns - line.length
  return line.padEnd(spaces, " ")
}  

// delayAdd: suma a + b tras ms milisegundos usando Promises/async
export async function delayAdd(a: number, b: number, ms = 50): Promise<number> {
  await new Promise((r) => setTimeout(r, ms))
  return a + b
}

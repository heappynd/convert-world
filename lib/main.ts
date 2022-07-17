const unit = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB'] as const

type Unit = typeof unit[number]

export function c_data_storge(
  amount: number,
  from: Unit,
  to: Unit,
  decimals: number = 2
) {
  if (amount === 0) return 0
  if (from === to) return from
  let fromIdx = unit.indexOf(from)
  let toIdx = unit.indexOf(to)
  let flag = fromIdx < toIdx
  if (!flag) {
    ;[fromIdx, toIdx] = [toIdx, fromIdx]
  }
  for (let i = fromIdx; i < toIdx; i++) {
    amount = flag ? amount / 1024 : amount * 1024
  }
  return amount.toFixed(decimals)
}

console.log(c_data_storge(1, 'GB', 'MB'))

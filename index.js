function bruteForceTwoSum(a, sum) {
  const solution = []

  for(let i = 0; i < a.length - 1; i++) {
    for(let j = i + 1; j < a.length; j++) {

      if (a[i] + a[j] === sum) {
        solution.push([a[i], a[j]])
      }

    }
  }

  return solution
}

function binarySearchTwoSum(a, sum){
  a = a.sort()

  let i = 0
  let j = a.length - 1
  let sol = []

  while (i < j) {
    const currentSum = a[i] + a[j]

    if (currentSum === sum) {
      sol.push([a[i], a[j]])
      i += 1
      j -= 1
    } 
    else if (currentSum > sum) {
      j -= 1
    } else {
      i += 1
    }
  }

  return sol 
}

function binaryMatch(a, num) {
  let low = 0
  let high = a.length - 1

  while (low < high) {
    const mid = a[parseInt(low + high / 2)]

    if (mid === num) {
      return true
    }
    else if (mid > num) {
      high -= 1
    } else {
      low += 1
    }

  }
  return false 
}

function hashTwoSum(a, sum) {
  const positions = {}
  const solution = []

  for(let i = 0; i < a.length; i++) {

    if (positions[sum - a[i]]) {
      solution.push([positions[sum - a[i]], a[i]])
    }
    positions[a[i]] = a[i] 
  }

  return solution
}
// Dice Simulation
class DiceSim{
    simulateDie(){
        let rollCounts = new Map()

       for(let itr=0; ;itr++){
            let currRollFn = () => {
                return Math.ceil(Math.random() * 6)
            }

            let currRoll = currRollFn()

            let currCount = rollCounts.get(currRoll) == undefined ? 1 : rollCounts.get(currRoll) + 1
            rollCounts.set(currRoll, currCount)

            if(currCount == 10){
                break
            }
        }

        return rollCounts
    }

    findMaxandMin(counts){
        let max = 0
        let min = []

        let maxVal = Number.MIN_VALUE
        let minVal = Number. MAX_VALUE

        for(let [k, v] of counts){
            if(v > maxVal){
                maxVal = v
                max = k
                continue
            }

            if(v < minVal){
                minVal = v
                min = [k]
            } else if (v == minVal){
                    min.push(k)
            } 
        }
        
        console.log(`${max}: Rolled ${maxVal} times`)
        console.log(`${min.join(", ")}: Rolled ${minVal} times`)
    }
}

ds = new DiceSim()
countsdict = ds.simulateDie()
ds.findMaxandMin(countsdict)
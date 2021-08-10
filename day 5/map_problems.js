// Dice Simulation
class DiceSim{
    simulateDie(){
        let rollCounts = new Map()
        let currRollFn = () => {
            return Math.ceil(Math.random() * 6)
        }

       for(let itr=0; ;itr++){
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

// Birthday Sim
class BirthdaySim{
    generateBirthdays(){
        let bdayCount = new Map();
        let bdayGen = () => {
            return Math.ceil(Math.random() * 12)
        }

        for(let person = 0; person < 50; person++){
            let currPersonBday = bdayGen()
            let currCount = bdayCount.get(currPersonBday) == undefined ? 1 : bdayCount.get(currPersonBday) + 1
            bdayCount.set(currPersonBday, currCount)
        }

        bdayCount = new Map([...bdayCount].sort((a, b) => a[0] - b[0]))
        for(let [month, count] of bdayCount){
            console.log(`For Month ${month}: ${count}`)
        }
    }
}

bd = new BirthdaySim()
bd.generateBirthdays()
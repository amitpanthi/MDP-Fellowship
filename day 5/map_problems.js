// Dice Simulation
class DiceSim{
    simulateDie(){
        let rollCounts = new Map()
        var itr = 0

        while(true){
            if(itr = 10){
                console.log(rollCounts)
                break
            }

            let currRoll = () => {
                return Math.ceil(Math.random() * 10)
        }

            let currCount = rollCounts.get(currRoll) == undefined ? 1 : rollCounts.get(currRoll) + 1
            rollCounts.set(currRoll, currCount)

            itr++
        }
    }
}

ds = new DiceSim()
ds.simulateDie()

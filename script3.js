const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
    checkChancesToWin(defenderObject) {
        let ChancesToWin=[0,4]
        if (this.archer>defenderObject.archer) {
            ChancesToWin[0]+=1
        }
        if (this.footSoldier>defenderObject.footSoldier) {
            ChancesToWin[0]+=1
        }
        if (this.cavalry>defenderObject.cavalry) {
            ChancesToWin[0]+=1
        }
        if (this.artillery>defenderObject.artillery) {
            ChancesToWin[0]+=1
        }
        return ChancesToWin

    },
    improveArmy() {
        this.archer+=5,
        this.footSoldier+=5,
        this.cavalry+=5,
        this.artillery+=5
    },
    attack(defenderObject) {
        let Chances=this.checkChancesToWin(defenderObject)
        let percent=(Chances[0]/Chances[1])*100
        if (percent<70) {
            this.improveArmy()
            alert (`Наши шансы равны ${Chances[0]}/${Chances[1]}. Необходимо укрепление!`)
        }
        else {
            alert(`Мы усилились! Мы несомненно победим! Наши шансы высоки!`)
        }
    }
    }
    const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
    }
    attacker.attack(defender)
    attacker.attack(defender)
    attacker.attack(defender)
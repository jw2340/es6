class Character {
	constructor(attackPower, health) {
		this.attackPower = attackPower;
		this.health = health;
	}

	attack(opposingPlayer) {
		if (Math.random() > 0.5) {
			opposingPlayer.health = opposingPlayer.health - this.attackPower;
		}
	}

	battle(a, b) {
		let count = 0;
		let healthA = a.health;
		let healthB = b.health;
		const winnerArr = [];
		if (count < 10) {
			while (a.health && b.health) {
				a.attack(b);
				b.attack(a);
			}
			let winner;
			if (!a.health) {
				winner = b;
			} else {
				winner = a;
			}
			let winnerObj = {
				winner
			}
			winnerArr.push(winnerObj);
			count++;
			a.health = healthA;
			b.health = healthB;
		}
		return winnerArr;
	}
}

let red = new Character(10, 100);
let blue = new Character(20, 60);

winnerArr.map((item, index) => { return { winner: item } });









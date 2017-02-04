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
		while (a.health && b.health) {
			a.attack(b);
			b.attack(a);
		}
		if (!a.health) {
			let winner = b;
			console.log("A died.");
		} else {
			let winner = a;
			console.log("B died.");
		}
	}

	let winnerObj = {
		winner
	}
}

const red = new Character(10, 100);
const blue = new Character(20, 60);

const winnerArr = ['red', 'red', 'blue', 'blue', 'red'];

winnerArr.map((item, index) => { return { winner: item } });



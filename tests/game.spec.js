class Game {
	constructor(numberOfPlayers) {
		this.position = [];
		for (let i=0; i<numberOfPlayers; i++) {
			this.position[i] = 1;
		}
		this.current = 0;
	}
	positionOf(numberOfPlayer) {
		return this.position[numberOfPlayer-1];
	}
	takeTurn() {
		this.position[this.current]++;
		this.current = (this.current + 1) % this.position.length;
	}
}

describe('Game', () => {
	it('starts all players at position 1', () => {
		const game = new Game(2);
		expect(game.positionOf(1)).toBe(1);
		expect(game.positionOf(2)).toBe(1);
	});
	it('moves players', () => {
		const game = new Game(2);
		game.takeTurn();
		expect(game.positionOf(1)).toBe(2);
		expect(game.positionOf(2)).toBe(1);
	});
	it('moves players on turns', () => {
		const game = new Game(2);
		game.takeTurn();
		game.takeTurn();
		game.takeTurn();
		expect(game.positionOf(1)).toBe(3);
		expect(game.positionOf(2)).toBe(2);
	});
});
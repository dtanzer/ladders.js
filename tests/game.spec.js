class Game {
	constructor(numberOfPlayers) {
		this.position = [];
		for (let i=0;i<numberOfPlayers;i++) {
			this.position[i] = 1;
		}
		this.current = 0;
	}
	positionOf(numberOfPlayer) {
		return this.position[numberOfPlayer-1];
	}
	takeTurn() {
		this.position[this.current]++;
	}
}

describe('Game', () => {
	it('starts all players at position 1', () => {
		const game = new Game(2);
		expect(game.positionOf(1)).toBe(1);
		expect(game.positionOf(2)).toBe(1);
	});
	it('moves players on turns', () => {
		const game = new Game(2);
		game.takeTurn();
		expect(game.positionOf(1)).toBe(2);
		expect(game.positionOf(2)).toBe(1);
	});
});
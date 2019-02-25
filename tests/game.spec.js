class Game {
	constructor(numberOfPlayers) {
		this.position = [];
		this.position[0] = 1;
	}
	positionOf(numberOfPlayer) {
		return this.position[0];
	}
	takeTurn() {
		this.position[0]++;
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
	});
});
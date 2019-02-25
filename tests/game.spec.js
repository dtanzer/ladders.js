class Game {
	constructor(numberOfPlayers) {
		this.position = [];
		for (let i=0;i<numberOfPlayers;i++) {

		}
		this.position[0] = 1;
		this.position[1] = 1;
	}
	positionOf(numberOfPlayer) {
		return this.position[numberOfPlayer-1];
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
		expect(game.positionOf(2)).toBe(1);
	});
});
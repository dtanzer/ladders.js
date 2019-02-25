class Game {
	constructor(numberOfPlayers) {

	}
	positionOf(numberOfPlayer) {
		return 1;
	}
}

describe('Game', () => {
	it('all players starts game at position 1', () => {
		const game = new Game(2);
		expect(game.positionOf(1)).toBe(1);
		expect(game.positionOf(2)).toBe(1);
	});
});
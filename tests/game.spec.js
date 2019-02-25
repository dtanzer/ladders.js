
const game = {};
const player1 = {};

describe('game', () => {
	it('we have a game', () => {
		expect(game).not.toBeFalsy();
	});
	it('we have a player', () => {
		expect(player1).not.toBeFalsy();
	});
	xit('starts, then player is at start place', () => {
		game.start(player);
		expect(player.place()).toBe(game.startPlace);
	});
});

// copy existing test so it does not get reverted for new file
// we cannot create guiding test
// we commit after comments to not lose them
// every spell fix is a commit, yeah
// TDDaiymi aus "Angst"

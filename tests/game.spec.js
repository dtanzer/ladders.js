
const game = {
	startPlace: 1,
};
const player1 = {
	
};

describe('player', () => {
	it('exists', () => {
		expect(player1).not.toBeFalsy();
	});
});

describe('game', () => {
	it('exists', () => {
		expect(game).not.toBeFalsy();
	});
	it('has a startplace', () => {
		expect(game.startPlace).not.toBeFalsy();
	});
	xit('starts, then player is at start place', () => {
		game.start(player1);
		expect(player1.place).toBe(game.startPlace);
	});
});

// copy existing test so it does not get reverted for new file
// we cannot create guiding test
// we commit after comments to not lose them
// every spell fix is a commit, yeah
// TDDaiymi aus "Angst"

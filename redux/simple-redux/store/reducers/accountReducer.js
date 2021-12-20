const accountReducer = (balance = 0, action) => {
	switch (action.type) {
		case 'GET_ACCOUNT':
			return action.account;

		case 'DEPOSIT':
			return balance + action.amount;

		case 'WITHDRAW':
			return balance - action.amount;

		default:
			return balance;
	}
}

export default accountReducer;
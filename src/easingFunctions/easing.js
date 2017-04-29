export const linear = (time, beginValue, changeInValue, duration) => {
	return changeInValue * time / duration + beginValue;
};

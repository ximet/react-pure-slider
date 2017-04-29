export const linear = (time, beginValue, changeInValue, duration) => {
	return changeInValue * time / duration + beginValue;
};

export const easeInOutQuad = (time, beginValue, changeInValue, duration) => {
    if ((time /= duration / 2) < 1) {
      return changeInValue / 2 * time * time + beginValue;
    }
    else {
      time--;
      return -changeInValue / 2 * (time * (time - 2) - 1) + beginValue;
    }
}

'use strict';

const liters = 48;

function calcPotato (value = 13, quantity = 4) {
    const potato = liters * quantity;

    const weight = Math.ceil(potato * (75 / 1000));

    const cost = weight * value;

    return alert(`For 48 liters of borscht you need: ${weight}kg potatoes! \nCost of potatoes: ${cost}`);
}
 calcPotato();

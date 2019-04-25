import constants from "./constants";

const gatherParts = name => constants.PARTS[name] || [];

const expandOrders = orderArr =>
  orderArr.map((name, id) => ({
    name,
    parts: gatherParts(name),
    id
  }));

export const hashOrders = orderArr =>
  orderArr.reduce(
    (prev, name, id) => ({
      ...prev,
      [name]: {
        name,
        parts: gatherParts(name),
        id
      }
    }),
    {}
  );

export const updateMachines = orders => {
  const ordersLeft = [];
  const ordersComplete = [];

  const machinesObjectLoaded = {};
  constants.MACHINES.forEach(machine => {
    machinesObjectLoaded[machine] = {
      inUse: false,
      parts: []
    };
  });

  orders.forEach(order => {
    let newParts;
    order.parts.forEach(part => {
      if (machinesObjectLoaded[part] && !ordersLeft.includes(order.id)) {
        machinesObjectLoaded[part].parts.push(order.id);
        machinesObjectLoaded[part].inUse = true;
        newParts = order.parts.filter(p => p !== part);
        if (newParts.length > 0) {
          ordersLeft.push(order.id);
        }
      }
    });
    ordersComplete.push( { ...order, parts: newParts || [] } )
  });

  const machinesLoaded = Object.keys(machinesObjectLoaded).map(machine => ({
    ...machinesObjectLoaded[machine],
    name: machine
  }));

  return { machinesLoaded, ordersLeft: ordersLeft.length, ordersComplete };
};

const loadMachines = orders => {
  const ordersComplete = [];

  const machinesObjectLoaded = {};
  constants.MACHINES.forEach(machine => {
    machinesObjectLoaded[machine] = {
      inUse: false,
      parts: []
    };
  });

  orders.forEach(order => {
    ordersComplete.push({
      ...order,
      totalParts: order.parts.length
    });
  });

  const machinesLoaded = Object.keys(machinesObjectLoaded).map(machine => ({
    ...machinesObjectLoaded[machine],
    name: machine
  }));

  return { machinesLoaded, ordersLeft: ordersComplete.length, ordersComplete };
};

export const initOrders = initOrderArr => {
  const orders = expandOrders(initOrderArr);
  return loadMachines(orders);
};

export default { hashOrders, initOrders, updateMachines };

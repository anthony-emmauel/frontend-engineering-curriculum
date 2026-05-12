// const products = [
//   { name: "Notebook", price: 5 },
//   { name: "Pen", price: 2 },
//   { name: "Desk Lamp", price: 35 },
//   { name: "Monitor", price: 200 },
// ];

// function findExpensive(product) {
//   return products.find((product) => product.price > 30);
// }

// console.log(findExpensive(products));

const users = [
  { id: 1, name: "Amara", active: true },
  { id: 2, name: "Kofi", active: false },
  { id: 3, name: "Yemi", active: true },
];

function findUserById(users, id) {
  return users.find((user) => user.id === id);
}

console.log(findUserById(users, 2));

// const events = [
//   { name: "Lagos Vibes", status: "completed" },
//   { name: "Abuja Nite", status: "completed" },
//   { name: "PHC Connect", status: "completed" },
// ];

// function findActiveEvent(events) {
//   const result = events.find((event) => event.status === "active");

//   if (result) {
//     console.log(result.name);
//   } else {
//     console.log("No active event found");
//   }
// }

// findActiveEvent(events);

// const transactions = [
//   { id: 101, amount: 5000, status: "completed" },
//   { id: 102, amount: 12000, status: "pending" },
//   { id: 103, amount: 3000, status: "failed" },
//   { id: 104, amount: 8000, status: "completed" },
// ];

// const pendingTransaction = (transactions) => {
//   const result = transactions.find((transaction) => {
//     return transaction.status === "pending";
//   });

//   if (result) {
//     console.log(result.id, result.amount);
//   } else {
//     console.log("No pending transaction");
//   }
// };

// pendingTransaction(transactions);

// const orders = [
//   { id: 201, customer: "Amara", amount: 8000, status: "processing" },
//   { id: 202, customer: "Kofi", amount: 15000, status: "delivered" },
//   { id: 203, customer: "Yemi", amount: 3000, status: "processing" },
//   { id: 204, customer: "Tunde", amount: 22000, status: "cancelled" },
// ];

// const findCancelledOrder = (orders) => {
//   const result = orders.find((order) => order.status === "cancelled");

//   result
//     ? console.log(result.customer, result.amount)
//     : console.log("No cancelled orders");
// };

// findCancelledOrder(orders);

// const tickets = [
//   { id: 301, event: "Lagos Vibes", price: 5000, status: "sold" },
//   { id: 302, event: "Abuja Nite", price: 8000, status: "available" },
//   { id: 303, event: "PHC Connect", price: 3000, status: "sold" },
//   { id: 304, event: "Accra Fest", price: 12000, status: "reserved" },
// ];

// const findAvailableTicket = (tickets) => {
//   const result = tickets.find((ticket) => ticket.status === "available");

//   result
//     ? console.log(result.event, result.price)
//     : console.log("No result available");
// };

// findAvailableTicket(tickets);

// const staff = [
//   { id: 1, name: "Chioma", role: "designer", salary: 120000 },
//   { id: 2, name: "Emeka", role: "developer", salary: 95000 },
//   { id: 3, name: "Sola", role: "manager", salary: 150000 },
//   { id: 4, name: "Bayo", role: "designer", salary: 110000 },
// ];

// const findHighEarner = (staff, salary) => {
//   const result = staff.find((amount) => amount.salary > salary);

//   result
//     ? console.log(result.name, result.salary)
//     : console.log("No one found above that salary");
// };

// findHighEarner(staff, 130000);
// findHighEarner(staff, 200000);

// Session 2 - SORT

// const products = [
//   { name: "Notebook", price: 5000 },
//   { name: "Desk Lamp", price: 35000 },
//   { name: "Pen", price: 2000 },
//   { name: "Monitor", price: 200000 },
// ];

// const sorted = products.sort((a, b) => b.price - a.price);

// console.log(sorted);

// const events = [
//   { name: "Lagos Vibes", attendees: 5000 },
//   { name: "Abuja Nite", attendees: 1200 },
//   { name: "PHC Connect", attendees: 8500 },
//   { name: "Accra Fest", attendees: 3000 },
// ];

// const sortByAttendees = (attendees) => {
//   return [...attendees].sort((a, b) => a.attendees - b.attendees);
// };

// console.log(sortByAttendees(events));

// const transactions = [
//   { id: 101, customer: "Amara", amount: 8000, status: "completed" },
//   { id: 102, customer: "Kofi", amount: 15000, status: "pending" },
//   { id: 103, customer: "Yemi", amount: 3000, status: "failed" },
//   { id: 104, customer: "Tunde", amount: 22000, status: "completed" },
//   { id: 105, customer: "Sola", amount: 1500, status: "pending" },
// ];

// const sortByAmount = (transactions) => {
//   const filtered = transactions.filter((completed) => {
//     return completed.status === "completed";
//   });
//   const sorted = filtered.sort((a, b) => {
//     return b.amount - a.amount;
//   });

//   return sorted;
// };

// console.log(sortByAmount(transactions));

// const events = [
//   { name: "Lagos Vibes", tickets: 5000, status: "completed" },
//   { name: "Abuja Nite", tickets: 1200, status: "cancelled" },
//   { name: "PHC Connect", tickets: 8500, status: "active" },
//   { name: "Accra Fest", tickets: 3000, status: "completed" },
//   { name: "Nairobi Nite", tickets: 7000, status: "active" },
//   { name: "Dakar Fest", tickets: 500, status: "cancelled" },
// ];

// const getTopEvents = (active) => {
//   const stillActive = active.find((eventstatus) => {
//     return eventstatus.status === "active";
//   });
//   console.log(stillActive.name);

//   const sorted = [...active]
//     .filter((status) => {
//       return status.status !== "cancelled";
//     })
//     .sort((a, b) => b.tickets - a.tickets);
//   return sorted;
// };

// console.log(getTopEvents(events));

// const sales = [12000, 8500, 23000, 4500, 17000];
// const getTotalSales = (sales) => {
//   return sales.reduce((acc, current) => acc + current, 0);
// };

// console.log(getTotalSales(sales));

// const orders = [
//   { id: 1, customer: "Amara", amount: 8000 },
//   { id: 2, customer: "Kofi", amount: 15000 },
//   { id: 3, customer: "Yemi", amount: 3000 },
//   { id: 4, customer: "Tunde", amount: 22000 },
// ];

// const getTotalRevenue = (revenueamount) => {
//   const amount = revenueamount.reduce(
//     (arr, current) => arr + current.amount,
//     0,
//   );
//   return amount;
// };

// console.log(getTotalRevenue(orders));

// const transactions = [
//   { id: 101, customer: "Amara", amount: 8000, status: "completed" },
//   { id: 102, customer: "Kofi", amount: 15000, status: "pending" },
//   { id: 103, customer: "Yemi", amount: 3000, status: "failed" },
//   { id: 104, customer: "Tunde", amount: 22000, status: "completed" },
//   { id: 105, customer: "Sola", amount: 1500, status: "pending" },
// ];

// const getTotalCompleted = (transactions) => {
//   const completed = transactions.filter((completedtransaction) => {
//     return completedtransaction.status === "completed";
//   });

//   const total = completed.reduce((arr, current) => arr + current.amount, 0);
//   return total;
// };

// console.log(getTotalCompleted(transactions));

// const orders = [
//   { id: 1, status: "completed" },
//   { id: 2, status: "pending" },
//   { id: 3, status: "completed" },
//   { id: 4, status: "failed" },
//   { id: 5, status: "completed" },
//   { id: 6, status: "pending" },
// ];

// const countByStatus = (orders) => {
//   return orders.reduce((acc, current) => {
//     acc[current.status] = (acc[current.status] || 0) + 1;
//     return acc;
//   }, {});
// };

// console.log(countByStatus(orders));
// const transactions = [
//   { id: 101, customer: "Amara", amount: 8000, category: "food" },
//   { id: 102, customer: "Kofi", amount: 15000, category: "transport" },
//   { id: 103, customer: "Yemi", amount: 3000, category: "food" },
//   { id: 104, customer: "Tunde", amount: 22000, category: "entertainment" },
//   { id: 105, customer: "Sola", amount: 1500, category: "transport" },
//   { id: 106, customer: "Bayo", amount: 9000, category: "food" },
// ];

// const totalByCategory = (transaction) => {
//   return transaction.reduce((acc, current) => {
//     acc[current.category] = (acc[current.category] || 0) + current.amount;
//     return acc;
//   }, {});
// };

// console.log(totalByCategory(transactions));

// const orders = [
//   { id: 1, customer: "Amara", amount: 8000, status: "completed" },
//   { id: 2, customer: "Kofi", amount: 15000, status: "pending" },
//   { id: 3, customer: "Yemi", amount: 3000, status: "completed" },
//   { id: 4, customer: "Tunde", amount: 22000, status: "failed" },
//   { id: 5, customer: "Sola", amount: 1500, status: "pending" },
//   { id: 6, customer: "Bayo", amount: 9000, status: "completed" },
// ];

// const totalCompletedRevenue = (order) => {
//   const sort = order.filter((orderstatus) => {
//     return orderstatus.status === "completed";
//   });

//   const total = sort.reduce((acc, current) => acc + current.amount, 0);
//   return total;
// };

// console.log(totalCompletedRevenue(orders));

// const transactions = [
//   {
//     id: 101,
//     customer: "Amara",
//     amount: 8000,
//     category: "food",
//     status: "completed",
//   },
//   {
//     id: 102,
//     customer: "Kofi",
//     amount: 15000,
//     category: "transport",
//     status: "pending",
//   },
//   {
//     id: 103,
//     customer: "Yemi",
//     amount: 3000,
//     category: "food",
//     status: "completed",
//   },
//   {
//     id: 104,
//     customer: "Tunde",
//     amount: 22000,
//     category: "entertainment",
//     status: "failed",
//   },
//   {
//     id: 105,
//     customer: "Sola",
//     amount: 1500,
//     category: "transport",
//     status: "completed",
//   },
//   {
//     id: 106,
//     customer: "Bayo",
//     amount: 9000,
//     category: "food",
//     status: "pending",
//   },
// ];

// const totalByCategory = (transactions) => {
//   const sort = transactions.filter((completed) => {
//     return completed.status === "completed";
//   });

//   const total = sort.reduce((acc, current) => {
//     acc[current.category] = (acc[current.category] || 0) + current.amount;
//     return acc;
//   }, {});
//   return total;
// };

// console.log(totalByCategory(transactions));

const orders = [
  { id: 1, customer: "Amara", amount: 8000, status: "completed" },
  { id: 2, customer: "Kofi", amount: 15000, status: "pending" },
  { id: 3, customer: "Yemi", amount: 3500, status: "completed" },
  { id: 4, customer: "Tunde", amount: 22000, status: "failed" },
  { id: 5, customer: "Sola", amount: 1500, status: "pending" },
  { id: 6, customer: "Bayo", amount: 9000, status: "completed" },
  { id: 7, customer: "Chioma", amount: 4000, status: "completed" },
];

const summaryByStatus = (orders) => {
  const sortOrder = orders.filter((greaterthan) => {
    return greaterthan.amount > 5000;
  });

  const total = sortOrder.reduce((acc, current) => {
    acc[current.status] = (acc[current.status] || 0) + current.amount;
    return acc;
  }, {});

  return total;
};

console.log(summaryByStatus(orders));

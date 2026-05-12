const statuses = [
  {
    id: "operational",
    title: "All Systems Operational",
    message: "Everything is running smoothly.",
    className: "operational",
  },
  {
    id: "degraded",
    title: "Degraded Performance",
    message: "Some systems are experiencing issues.",
    className: "degraded",
  },
  {
    id: "down",
    title: "System Down",
    message: "We are experiencing an outage.",
    className: "down",
  },
];

const title = document.getElementById("statusTitle");
const message = document.getElementById("statusMessage");

const btnOperational = document.getElementById("btnOperational");
const btnDegraded = document.getElementById("btnDegraded");
const btnDown = document.getElementById("btnDown");

const card = document.getElementById("statusCard");

const updateCardInfo = (cardstatus) => {
  const findMessage = statuses.find((status) => status.id === cardstatus);

  title.textContent = findMessage.title;
  message.textContent = findMessage.message;

  card.classList.remove("operational", "degraded", "down");
  card.classList.add(findMessage.className);
};

btnDegraded.addEventListener("click", () => updateCardInfo("degraded"));
btnOperational.addEventListener("click", () => updateCardInfo("operational"));
btnDown.addEventListener("click", () => updateCardInfo("down"));
